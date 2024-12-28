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

## 其它中文字数统计计算
- 在线字数统计网站 : [https://textlen.com/zh](https://textlen.com/zh)
![示例2](https://github.com/user-attachments/assets/86fca2c8-2d00-4e38-b00b-014519e72e25)

- 番茄小说平台字数统计
![番茄小说示例](https://github.com/user-attachments/assets/4bf94439-d556-4a61-8d89-dd251085c9e8)

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



---

# Obsidian Chinese Word Count Plugin

> Note: This section is the English version of the instructions.

A lightweight and efficient plugin for Obsidian that helps you track the character count of your Markdown documents in real-time. Perfect for creators who need to monitor their progress, especially for Chinese content where word count typically refers to character count.

## Features

- **Real-time Character Count**: Automatically updates the character count as you type.
- **Non-Whitespace Character Count**: Counts only meaningful characters, ignoring spaces and line breaks.
- **Dynamic Status Bar Integration**: Displays the current character count in the Obsidian status bar.
- **Multi-Event Updates**: Reacts to text changes, file switches, and active tab changes.
- **Localization Ready**: Designed to support multiple languages (default is Chinese).

## Installation

### From the Obsidian Community Plugins
1. Open Obsidian.
2. Go to `Settings` > `Community Plugins` > `Browse`.
3. Search for **Obsidian Chinese Word Count Plugin**.
4. Click `Install` and enable the plugin.

### Manual Installation
1. Download the latest release from the [GitHub Releases](https://github.com/yourusername/chinese-word-count-plugin/releases) page.
2. Extract the files and place them in your Obsidian plugin folder:
   - Windows: `\path\to\vault\.obsidian\plugins`
   - macOS/Linux: `/path/to/vault/.obsidian/plugins`
3. Enable the plugin in `Settings` > `Community Plugins`.

## Usage

Once enabled, the plugin will display the current character count in the status bar. You don't need to do anything else—it works out of the box!

## Advanced Options (Future Plans)

- **Word Count**: Track the number of words in addition to characters.
- **Sentence Count**: Monitor the number of sentences in your document.
- **Customizable Display**: Choose which statistics to show in the status bar.

## Development

Feel free to contribute to this plugin! Here’s how you can set up the development environment:

### Prerequisites

- Node.js (v14 or later)
- Yarn or npm

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chinese-word-count-plugin.git
   ```

2. Navigate to the plugin folder:
   ```bash
   cd chinese-word-count-plugin
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the plugin:
   ```bash
   npm run build
   ```

5. Copy the `main.js`, `manifest.json`, and `styles.css` (if any) files to your Obsidian plugin folder.

6. Reload Obsidian to test your changes.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/yourusername/chinese-word-count-plugin/issues).

## License

This plugin is licensed under the MIT License. See the [LICENSE](https://github.com/yourusername/chinese-word-count-plugin/blob/main/LICENSE) file for details.

## Acknowledgments

Thanks to the Obsidian team for their amazing platform and to the community for their continuous support.
