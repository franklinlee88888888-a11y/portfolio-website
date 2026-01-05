# Windows 本地上传项目到 GitHub - 完整指南

本指南将帮助您在 Windows 电脑上将项目上传到 GitHub。

---

## 📋 前置准备

### 1. 下载项目文件
首先，从 Manus 管理界面下载完整的项目文件。

**步骤：**
1. 登录 Manus 管理界面
2. 进入 **Code** 面板
3. 点击 **"Download all files"** 下载项目
4. 解压到您的 Windows 电脑上（例如：`C:\Users\YourName\portfolio-website`）

### 2. 安装 Git for Windows
如果您还没有安装 Git，请按照以下步骤安装：

1. 访问 [Git for Windows 官方网站](https://git-scm.com/download/win)
2. 下载最新版本（通常是 `.exe` 文件）
3. 双击运行安装程序
4. 按照默认选项一直点击 **Next** 直到完成
5. 安装完成后，重启电脑

### 3. 验证 Git 安装
安装完成后，验证 Git 是否正确安装：

1. 按 `Win + R` 打开运行窗口
2. 输入 `cmd` 并按 Enter 打开命令提示符
3. 输入以下命令：
   ```
   git --version
   ```
4. 如果显示版本号（例如 `git version 2.42.0`），说明安装成功

---

## 🚀 上传项目到 GitHub

### 步骤 1：在 GitHub 创建新仓库

1. 打开浏览器，访问 [github.com](https://github.com)
2. 登录您的 GitHub 账户（如果没有账户，请先注册）
3. 点击右上角的 **+** 图标
4. 选择 **New repository**
5. 填写仓库信息：
   - **Repository name**: `portfolio-website`
   - **Description**: `Modern portfolio website with React, TailwindCSS, Docker support, and bilingual interface`
   - **Visibility**: 选择 **Public**（公开）
   - **Initialize this repository with**: 不勾选任何选项
6. 点击 **Create repository**

创建完成后，您会看到一个类似这样的页面，显示一些 Git 命令。

---

### 步骤 2：在 Windows 上配置 Git

1. 按 `Win + R` 打开运行窗口
2. 输入 `cmd` 打开命令提示符
3. 输入以下命令配置您的 Git 用户信息（替换为您的信息）：

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@gmail.com"
```

**示例：**
```bash
git config --global user.name "John Doe"
git config --global user.email "john@example.com"
```

---

### 步骤 3：在项目文件夹中打开命令提示符

1. 打开 Windows 文件浏览器
2. 导航到您解压的项目文件夹（例如：`C:\Users\YourName\portfolio-website`）
3. 在文件夹空白处右键点击
4. 选择 **"在此处打开 PowerShell 窗口"** 或 **"在此处打开命令提示符"**

如果没有这个选项，您也可以：
1. 在地址栏中输入 `cmd` 并按 Enter

---

### 步骤 4：初始化 Git 仓库

在打开的命令提示符中，输入以下命令：

```bash
git init
```

这会在项目文件夹中创建一个 `.git` 文件夹。

---

### 步骤 5：添加所有文件

输入以下命令将所有项目文件添加到 Git：

```bash
git add .
```

---

### 步骤 6：创建第一个提交

输入以下命令创建第一个提交：

```bash
git commit -m "Initial commit: Modern portfolio website with React, TailwindCSS, Docker support, and bilingual interface"
```

---

### 步骤 7：添加远程仓库

现在需要将您的本地仓库连接到 GitHub。

1. 回到 GitHub 仓库页面
2. 点击绿色的 **Code** 按钮
3. 复制 HTTPS 链接（例如：`https://github.com/YOUR_USERNAME/portfolio-website.git`）
4. 在命令提示符中输入以下命令（替换为您复制的链接）：

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
```

---

### 步骤 8：推送到 GitHub

输入以下命令将代码推送到 GitHub：

```bash
git branch -M main
git push -u origin main
```

第一次推送时，GitHub 会要求您进行身份验证。按照提示操作即可。

---

## ✅ 验证上传成功

1. 打开浏览器
2. 访问 `https://github.com/YOUR_USERNAME/portfolio-website`
3. 如果看到您的项目文件，说明上传成功！

---

## 📝 完整的命令流程（快速参考）

如果您想快速复制所有命令，这是完整的流程：

```bash
# 1. 进入项目文件夹（在项目文件夹中打开 cmd）

# 2. 初始化 Git
git init

# 3. 配置用户信息（首次使用）
git config --global user.name "Your Name"
git config --global user.email "your-email@gmail.com"

# 4. 添加所有文件
git add .

# 5. 创建提交
git commit -m "Initial commit: Modern portfolio website with React, TailwindCSS, Docker support, and bilingual interface"

# 6. 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# 7. 推送到 GitHub
git branch -M main
git push -u origin main
```

---

## 🔐 使用 SSH 密钥（可选但推荐）

如果您不想每次都输入密码，可以使用 SSH 密钥。

### 生成 SSH 密钥

1. 打开 PowerShell（按 `Win + X`，选择 **Windows PowerShell**）
2. 输入以下命令：

```powershell
ssh-keygen -t ed25519 -C "your-email@gmail.com"
```

3. 按 Enter 接受默认位置
4. 输入密码（可选，按 Enter 跳过）
5. 再次输入密码确认

### 添加 SSH 密钥到 GitHub

1. 复制 SSH 公钥内容：
```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard
```

2. 登录 GitHub
3. 点击右上角头像 → **Settings**
4. 左侧菜单 → **SSH and GPG keys**
5. 点击 **New SSH key**
6. 粘贴公钥内容
7. 点击 **Add SSH key**

### 使用 SSH 推送

在第 6 步（添加远程仓库）中，使用 SSH URL 而不是 HTTPS：

```bash
git remote add origin git@github.com:YOUR_USERNAME/portfolio-website.git
```

---

## 🆘 常见问题

### Q: 命令提示符显示 "git: command not found"
**A:** 说明 Git 未正确安装。请重新安装 Git for Windows，并确保在安装过程中选择了 "Add Git to PATH"。

### Q: 推送时出现 "fatal: unable to access"
**A:** 这通常是网络问题或 GitHub 认证失败。请检查：
1. 网络连接是否正常
2. GitHub 用户名和密码是否正确
3. 如果使用 HTTPS，可能需要使用 Personal Access Token 而不是密码

### Q: 如何修改已推送的代码？

修改代码后，按照以下步骤更新 GitHub：

```bash
# 1. 添加修改
git add .

# 2. 创建提交
git commit -m "描述您的更改"

# 3. 推送到 GitHub
git push origin main
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

---

## 💡 后续更新流程

每次修改代码后，使用以下命令更新 GitHub：

```bash
# 1. 查看修改
git status

# 2. 添加修改
git add .

# 3. 提交更改
git commit -m "Your commit message"

# 4. 推送到 GitHub
git push origin main
```

---

## 📚 有用的 Git 命令

| 命令 | 说明 |
|------|------|
| `git status` | 查看当前状态 |
| `git add .` | 添加所有文件 |
| `git commit -m "message"` | 创建提交 |
| `git push origin main` | 推送到 GitHub |
| `git pull origin main` | 从 GitHub 拉取最新代码 |
| `git log --oneline` | 查看提交历史 |
| `git clone <url>` | 克隆仓库 |

---

## 🎉 祝贺！

现在您的项目已经在 GitHub 上了！您可以：

1. 分享仓库链接给朋友和同事
2. 在简历中添加 GitHub 仓库链接
3. 继续开发和更新项目
4. 与其他开发者协作

---

## 📞 需要帮助？

如果您遇到任何问题，请：

1. 检查本指南的常见问题部分
2. 查看 [GitHub 官方文档](https://docs.github.com/)
3. 查看 [Git 官方文档](https://git-scm.com/doc)

祝您上传顺利！🚀
