# Obsidian 中文字符统计插件

> 提醒：本部分为中文说明，后面附有英文说明（English version available below）。

一个轻量且高效的 Obsidian 插件，帮助你实时追踪 Markdown 文档的字符数。非常适合需要实时监控进度的创作者，尤其是对中文内容创作时，字数统计往往指字符数。

## 功能特性

- **实时字符统计**：在你输入内容时，字符统计会自动更新。
- **支持非空白字符统计**：仅统计有意义的字符，忽略空格和换行符。
- **动态状态栏集成**：将当前字符数显示在 Obsidian 的状态栏。
- **多事件更新**：对文本变化、文件切换和活动标签页切换做出响应。

## 演示图片
![示例](https://github.com/user-attachments/assets/8791abb1-6f55-411d-b492-405cff635536)

- 插件启用后会在状态栏增加： 本章字符：0 的状态栏项。


## 安装

### 从 Obsidian 社区插件库安装
1. 打开 Obsidian。
2. 进入 `设置` > `社区插件` > `浏览`。
3. 搜索 **Obsidian 中文字符统计插件**。
4. 点击 `安装` 并启用插件。

### 手动安装
1. 从 [GitHub Releases](https://github.com/yourusername/chinese-word-count-plugin/releases) 页面下载最新版本。
2. 解压文件并将其放置在你的 Obsidian 插件文件夹中：
   - Windows: `\path\to\vault\.obsidian\plugins`
   - macOS/Linux: `/path/to/vault/.obsidian/plugins`
3. 在 `设置` > `社区插件` 中启用插件。

## 使用方法

启用插件后，状态栏会显示当前的字符数。无需其他操作，开箱即用！

## 高级选项（未来计划）

- **单词统计**：除了字符数外，还可以统计单词数。
- **句子统计**：监控文档中的句子数量。
- **可定制显示**：选择在状态栏中显示哪些统计数据。

## 开发

欢迎为此插件贡献代码！以下是设置开发环境的步骤：

### 先决条件

- Node.js (v14 或更高版本)
- Yarn 或 npm

### 步骤

1. 克隆此仓库：
   ```bash
   git clone https://github.com/yourusername/chinese-word-count-plugin.git
   ```

2. 进入插件文件夹：
   ```bash
   cd chinese-word-count-plugin
   ```

3. 安装依赖：
   ```bash
   npm install
   ```

4. 构建插件：
   ```bash
   npm run build
   ```

5. 将 `main.js`、`manifest.json` 和 `styles.css`（如果有）文件复制到你的 Obsidian 插件文件夹。

6. 重新加载 Obsidian 以测试你的更改。

## 贡献

欢迎提交贡献、问题和功能请求！可以访问 [问题页面](https://github.com/yourusername/chinese-word-count-plugin/issues) 了解更多。

## 许可证

此插件基于 MIT 许可证发布。有关详细信息，请参阅 [LICENSE](https://github.com/yourusername/chinese-word-count-plugin/blob/main/LICENSE) 文件。

## 鸣谢

感谢 Obsidian 团队提供的优秀平台，以及社区的持续支持。
