# 上传项目到 GitHub - 完整指南

本指南将帮助您将个人作品集网站项目上传到 GitHub。

---

## 📋 前置要求

### 1. 创建 GitHub 账户
如果您还没有 GitHub 账户，请访问 [github.com](https://github.com) 注册。

### 2. 安装 Git
- **Windows**: 下载 [Git for Windows](https://git-scm.com/download/win)
- **Mac**: 运行 `brew install git` 或下载 [Git for Mac](https://git-scm.com/download/mac)
- **Linux**: 运行 `sudo apt-get install git`

### 3. 验证 Git 安装
```bash
git --version
```

---

## 🚀 三种上传方式

### 方式 1：使用 GitHub Web 界面（最简单）

#### 步骤 1：在 GitHub 创建新仓库
1. 登录 GitHub
2. 点击右上角 **+** 图标 → **New repository**
3. 填写仓库信息：
   - **Repository name**: `portfolio-website`
   - **Description**: `Personal portfolio website built with React and TailwindCSS`
   - **Visibility**: 选择 **Public**（公开）或 **Private**（私密）
   - **Initialize this repository with**: 不勾选任何选项
4. 点击 **Create repository**

#### 步骤 2：上传文件
1. 在新创建的仓库页面，点击 **Add file** → **Upload files**
2. 将项目文件夹中的所有文件拖放到上传区域
3. 在底部填写 commit message：`Initial commit: Add portfolio website`
4. 点击 **Commit changes**

**优点**：无需命令行，适合初学者  
**缺点**：不能上传隐藏文件（如 `.gitignore`），后续更新麻烦

---

### 方式 2：使用 Git 命令行（推荐）

#### 步骤 1：在 GitHub 创建新仓库
按照方式 1 的步骤 1 创建仓库。

#### 步骤 2：配置 Git（首次使用）
```bash
# 设置用户名（使用您的 GitHub 用户名）
git config --global user.name "Your GitHub Username"

# 设置邮箱（使用您的 GitHub 邮箱）
git config --global user.email "your-email@example.com"
```

#### 步骤 3：初始化本地仓库
```bash
# 进入项目目录
cd /path/to/portfolio-website

# 初始化 Git 仓库
git init

# 添加所有文件到暂存区
git add .

# 创建第一个 commit
git commit -m "Initial commit: Add portfolio website"
```

#### 步骤 4：添加远程仓库
```bash
# 将 GitHub 仓库添加为远程仓库
# 替换 YOUR_USERNAME 和 portfolio-website 为您的实际信息
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# 验证远程仓库
git remote -v
```

#### 步骤 5：推送到 GitHub
```bash
# 将本地代码推送到 GitHub
git branch -M main
git push -u origin main
```

**提示**：首次推送时，GitHub 会要求您进行身份验证。

---

### 方式 3：使用 GitHub Desktop（图形界面）

#### 步骤 1：安装 GitHub Desktop
下载并安装 [GitHub Desktop](https://desktop.github.com/)

#### 步骤 2：登录 GitHub
1. 打开 GitHub Desktop
2. 点击 **File** → **Options**
3. 在 **Accounts** 标签中登录您的 GitHub 账户

#### 步骤 3：创建本地仓库
1. 点击 **File** → **New Repository**
2. 填写信息：
   - **Name**: `portfolio-website`
   - **Local Path**: 选择项目所在的目录
   - **Initialize this repository with a README**: 不勾选
3. 点击 **Create Repository**

#### 步骤 4：提交更改
1. 在左侧看到所有文件
2. 在底部填写 **Summary**: `Initial commit: Add portfolio website`
3. 点击 **Commit to main**

#### 步骤 5：发布到 GitHub
1. 点击 **Publish repository**
2. 填写仓库信息
3. 点击 **Publish Repository**

---

## 🔐 使用 SSH 密钥（可选但推荐）

使用 SSH 密钥可以避免每次都输入密码。

### 生成 SSH 密钥
```bash
# 生成新的 SSH 密钥
ssh-keygen -t ed25519 -C "your-email@example.com"

# 按 Enter 接受默认位置
# 输入密码（可选）
```

### 添加 SSH 密钥到 GitHub
1. 复制 SSH 公钥内容：
```bash
# Mac/Linux
cat ~/.ssh/id_ed25519.pub

# Windows (PowerShell)
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard
```

2. 在 GitHub 中添加：
   - 登录 GitHub
   - 点击右上角头像 → **Settings**
   - 左侧菜单 → **SSH and GPG keys**
   - 点击 **New SSH key**
   - 粘贴公钥内容
   - 点击 **Add SSH key**

### 使用 SSH 推送
```bash
# 使用 SSH URL 而不是 HTTPS
git remote set-url origin git@github.com:YOUR_USERNAME/portfolio-website.git

# 推送代码
git push -u origin main
```

---

## 📝 常用 Git 命令

### 查看状态
```bash
git status
```

### 添加文件
```bash
# 添加所有文件
git add .

# 添加特定文件
git add filename
```

### 提交更改
```bash
git commit -m "Your commit message"
```

### 推送到 GitHub
```bash
git push origin main
```

### 拉取最新代码
```bash
git pull origin main
```

### 查看提交历史
```bash
git log --oneline
```

### 创建新分支
```bash
git checkout -b feature/new-feature
```

### 切换分支
```bash
git checkout main
```

---

## 🔄 后续更新流程

每次修改代码后，按照以下步骤更新 GitHub：

```bash
# 1. 查看修改
git status

# 2. 添加修改
git add .

# 3. 提交更改
git commit -m "描述您的更改"

# 4. 推送到 GitHub
git push origin main
```

---

## 📋 提交信息最佳实践

好的 commit message 应该：
- 使用现在时态：`Add feature` 而不是 `Added feature`
- 简洁明了：第一行不超过 50 个字符
- 描述"做了什么"而不是"为什么"

**示例：**
```
Add dark mode toggle to navigation
Fix responsive layout on mobile devices
Update project descriptions
```

---

## 🌟 GitHub 仓库优化

### 添加 README.md
在项目根目录创建 `README.md`：

```markdown
# Personal Portfolio Website

A modern, minimalist portfolio website built with React 19, TailwindCSS 4, and shadcn/ui.

## Features

- ✨ Modern minimalist design with asymmetric layouts
- 📱 Fully responsive on all devices
- 🎨 Teal accent color with professional typography
- ⚡ Fast performance with optimized images
- 🐳 Docker support for easy deployment

## Tech Stack

- React 19
- TailwindCSS 4
- shadcn/ui
- Express.js
- Docker

## Getting Started

### Prerequisites
- Node.js v18+
- npm or pnpm

### Installation

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm start
```

### Docker Deployment

```bash
docker-compose up -d
```

## Deployment

See [DOCKER_GUIDE.md](./DOCKER_GUIDE.md) for detailed deployment instructions.

## License

MIT License - feel free to use this project for your own portfolio!

## Author

[Your Name]
```

### 添加 LICENSE
在项目根目录创建 `LICENSE` 文件，选择 MIT License：

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🔗 有用的链接

- [GitHub 官方文档](https://docs.github.com/)
- [Git 官方文档](https://git-scm.com/doc)
- [GitHub Markdown 语法](https://guides.github.com/features/mastering-markdown/)
- [Choose a License](https://choosealicense.com/)

---

## 🆘 常见问题

### Q: 如何修改已推送的 commit？
```bash
# 修改最后一个 commit
git commit --amend

# 强制推送（谨慎使用）
git push --force-with-lease origin main
```

### Q: 如何删除不小心上传的文件？
```bash
# 从 Git 中移除但保留本地文件
git rm --cached filename

# 提交更改
git commit -m "Remove filename from repository"

# 推送
git push origin main
```

### Q: 如何克隆这个仓库到另一台电脑？
```bash
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

---

祝您成功上传到 GitHub！🎉
