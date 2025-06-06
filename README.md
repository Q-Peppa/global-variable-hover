# 🔍 global-variable-hover
在 VS Code 中，为指定的全局变量提供优雅的 悬停提示（hover），让你在编写代码时快速查看变量的含义或文档说明。

## 📋 简介
global-variable-hover 是一个简单、轻量、高性能的插件，能够通过配置全局变量 key-value 的映射，在你将鼠标悬停在变量上时，显示定义好的提示信息。

这非常适用于：

自定义项目的全局变量（如 __APP_ENV__, API_ROOT）
合作开发中描述配置常量的作用
常量/全局变量快速参考

## 💡 示例场景

假设你配置了以下内容：
```json
{
  "global-variable-hover.enable": true,
  "global-variable-hover.config": {
    "API_KEY": "生产环境授权码，请勿公开",
    "db.host": "数据库服务器地址",
    "FOO": "这是一个测试用变量"
  }
}
```

那么在代码中，当你 hover 到 db.host、API_KEY、FOO 时，你会看到类似：



```txt
db.host
数据库服务器地址
```
并以类似官方文档样式出现，不被其他类型定义/文档信息干扰。

## ✅ 功能亮点

- ⚡ 悬停提提示，展示你自定义的 key 解释
- 🎨 可选高亮关键词，提升可读性
- 🧠 自动智能识别，可配合正则表达式来识别关键词
- 🔁 默认监听配置更改，无需重新加载插件

## 🛠️ 安装方法

Coming soon...（如果你有 VS Marketplace）

## 🤝 贡献 & 反馈

欢迎提交 issue、bug、功能建议或 Pull Request：

## 📚 参考链接

- VS Code Extensions API: https://code.visualstudio.com/api
- VS Code Hover Provider: https://code.visualstudio.com/api/references/vscode-api#HoverProvider


## ️⭐支持本项目

如果你觉得这个插件对你开发有帮助，请点个 Star 或 Fork！感谢支持 💖