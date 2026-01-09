# 多阶段构建：第一阶段 - 构建应用
FROM node:20-alpine AS builder

WORKDIR /app

# 复制 package 文件
COPY package*.json ./

# 安装依赖
RUN npm ci

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# 多阶段构建：第二阶段 - 运行应用
FROM node:20-alpine

WORKDIR /app

# 仅复制必要的生产依赖
COPY package*.json ./

# 仅安装生产依赖
RUN npm ci --only=production

# 从构建阶段复制构建输出
COPY --from=builder /app/dist ./dist

# 暴露端口
EXPOSE 3001

# 健康检查
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# 启动应用
CMD ["npm", "start"]
