---
title: 今天用 Zotero 整理了 30 篇文献
date: 2026-07-10
tags: [Zotero, 文献管理, 研究]
excerpt: 花了一个下午，把攒了半个月的 30 篇 PDF 收进 Zotero，顺便梳理出一套自己的分类法。
---

半个月没管文献，Downloads 里默默堆了 30 个 PDF。今天下午一口气把它们收进 Zotero，顺手把流程固定了下来，记在这里防止下次又从头摸索。

### 我的整理流程

1. **批量导入**：Zotero 7 直接把 PDF 拖进窗口，它能自动识别元数据；从数据库网页则一键用浏览器连接器保存，连 PDF 一起抓。
2. **去重**：左侧 `Duplicates` 文件夹会标出疑似重复项，逐条 `Merge` 合并，保留信息更全的那条。
3. **补全信息**：用 DOI 补齐缺失的卷期页码，期刊名统一成标准缩写，避免以后引用时格式乱掉。
4. **打标签，而不是建文件夹**（这点下面单独说）。
5. **归入专题 Collection**：按课题分，比如「扩散模型」「用户研究」。
6. **批注 + 导出笔记**：读的时候直接在高亮上写 note，事后用 `Export Note` 汇成一篇 Markdown。

### 我的标签体系

标签是「横切」的，一个文献可以贴好几个，比层层套娃的文件夹灵活太多：

| 标签 | 含义 |
| --- | --- |
| `to-read` | 还没读，排队中 |
| `method` | 方法/实验设计可复用 |
| `benchmark` | 含数据集或评测基准 |
| `related-work` | 写综述时要引用的 |
| `own-project` | 和当前课题直接相关 |

### 两个省时间的小技巧

- **全文检索**：Zotero 7 默认给 PDF 建全文索引，搜索框直接搜正文里的词，比翻文件名快十倍。
- **高级搜索存成「智能文件夹」**：比如「`own-project` 且 90 天内添加」，一键捞出最近和课题相关的文献。

如果懒得点界面，也能用 `pyzotero` 脚本批量操作，比如列出最近添加的 10 条：

```python
from pyzotero import zotero

# userID 和 api_key 在 Zotero 设置里拿
zot = zotero.Zotero(userID, "user", api_key)
recent = zot.items(top=True, limit=10)
for item in recent:
    meta = item["data"]
    print(meta.get("dateAdded", "?"), "-", meta.get("title", "(无标题)"))
```

> 文献管理不是为了收藏，而是为了下次能把它找回来。

整理完那一瞬间，Downloads 终于空了，心情也跟着空了一块——挺好。
