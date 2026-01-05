#!/bin/bash

# 个人作品集网站部署脚本
# 部署到: http://136.244.85.193:12135/2226dc2cbb

echo "🚀 开始部署个人作品集网站..."

# 检查 Docker 是否安装
if ! command -v docker &> /dev/null; then
    echo "❌ Docker 未安装，正在安装..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    newgrp docker
fi

# 检查 Docker Compose 是否安装
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose 未安装，正在安装..."
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi

# 检查端口 12135 是否被占用
if sudo lsof -i :12135 &> /dev/null; then
    echo "⚠️  端口 12135 已被占用，请检查是否会影响 SINGBOX"
    echo "当前占用端口 12135 的进程:"
    sudo lsof -i :12135
    read -p "是否继续部署? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "部署已取消"
        exit 1
    fi
fi

# 停止可能存在的旧容器
echo "🛑 停止旧容器..."
docker-compose down || true

# 构建并启动新容器
echo "🏗️  构建并启动容器..."
docker-compose up -d --build

# 等待容器启动
echo "⏳ 等待容器启动..."
sleep 10

# 检查容器状态
echo "🔍 检查容器状态..."
docker-compose ps

# 测试网站访问
echo "🌐 测试网站访问..."
if curl -f http://localhost:12135 &> /dev/null; then
    echo "✅ 网站部署成功!"
    echo "📍 访问地址: http://136.244.85.193:12135/2226dc2cbb"
else
    echo "❌ 网站访问测试失败，请检查日志:"
    docker-compose logs portfolio
fi

echo "📊 查看实时日志: docker-compose logs -f"
echo "🛑 停止服务: docker-compose down"
echo "🔄 重启服务: docker-compose restart"
