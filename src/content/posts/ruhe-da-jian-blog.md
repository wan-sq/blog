---
title: 手把手：从零搭一个支持 Markdown 的个人博客，并免费部署到 GitHub Pages
date: 2026-07-11
tags:
  - 博客
  - 教程
excerpt: 不需要会命令行、不需要服务器，跟着做就能拥有一个自己的博客，写文章像写备忘录一样简单。
---

很多朋友想有个自己的博客，但一听到「建站」「服务器」「域名」就劝退了。其实今天这件事已经简单到：会复制粘贴、会点鼠标，就能搞定。

这篇记录我从零到上线的完整过程，照着做就行。

## 一、我们要做成什么样

最终效果是一个**完全属于你自己的博客网站**，具备：

- 文章列表首页（卡片式，按时间倒序）
- 文章详情页（点开读全文）
- 标签分类（按主题筛选）
- 关于页面（介绍你自己）
- **Markdown 渲染**（你写 `.md` 文件，网站自动排版，支持表格、代码、引用）

最重要的是：**写新文章 = 丢一个 `.md` 文件进文件夹**，不用碰代码。

## 二、技术选型（小白不用懂，照抄即可）

| 项 | 选择 | 为什么 |
| --- | --- | --- |
| 框架 | Vite + React | 构建快、生态成熟，生成的静态文件随便托管 |
| 路由 | React Router（Hash 模式） | 部署到任意静态空间刷新都不会 404 |
| 内容 | Markdown 文件 | 你只管写 `.md`，程序自动加载 |
| 托管 | GitHub Pages | 免费、稳定、地址正规（`用户名.github.io`） |
| 发布 | GitHub Actions | 推代码自动构建上线，零手动操作 |

> 一句话：用 Vite 把 Markdown 变成网站，用 GitHub Pages 免费托管，用 Actions 实现「推一下就更新」。

## 三、第一步：把网站跑起来

拿到项目后，本地跑起来只需要三条命令（用项目里的 Node 环境）：

```bash
npm install      # 安装依赖（只第一次需要）
npm run dev      # 本地预览，浏览器开 http://localhost:5173
npm run build    # 打包，产物在 dist/ 文件夹
```

写文章：往 `src/content/posts/` 里新建一个 `.md` 文件，开头写好「元信息」：

```
---
title: 文章标题
date: 2026-07-11
tags: [Zotero, 方法]
excerpt: 一句话摘要，显示在列表卡片上
---
这里开始写正文，支持 Markdown 全部语法。
```

保存后，文章自动出现在首页和标签里。改站名、作者、关于页分别在 `src/lib/site.js` 和 `src/content/about.md`。

## 四、第二步：部署到 GitHub Pages

这是最容易被「命令行」吓退的一步，其实用 **GitHub Desktop**（图形界面，不用敲命令）最省心：

1. 下载安装 GitHub Desktop，用 GitHub 账号登录。
2. `File → Add Local Repository`，选中你的博客文件夹。
3. 点 **Publish repository**：
   - **Name** 填 `blog`（网址就是 `https://用户名.github.io/blog`）；
   - **不要勾** 「Keep this code private」——必须 Public 才能用 Pages。
4. 发布后，到仓库 `Settings → Pages`，把 **Source 选成 GitHub Actions**。
5. 等 `Actions` 里的 `Deploy to GitHub Pages` 跑出绿勾（1–2 分钟）。
6. 打开 `https://用户名.github.io/blog`，你的博客上线了 🎉

> 踩坑提醒：如果 Actions 报 `404 Ensure GitHub Pages has been enabled`，就是第 4 步忘了把 Source 设成 GitHub Actions，补上重跑即可。

## 五、以后怎么更新文章

这才是重点——**日常使用成本极低**：

1. 在电脑上改/加 `.md` 文件；
2. 打开 GitHub Desktop，写句说明 → **Commit to main** → **Push origin**；
3. 等 1–2 分钟，网站自动更新。

没了。不用碰服务器、不用记命令、不用付钱。

## 六、小结

整个流程拆开看就三步：**本地写 Markdown → Desktop 点两下同步 → 网站自动更新**。最难的部分（建站、部署配置）做一次就永久受益。

我自己的博客「重生之成为科研民工」就是用这套跑起来的，平时就往里丢读文献的笔记。如果你也在做研究、想有个地方沉淀想法，强烈建议试一次——比想象中简单得多。

有问题欢迎在评论区交流 😄
