# 个人作品集网站 - 部署指南

这是一个使用 React 19 + TailwindCSS 4 构建的现代极简主义作品集网站。本指南将帮助您在自己的服务器上部署和运行这个网站。

---

## 📋 前置要求

在开始之前，请确保您的服务器上已安装以下软件：

- **Node.js** (v18 或更高版本) - [下载链接](https://nodejs.org/)
- **npm** 或 **pnpm** (Node.js 包管理器)
- **Git** (可选，用于克隆项目)

### 检查是否已安装

```bash
node --version
npm --version
```

---

## 🚀 快速开始（本地开发）

### 1. 获取项目文件

**方式 A：从 Manus 管理界面下载**
- 登录 Manus 管理界面
- 进入 **Code** 面板
- 点击 **"Download all files"** 下载完整项目

**方式 B：使用 Git 克隆（如果您有 Git 仓库）**
```bash
git clone <your-repository-url>
cd portfolio-website
```

### 2. 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm（推荐，更快）
pnpm install
```

### 3. 启动开发服务器

```bash
# 使用 npm
npm run dev

# 或使用 pnpm
pnpm dev
```

您会看到类似的输出：
```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
```

在浏览器中打开 `http://localhost:5173/` 即可查看网站。

---

## 🏗️ 生产环境部署

### 1. 构建生产版本

```bash
# 使用 npm
npm run build

# 或使用 pnpm
pnpm build
```

这会在 `dist/` 目录中生成优化后的静态文件。

### 2. 部署选项

#### **选项 A：使用 Node.js 服务器（推荐）**

项目包含一个简单的 Express 服务器。您可以这样部署：

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

服务器默认运行在 `http://localhost:3000`

**在您的服务器上运行：**

```bash
# 1. SSH 连接到您的服务器
ssh user@your-server.com

# 2. 克隆或上传项目
git clone <your-repository-url>
cd portfolio-website

# 3. 安装依赖
npm install

# 4. 构建项目
npm run build

# 5. 使用 PM2 或 systemd 保持服务运行（见下文）
npm start
```

#### **选项 B：使用静态文件托管（Nginx/Apache）**

如果您只想托管静态文件（不需要 Node.js 服务器）：

```bash
# 1. 构建项目
npm run build

# 2. 将 dist 目录中的所有文件上传到您的 Web 服务器
# 例如上传到 /var/www/portfolio/
```

**Nginx 配置示例：**

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/portfolio;
    index index.html;

    # 处理 SPA 路由
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Apache 配置示例：**

在 `.htaccess` 文件中添加：

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### **选项 C：使用 Docker 容器**

创建 `Dockerfile`：

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

构建和运行：

```bash
docker build -t portfolio-website .
docker run -p 3000:3000 portfolio-website
```

---

## 🔧 保持服务运行

### 使用 PM2（推荐）

PM2 是一个 Node.js 进程管理器，可以确保您的应用在崩溃时自动重启。

```bash
# 全局安装 PM2
npm install -g pm2

# 启动应用
pm2 start npm --name "portfolio" -- start

# 设置开机自启
pm2 startup
pm2 save

# 查看运行状态
pm2 status

# 查看日志
pm2 logs portfolio
```

### 使用 Systemd（Linux）

创建 `/etc/systemd/system/portfolio.service`：

```ini
[Unit]
Description=Portfolio Website
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/portfolio-website
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

启用和启动：

```bash
sudo systemctl daemon-reload
sudo systemctl enable portfolio
sudo systemctl start portfolio
sudo systemctl status portfolio
```

---

## 🌐 配置自定义域名

### 使用 Nginx 反向代理

如果您的应用运行在 `localhost:3000`，可以通过 Nginx 反向代理到您的域名：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 配置 SSL/HTTPS

使用 Let's Encrypt 和 Certbot：

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 📝 自定义网站内容

编辑以下文件来自定义您的网站内容：

| 文件 | 用途 |
|------|------|
| `client/src/components/Hero.tsx` | 修改英雄部分文本和 CTA 按钮 |
| `client/src/components/Projects.tsx` | 添加或编辑您的项目信息 |
| `client/src/components/About.tsx` | 更新关于部分和技能列表 |
| `client/src/components/Contact.tsx` | 配置联系表单和社交链接 |
| `client/src/index.css` | 修改颜色、字体等设计元素 |
| `client/public/images/` | 替换或添加图片资源 |

---

## 🐛 常见问题

### Q: 我应该选择哪个部署选项？

**A:** 
- **选项 A（Node.js）**：如果您想要完整的服务器功能，推荐使用
- **选项 B（静态文件）**：如果您只想要简单的静态网站托管，成本最低
- **选项 C（Docker）**：如果您的服务器支持容器化部署

### Q: 如何更新网站内容？

**A:** 编辑源文件后，运行 `npm run build` 重新构建，然后重启服务。

### Q: 如何处理 HTTPS？

**A:** 使用 Let's Encrypt 和 Certbot（见上文 SSL/HTTPS 部分）。

### Q: SSL 证书申请失败，提示 "too many certificates" 错误怎么办？

**A:** 这是 Let's Encrypt 的速率限制错误，表示在过去 7 天内为同一组域名申请了过多证书。解决方法：

1. **等待限制过期**：通常需要等待 7 天（168 小时）后重试。错误信息会显示具体的重试时间。

2. **使用不同的 ACME 账户**：在 1Panel 或 Certbot 中配置新的 ACME 账户邮箱。

3. **使用 DNS 验证**：如果可能，改用 DNS 验证而不是 HTTP 验证，可以避免一些限制。

4. **检查域名配置**：确保域名解析正确，避免重复申请。

**在 1Panel 中的处理步骤：**
- 进入 **网站** → **SSL** 页面
- 找到失败的证书
- 点击 **重新申请** 或等待限制时间过去
- 如果需要，可以删除旧证书并重新创建

### Q: 网站加载缓慢怎么办？

**A:** 
- 确保启用了缓存（见 Nginx 配置）
- 使用 CDN 加速静态资源
- 检查服务器性能和网络连接

---

## 📞 获取帮助

如果您在部署过程中遇到问题，请：

1. 检查服务器日志：`pm2 logs portfolio`
2. 确保所有依赖都已正确安装
3. 验证 Node.js 版本是否满足要求
4. 检查防火墙和端口配置

---

## 📚 相关资源

- [Node.js 官方文档](https://nodejs.org/docs/)
- [Express.js 文档](https://expressjs.com/)
- [Nginx 文档](https://nginx.org/en/docs/)
- [PM2 文档](https://pm2.keymetrics.io/)
- [Let's Encrypt](https://letsencrypt.org/)

---

祝您部署顺利！如有任何问题，欢迎联系支持。
