// 从 Obsidian API 导入必要的类和接口
import { App, MarkdownView, Plugin } from 'obsidian';

// 定义主插件类
export default class ChineseWordCountPlugin extends Plugin {
    statusBarItem: HTMLElement; // 引用状态栏项的 HTML 元素

    // 插件加载时调用的方法
    async onload() {
        this.addStatusBar(); // 添加状态栏项
        this.updateWordCount(); // 启动时刷新字符数

        // 注册编辑器内容变化、文件打开和活动窗口变化事件，以动态更新字符数
        this.registerEvent(this.app.workspace.on('editor-change', this.updateWordCount.bind(this)));
        this.registerEvent(this.app.workspace.on('file-open', this.updateWordCount.bind(this)));
        this.registerEvent(this.app.workspace.on('active-leaf-change', this.updateWordCount.bind(this)));
    }

    // 插件卸载时调用的方法
    onunload() {
        this.statusBarItem?.remove(); // 移除状态栏项
    }

    // 向 Obsidian 的状态栏添加一个状态栏项，并固定在最左边
    addStatusBar() {
        this.statusBarItem = this.addStatusBarItem(); // 创建一个新的状态栏项
        this.statusBarItem.setText('本章字符: 0'); // 设置初始文本
        this.statusBarItem.style.marginRight = 'auto'; // 使用 CSS 将其固定在最左边
    }

    // 计算给定文本中不包含空白字符的字符总数的方法
    countNonWhitespaceCharacters(text: string): number {
        // 使用正则表达式匹配所有非空白字符
        const matches = text.match(/\S/g);
        // 如果有匹配结果，返回匹配数组的长度，否则返回0
        return matches ? matches.length : 0;
    }

    // 更新状态栏中显示的字符数
    updateWordCount() {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView); // 获取当前激活的 Markdown 视图
        if (view) { // 如果有激活的 Markdown 视图
            const editor = view.editor; // 获取编辑器实例
            const content = editor.getValue(); // 获取编辑器中的当前内容
            const count = this.countNonWhitespaceCharacters(content); // 计算非空白字符的数量
            this.statusBarItem.setText(`本章字符: ${count}`); // 更新状态栏文本为新的字符数
        } else {
            this.statusBarItem.setText('本章字符: 0'); // 如果没有激活的视图，显示0
        }
    }
}
