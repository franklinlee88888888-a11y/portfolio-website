# Docker 部署指南 - 个人作品集网站

本指南将帮助您使用 Docker 在任何服务器上快速部署个人作品集网站。

---

## 📋 前置要求

### 必需软件
- **Docker** (v20.10+) - [安装指南](https://docs.docker.com/get-docker/)
- **Docker Compose** (v1.29+) - [安装指南](https://docs.docker.com/compose/install/)

### 检查安装
```bash
docker --version
docker-compose --version
```

---

## 🚀 快速开始（3 步）

### 1️⃣ 下载项目文件

从 Manus 管理界面下载项目，或使用 Git 克隆：

```bash
git clone <your-repository-url>
cd portfolio-website
```

### 2️⃣ 构建并启动容器

```bash
# 使用 docker-compose 一键启动
docker-compose up -d

# 或者手动构建和运行
docker build -t portfolio-website .
docker run -d -p 3000:3000 --name portfolio portfolio-website
```

### 3️⃣ 访问网站

打开浏览器访问：`http://localhost:3000`

---

## 📦 Docker 文件说明

| 文件 | 用途 |
|------|------|
| `Dockerfile` | 定义如何构建 Docker 镜像 |
| `docker-compose.yml` | 定义容器编排和配置 |
| `.dockerignore` | 指定构建时忽略的文件 |
| `nginx.conf` | Nginx 反向代理配置（可选） |

---

## 🔧 常用 Docker 命令

### 启动容器
```bash
# 后台启动
docker-compose up -d

# 前台启动（查看日志）
docker-compose up
```

### 停止容器
```bash
docker-compose down
```

### 查看日志
```bash
# 查看实时日志
docker-compose logs -f

# 查看特定服务的日志
docker-compose logs -f portfolio
```

### 重启容器
```bash
docker-compose restart
```

### 进入容器
```bash
docker-compose exec portfolio sh
```

### 查看容器状态
```bash
docker-compose ps
```

---

## 🌐 部署到特定服务器 (http://136.244.85.193:12135/2226dc2cbb)

### 前置准备
1. 确保服务器 136.244.85.193 可以访问
2. 在服务器上安装 Docker 和 Docker Compose
3. 确保端口 12135 不被其他服务占用（注意不要影响 SINGBOX）

### 部署步骤

#### 步骤 1：连接到服务器
```bash
ssh user@your-server-ip
```

#### 步骤 2：安装 Docker（如果未安装）
```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 添加当前用户到 docker 组（可选）
sudo usermod -aG docker $USER
newgrp docker
```

#### 步骤 3：克隆项目
```bash
git clone <your-repository-url>
cd portfolio-website
```

#### 步骤 4：启动容器
```bash
docker-compose up -d
```

#### 步骤 5：验证运行状态
```bash
docker-compose ps
curl http://localhost:3000
```

---

## 🔐 配置域名和 HTTPS

### 使用 Nginx 反向代理 + Let's Encrypt

#### 步骤 1：配置 DNS
在您的域名提供商处，将域名 A 记录指向服务器 IP。

#### 步骤 2：安装 Certbot
```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
```

#### 步骤 3：获取 SSL 证书
```bash
sudo certbot certonly --standalone -d your-domain.com
```

证书将保存在：
- 证书：`/etc/letsencrypt/live/your-domain.com/fullchain.pem`
- 私钥：`/etc/letsencrypt/live/your-domain.com/privkey.pem`

#### 步骤 4：更新 docker-compose.yml

取消注释 `docker-compose.yml` 中的 Nginx 部分，并修改：

```yaml
services:
  nginx:
    image: nginx:alpine
    container_name: portfolio-nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - /etc/letsencrypt/live/your-domain.com:/etc/nginx/ssl:ro
    depends_on:
      - portfolio
    restart: unless-stopped
    networks:
      - portfolio-network

  portfolio:
    # ... 其他配置 ...
    networks:
      - portfolio-network

networks:
  portfolio-network:
    driver: bridge
```

#### 步骤 5：重启容器
```bash
docker-compose down
docker-compose up -d
```

#### 步骤 6：验证 HTTPS
```bash
curl https://your-domain.com
```

#### 步骤 7：自动续期证书
```bash
# 创建续期脚本
sudo tee /usr/local/bin/renew-certs.sh > /dev/null <<EOF
#!/bin/bash
certbot renew --quiet
docker-compose -f /path/to/portfolio-website/docker-compose.yml restart nginx
EOF

# 添加执行权限
sudo chmod +x /usr/local/bin/renew-certs.sh

# 添加到 crontab（每月检查一次）
sudo crontab -e
# 添加这一行：
# 0 2 1 * * /usr/local/bin/renew-certs.sh
```

---

## 📊 性能优化

### 1. 资源限制
在 `docker-compose.yml` 中已配置资源限制：
- CPU：最多 1 核，预留 0.5 核
- 内存：最多 512MB，预留 256MB

根据您的服务器性能调整这些值。

### 2. 日志管理
配置了日志轮转，防止日志文件过大：
- 最大文件大小：10MB
- 最多保留：3 个文件

### 3. 健康检查
容器包含健康检查，Docker 会自动重启不健康的容器。

### 4. 缓存优化
Nginx 配置了静态资源缓存和 Gzip 压缩。

---

## 🔍 故障排查

### 容器无法启动
```bash
# 查看详细错误日志
docker-compose logs portfolio

# 检查端口是否被占用
sudo lsof -i :3000
```

### 容器频繁重启
```bash
# 查看容器状态
docker-compose ps

# 查看健康检查日志
docker inspect portfolio-website | grep -A 10 "Health"
```

### 无法访问网站
```bash
# 检查容器是否运行
docker-compose ps

# 检查端口映射
docker port portfolio-website

# 测试连接
curl http://localhost:3000
```

### HTTPS 证书错误
```bash
# 检查证书有效期
sudo certbot certificates

# 手动续期
sudo certbot renew --force-renewal
```

---

## 🔄 更新网站

### 更新代码后重新部署

```bash
# 1. 拉取最新代码
git pull origin main

# 2. 重新构建镜像
docker-compose build --no-cache

# 3. 重启容器
docker-compose up -d
```

### 更新特定文件

```bash
# 1. 编辑文件
# 例如：修改 client/src/components/Hero.tsx

# 2. 重新构建并启动
docker-compose up -d --build
```

---

## 📈 监控和维护

### 查看容器资源使用
```bash
docker stats portfolio-website
```

### 定期清理
```bash
# 删除未使用的镜像
docker image prune

# 删除未使用的容器
docker container prune

# 删除未使用的卷
docker volume prune
```

### 备份数据
```bash
# 备份容器配置
docker-compose config > backup.yml

# 备份项目文件
tar -czf portfolio-backup.tar.gz .
```

---

## 🚀 高级配置

### 使用 Docker Registry
如果您想在多个服务器上部署：

```bash
# 登录到 Docker Hub
docker login

# 标记镜像
docker tag portfolio-website your-username/portfolio-website:latest

# 推送到 Docker Hub
docker push your-username/portfolio-website:latest

# 在其他服务器上拉取
docker pull your-username/portfolio-website:latest
docker run -d -p 3000:3000 your-username/portfolio-website:latest
```

### 使用 Docker Swarm（多节点部署）
```bash
# 初始化 Swarm
docker swarm init

# 部署服务
docker stack deploy -c docker-compose.yml portfolio
```

### 使用 Kubernetes（企业级）
参考 Kubernetes 官方文档将 Docker Compose 配置转换为 Kubernetes manifests。

---

## 📚 相关资源

- [Docker 官方文档](https://docs.docker.com/)
- [Docker Compose 文档](https://docs.docker.com/compose/)
- [Nginx 文档](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)
- [DigitalOcean 教程](https://www.digitalocean.com/community/tutorials)

---

## 💡 最佳实践

1. **始终使用 docker-compose** - 便于管理和扩展
2. **定期更新镜像** - `docker-compose pull && docker-compose up -d`
3. **监控日志** - 定期检查 `docker-compose logs`
4. **备份配置** - 保存 docker-compose.yml 和 nginx.conf
5. **使用环境变量** - 敏感信息不要硬编码
6. **设置资源限制** - 防止容器占用过多资源
7. **启用健康检查** - 自动重启失败的容器
8. **定期清理** - 删除未使用的镜像和容器

---

## 🆘 获取帮助

如果您遇到问题，请：

1. 查看容器日志：`docker-compose logs -f`
2. 检查 Docker 状态：`docker-compose ps`
3. 验证网络连接：`curl http://localhost:3000`
4. 查看本指南的故障排查部分

---

祝您部署顺利！🎉
