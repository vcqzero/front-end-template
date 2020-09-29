# mock server

## 安装依赖
需要引入以下依赖
```javascript
const chokidar = require("chokidar"); // 用于监听文件
const bodyParser = require("body-parser");
const chalk = require("chalk");
const path = require("path");
const Mock = require("mockjs")
```

## 目录结构
需要将整个mock文件copy到项目根目录下
```
├─mock
|  ├─index.js --------不可修改文件名
|  ├─mock-server.js---不可修改文件名及文件内容
|  ├─readme.md
|  └test-router.js----路由文件，自定义即可
```

## 引入mock-server

在webpack-dev-server的before中执行mock-server

```javascript
const mockServer = require("./mock/mock-server");
module.exports = {
  devServer: {
    // 当本地dev启动时
    before: mockServer,
    // 官网示例
    // before: function(app, server, compiler) {
    //   app.get('/some/path', function(req, res) {
    //     res.json({ custom: 'response' });
    //   });
    // }
  },
};

```

## 添加路由

### 定义路由

```javascript
// test-route.js
// 路由文件可定义在任意位置
module.exports = [
  {
    url: "/index2",
    type: "get",
    // response 可以是mock模板或者是返回mock模板的函数
    response: (req, res) => {
      return {
        "list|1-10": [
          {
            "name|+1": ["Hello", "Mock.js", "!"],
          },
        ],
      };
    },
  },
  ...
];
```
### 引入路由

```javascript
// index.js
const user = require("./test");
// 有新路由直接在mocks中添加
const mocks = [...user];

// 以下内容不需修改
module.exports = {
  mocks,
};

```