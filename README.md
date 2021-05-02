# view-design-hi

## 文档

https://www.iviewui.com/docs

## 说明 

运行如下命令安装相关依赖包并启动项目，如果您只需要构建出皮肤的CSS样式文件，可以直接调到使用说明

```
// 安装依赖包
yarn install

// 启动工程
yarn dev

// 发布
yarn publish
```

## 注意

如果在打包中报如下错误

```
fs.js:36
} = primordials;
    ^

ReferenceError: primordials is not defined
    at fs.js:36:5
    at req_ (/Users/huangjian/.config/yarn/global/node_modules/natives/index.js:143:24)
    at Object.req [as require] (/Users/huangjian/.config/yarn/global/node_modules/natives/index.js:55:10)
    at Object.<anonymous> (/Users/huangjian/.config/yarn/global/node_modules/vinyl-fs/node_modules/graceful-fs/fs.js:1:37)
    at Module._compile (internal/modules/cjs/loader.js:1015:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1035:10)
    at Module.load (internal/modules/cjs/loader.js:879:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:903:19)
    at require (internal/modules/cjs/helpers.js:74:18)

```
说明你的node版本过高，可以使用nvm安装11.15.0版本的node（nvm可以进行node的多版本管理，具体使用方法请前往：[https://www.runoob.com/w3cnote/nvm-manager-node-versions.html](https://www.runoob.com/w3cnote/nvm-manager-node-versions.html) 查阅）
