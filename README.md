### 资料汇总

nodejs 版本管理工具 nvm

```
参考地址: https://github.com/nvm-sh/nvm
```

包管理工具

```
yarn下载地址:
    https://github.com/yarnpkg/yarn/release

npm下载地址:
    官方: https://npms.taobao.org/
```

docker

```
官方文档: https://docs.docker.com/
中文网:https://www.docker.org.cn/
dockerhub官网:
```

设计类

```
设计类型网站
    花瓣
    站酷
    蓝色理想

vscode插件
    原型图插件 安装drawio

原型图设计软件
    axure
    ps
    蓝湖
    墨刀

思维导图
    Xmind

流程图
    Visio(win)
    processOn

```

### 前端开发必备插件

```
PostCSS Sorting
stylelint
stylefmt
ESLint
javascript standard format
beautify
Babel ES6/ES7
Debugger for Chrome
Add jsdoc comments
javascript(ES6) code snippets
vue
weex
Reactjs code snippets
React Native Tools
Npm Intellisense
Instant Markdown
Markdown Shortcuts
TextTransform
```

### 项目需求分析

需求分析分析内容(从哪里来)
需求分析中重点内容(抓痛点)
需求分析文档及工具(怎么做)

前置考虑
业务型: 无纸化带来的效率提升
痛点型: 市场决定的风声浪口
功能型: 企业和客户需求, 解决流量入口

### 环境搭建

本地环境

```
nodejs(npm/yarn) + nvm(Node.js 版本管理)

ide(webstorm / vscode / atom)

vue-cli
    安装: npm install -g @vue/cli
    快速原型安装: npm install -g @vue/cli-service-global
```

测试环境

```
使用 虚拟机 或者 1C2G 测试服务器
安装
    docker
    docker-compose
    docker-mongo

```

### linux 先关命令

```
查看系统内核
    lsb release -a
    uname -a

查看磁盘使用情况
    df -TH

目录及文件权限
    ls -la 查看文件目录列表
        var 存放日子文件目录
        usr 可执行文件目录
        local 本地文件
        home 用户目录
        www web服务器目录

cup 内存/进程
    top

文档相关命令
    文档型: 文件相关命令(touch / cat / echo / rm / vi / cd / rm )


    硬件型: 磁盘 / 进程 / 服务 / 网络

    功能型: 压缩 / 解压, 下载, 远程
        下载: wget + url

        解压: tar zxvf + 文件名
            z .gz结尾的文件
            x 解压
            v 解压过程
            f 解压后的名字

        压缩: tar zcvf + 压缩之后的文件名 + 压缩源文件
            c 压缩

查看进程命令
    ps -ef  | grep

强制终止进程
    kill -9 + pid
        9 强制终止

查看系统服务状态
    status sshd.service
    service sshd.service restart
```

### centos7 初始系统配置网络

```
将虚拟机的网络链接模式设置为NAT模式(设置错网络会用不了)

vi /etc/sysconfig/network-scripts/ifcfg-ens33

将修改reboot=no 为 reboot=yes

service network restart
```

### centos7 更新 yum 源

```
1. 备份
    cd /etc/yum.repos.d/
    mkdir repo_bak
    mv *.repo repo_bak/

2. 安装wget(若已安装了wget，则跳过此步)

3. 下载新的CentOS-Base.repo 到/etc/yum.repos.d/
    wget http://mirrors.aliyun.com/repo/Centos-7.repo

4. yum clean all 清除缓存，运行 yum makecache 生成新的缓存
    yum clean all
    yum makecache

5. 安装EPEL（Extra Packages for Enterprise Linux ）源
    yum repolist enabled
    yum repolist all

6. 更新yum
    yum -y update
```

### linux 与 windows 文件传输

```
scp 本地文件 useranme@192.168.165.xxx:/home/
```

### 安装 vmware tools

```
mkdir /media/mnt
mount /dev/cdrom /media/mnt
cd /media/mnt
cp VM....文件 /tmp/
cd /tmp
tar -zxvf VM...文件
cd vmware解压后的文件
./vmware-install.pl
```

下面是安装时候遇到的报错, 如果也有出现则按照步骤解决

```
报错: 如果出现bash:./vmware-install.pl :/usr/bin/perl:bad interpreter:No such file or directory.现象，输入yum groupinstall "Perl Support"即可。
```

```
错误:
http://mirrors.163.com/centos/$releasever/os/i386/repodata/repomd.xml: [Errno 14] PYCURL ERROR 22 - "The requested URL returned error: 404 Not Found"

Trying other mirror.
Error: Cannot retrieve repository metadata (repomd.xml) for repository: base. Please verify its path and try again

解决这个问题只要输入下面命令即可：

yum clean all
yum makecache

最后执行

yum update
```

```
进行安装: ./vmware-install.pl

ps: 最后安装了, 我还不会使用, 索性才去putty去链接linux.
```

### docker 安装

curl 方式安装 docker

```
更新yum源
    yum update

执行docker安装脚本
    curl -ssl https://get.docker.com | sh

启动docker
    service docker start

确认docker安装成功
    docker run hello-world
```

### docker-compose 安装

作用: 使用简洁的命令去管理 docker 镜像

```
安装
    yum -y install python-pip
    yum -y install docker-compose


```

### 更改 docker 镜像源(解决安装缦的问题)

```
mkdir -p /etc/docker
cd /etc/docker
touch daemon.json
vi daemon.json

// 写入配置文件(注释不要复制)
{
  "registry-mirrors": ["https://9cpn8tt6.mirror.aliyuncs.com"]
}

systemctl daemon-reload
systemctl restart docker

docker pull 起飞
```

### 拉取 docker-mongo 镜像

```
docker pull mongo

查看镜像
    docker images

运行镜像
    docker run -d -p 10005:27017 mongo

查看运行的服务
    docker ps -a

持续打印运行日志
    docker log -f

删除容器
    docker rm 容器名称

停止容器
    docker stop

注意: 运行中的容器, 必须停止之后才能删除

```

### docker-compose.yml 配置文件

```
version: '3'
services:
  mysql1:
    image: mysql
    environment:
    -  MYSQL_ROOT_PASSWORD=123456
    ports:
    - 3307:3306

  mysql2:
    image: mysql
    environment:
    -  MYSQL_ROOT_PASSWORD=123456
    ports:
    - 3308:3306
```

### docker-compose 相关操作

```
docker-compose up -d
docker-compose stop
docker-compose restart
```

### linux 下登录远程 dockerhub 仓库

```
docker login
输入用户名
输入密码

登录成功会提示: Login Succeeded
```

### [docker] 将 docker 镜像推送至远程仓库

```
打包镜像
    docker commit [镜像id] [docker账户名/镜像名称:标签]

推送镜像
    docker push [docker账户名/镜像名称:标签]

拉取镜像
    docker pull
```

### [包管理工具] npm / yarn

```
yarn下载地址:
    https://github.com/yarnpkg/yarn/release

npm下载地址:
    官方: https://npms.taobao.org/
    npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### [nodejs] nvm 版本管理工具

```
参考地址: https://github.com/nvm-sh/nvm

安装指令:
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

vim ~/.bashrc 写入下面代码
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm


安装是出现问题:
 Failed connect to raw.githubusercontent.com:443; Connection refused

 原因：由于某些你懂的因素，导致GitHub的raw.githubusercontent.com域名解析被污染了。

 解决办法：通过修改hosts解决此问题。

 步骤:
    1. 在https://www.ipaddress.com/查询raw.githubusercontent.com的真实IP。

    2. 修改hosts
        sudo vim /etc/hosts

    3. 添加如下内容：
        199.232.68.133 raw.githubusercontent.com

    最后: 问题解决
```

### [nodejs] nvm 常用命令

```
nvm use 版本切换
nvm ls-remote 远程版本
nvm alias default 10.0.1 使用默认版本
nvm ls 本地nodejs版本
nvm install V10.0.1 下载指定版本
nvm uninstall v10.0.1 卸载指定版本
```

### [npm] npm 包的发布过程

```
1. 新建一个npm项目
    npm init

2. 注册npm账号

3. npm set registry https://registry.npmjs.org

4. 增加用户
    npm adduser
        输入用户名/密码
        邮箱需要验证

5. 查看登录账号
    npm whoami

6. 发布
    npm publish [包名]
```

### 真机调试 vConsole 插件

```
参考资料: https://github.com/Tencent/vConsole

特性
    查看 console 日志
    查看网络请求
    查看页面 element 结构
    查看 Cookies、localStorage 和 SessionStorage
    手动执行 JS 命令行
    自定义插件

使用 npm 安装：
    npm install vconsole

引入 dist/vconsole.min.js 到项目中：
    <script src="path/to/vconsole.min.js"></script>
    <script>
    // 初始化
    var vConsole = new VConsole();
    console.log('Hello world');
    </script>
```

### [mock 数据] 使用 docker-compose 搭建 doclever 服务

参考资料: https://github.com/sx1989827/DOClever/tree/master/docker

```
docker-compose.yml配置

version: "2"
services:
  DOClever:
    image: lw96/doclever
    restart: always
    container_name: "DOClever"
    ports:
    - 10000:10000
    volumes:
    - /本地路径/file:/root/DOClever/data/file
    - /本地路径/img:/root/DOClever/data/img
    - /本地路径/tmp:/root/DOClever/data/tmp
    environment:
    - DB_HOST=mongodb://mongo:27017/DOClever
    - PORT=10000
    links:
    - mongo:mongo

  mongo:
    image: mongo:latest
    restart: always
    container_name: "mongodb"
    volumes:
    - /srv/datadir:/data/db

查看已经放行的端口
    firewall-cmd --list-all

放行端口
    firewall-cmd --add-port=10000/tcp --zone=public --permanent

让放行端口生效
    firewall-cmd --reload(放行之后才可以查看到放行的端口)

运行docker-compose
    docker-compose up -d

服务跑起来之后代表成功
    访问: 虚拟机ip地址:10000/html/web/controller/index/index.html

初始总后台账号密码
    DOClever(自行修改)

使用
    Mock Server地址：http://192.168.135.128:10000/mock/5f2546916e40be000bee8670
    Mock Js文件：net.js（和内网测试是同一个文件，需要安装node环境，安装包点击下载：window  mac）
    使用方法：在本地用node运行net.js ,加上mock server地址和你需要请求的真实地址的根地址，当您的接口文档的状态为开发完成的时候，net.js不会去请求mock server地址而去请求真实地址（举例：node net.js http://192.168.135.128:10000/mock/5f2546916e40be000bee8670 http://localhost:8081)
```

### [mock 数据] 轻量化 mockjs 插件使用

参考资料: http://mockjs.com/

### [前端工程化] webpack

参考资料: https://www.webpackjs.com/concepts/
loaders 相关配置资料: https://www.webpackjs.com/guides/asset-management/
plugins 相关资料: https://www.webpackjs.com/plugins/
devServer 相关资料: https://www.webpackjs.com/configuration/dev-server/
```
核心概念:
    入口: entry => 需要打包的入口文件
    输出: output => 打包后的输出文件配置
    Loader: module => 处理的是非js文件
    插件: plugins =>

快速初始化项目:
    npm init -y

本地安装webpack webpack-cli, 需要分开安装
    yarn --version
    yarn add webpack webpack-cli -D

查看本地webpack版本
    npx webpack --version

默认配置文件 webpack.config.js

const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}
```

### [webpack] 热更新
```
安装 
    yarn add webpack-dev-server -D

配置
    const path = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const webpack = require('webpack')

    module.exports = {
        mode: 'development',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js'
        },
        devServer: {
            hot: true
        },
        module: {
            rules: [
            { 
                test: /\.less$/, 
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    }


```

### [webpack] babel的使用
参考资料: https://www.babeljs.cn/docs/
```
安装: 
    yarn add babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
    yarn add @babel/runtime -S

.babelrc配置文件
    {
        "presets": [
            "@babel/preset-env"
        ],
        "plugins": [
            "@babel/plugin-transform-runtime"
        ]
    }
```

### [webpack] clean-webpack-plugin copy-webpack-plugin
```
clean-webpack-plugin 清除dist文件夹
    配置: 
    new CleanWebpackPlugin(),

copy-webpack-plugin 复制静态资源
    注意: 新版本的写法有差别
    配置: 
    new CopyWebpackPlugin({
      patterns:[
        {
          from: path.join(__dirname, 'assets'),
          to: 'assets'
        }
      ]
    })
```

### [webpack/plugins] html-webpack-plugin
作用: 在dist文件加下面自动生成html文件, 并自动引入打包后的bundle.js文件

### [webpack/plugins] css/js文件压缩插件
css压缩插件参考资料: https://blog.csdn.net/github_37360787/article/details/82183557
js压缩插件参考资料: https://www.npmjs.com/package/terser-webpack-plugin
```
安装
    yarn add optimize-css-assets-webpack-plugin terser-webpack-plugin -D
    yarn add mini-css-extract-plugin -D
使用
    module.exports = {
        optimization: {
            minimizer: [new TererJsPlugin(), new OptimizeCssAssetsWebpackPlugin()],
            module: {
                rules: [
                    { 
                        test: /\.less$/, 
                        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
                    },
                ]
            }
        },
        plugins: [
            new MiniCssExtractPlugin()
        ]
    }
```

### [前端工程化] glup工具使用
参考资料: https://www.gulpjs.com.cn/

### [vue] vue-cli
参考资料: https://cli.vuejs.org/zh/guide/installation.html
```
安装
    npm install @vue/cli -g
    npm install @vue/cli-service-global -g
```

### [vue] 调试技巧
vue-devtool参考资料: https://github.com/vuejs/vue-devtools

```
vscode 安装插件 debugger for chrome

Clone this repo

cd vue-devtools the newly created folder

run yarn install

then run yarn run build

Open the Chrome extension page (currently under Menu > More Tools > Extensions)
Check "developer mode" on the top-right corner

Click the "load unpacked" button on the left, and choose the folder: vue-devtools/packages/shell-chrome/

Alternatilvely to step 3, you can also use yarn dev:chrome to build & watch the unpacked extension
```

### [nodejs] Koa2
中文文档: https://koa.bootcss.com/#context

```
安装:
    yarn add koa -S

使用:
    const koa = require('koa')
    const app = new koa()

    app.use(async ctx => {
    ctx.body = 'hello world!!'
    })

    app.listen(3100)
```

### [koa] 中间件
```
koa-router
koa-body
@koa/cors
koa-logger
koa-json
```

### [koa] 路由进阶配置 koa-combine-routers
### [koa] helmet 安全头中间件
### [koa] koa-static 静态资源文件目录
```
// routes/index.js文件
const combineRouters = require('koa-combine-routers')
const a = require('./aRoutes')
const b = require('./bRoutes')


module.exports = combineRouters(
  a,
  b
)

// server.js 文件
const koa = require('koa')
const app = new koa()
const router = require('./routes')
const cors = require('@koa/cors')
const helmet = require('helmet')
const koaBody = require('koa-body')
const static = require('koa-static')
const path = require('path')

app
.use(router())
.use(static(path.resolve(__dirname, '../public')))
.use(helmet())
.use(cors())
.use(koaBody())


app.listen(3100, () => {
  console.log('listen in port 3100')
})
```

### [npm版本更新] npm-check-updates
```
安装 
    npm install -g npm-check-updates
```

### [koa] koa-compose 整合koa中间件
```
作用: 对中间件包装整合, 使代码变得整洁
安装
    npm install koa-compose -g

import koa from 'koa'
const app = new koa()
const router = require('./routes')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const staticRoot = require('koa-static')
const path = require('path')
const compose = require('koa-compose')
const koaJson = require('koa-json')
const helmet = require('helmet')
const compress = require('koa-compress')

const idDevMode = process.env.NODE_ENV === 'production' ? false : true

const middlewares = compose([
  koaBody(),
  staticRoot(path.resolve(__dirname, '../public')),
  cors(),
  koaJson({ pretty: false, param: 'pretty' }),
  helmet()
])

app
.use(middlewares)
.use(router())

if (!idDevMode) {
  app.use(compress())
}

app.listen(3100, () => {
  console.log('listen in port 3100')
})
```

### [koa] 整合webpack使用es6语法, 热更新
安装:
yarn add webpack webpack-cli clean-webpack-plugin webpack-node-externals babel-loader @babel/core @babel/preset-env @babel/node cross-env -D

打包命令:
```
npx webpack --config ./config/webpack.config.base.js
```

nodemon运行命令
```
nodemon --exec label-node ./src/index.js
```

```
// webpack.config.base.js配置

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackNodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    server: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devtool: 'dev-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use:{
          loader: 'babel-loader'
        },
        exclude: [path.resolve(__dirname, '../node_modules')]
      }
    ]
  },
  externals: [WebpackNodeExternals()],
  plugins: [
    new CleanWebpackPlugin()
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true, 
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true
  }
}
```

```
// .babelrc配置

{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```

### [webpack] development开发环境中的webpack.config.dev.js配置
webpack.DefinePlugin
参考资料: https://www.webpackjs.com/plugins/define-plugin/
```
plugins: [
    Webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? "'production'" : "'devlopment'"
      }
    })
  ],
```

### [webpack] webpack-merge 整合开发和生产环境的webpack配置
```
参考资料: https://www.npmjs.com/package/webpack-merge
安装
    npm intall webpack-merge -D
```

整合开发环境的webpack配置
```
// 整合代码
const WebpackBaseConfig = require('./webpack.config.base')
const WebpackMerge = require('webpack-merge')

const WebpackDevConfig = WebpackMerge(WebpackBaseConfig, {
  mode: 'development',
  devtool: 'dev-source-map',
  state: {
    children: false
  }
})

module.exports = WebpackDevConfig
```

整合生产环境的webpack配置
```
terser-webpack-plugin参考资料: https://github.com/webpack-contrib/terser-webpack-plugin

terser-webpack-plugin作用: 压缩js文件

安装:
    yarn add terser-webpack-plugin -D

整合代码: 
const WebpackBaseConfig = require('./webpack.config.base')
const WebpackMerge = require('webpack-merge')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { SplitChunksPlugin } = require('webpack')


const WebpackProdConfig = WebpackMerge(WebpackBaseConfig, {
  mode: 'production',
  state: { children: false, warnings: false },
  optimization: {
    minimizer: [new TerserWebpackPlugin({
      terserOptions: {
        warnings: false,
        compress: {
          warnings: false,
          drop_console: false,
          dead_code: true,
          drop_debugger: true,
        },
        output: {
          comments: false,
          beautify: false,
        },
        mangle: true,
      },
      parallet: true,
      sourceMap: fasle,
    })],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 3,
          enforce: true
        }
      }
    }
  }

})
```

### [webpack] 使用splitChunks对terser-webpack-plugin进行优化
参考资料: https://www.webpackjs.com/plugins/split-chunks-plugin/
```
// 官方默认配置

splitChunks: {
    cacheGroups: {
    commons: {
        name: "commons",
        chunks: "initial",
        minChunks: 3,
        enforce: true
    }
    }
}
```

### [npm] package.json构建/清除脚本命令编写
需要编写四个脚本命令: 
```
安装
    yarn add rimraf -D
    yarn add cross-env -D

start命令: 
    nodemon --exec babel-node ./src/index.js

build命令: 
    cross-env NODE_ENV=prod webpack --config ./config/webpack.config.prod.js

dev命令:
    cross-env NODE_ENV=development nodemon --exec babal-node --inspect ./src/index.js

clean命令: 
    rimraf ./dist

"scripts": {
    "start": "nodemon --exec babel-node ./src/index.js",
    "build": "cross-env NODE_ENV=prod webpack --config ./config/webpack.config.prod.js",
    "dev": "cross-env NODE_ENV=development nodemon --exec babel-node --inspect ./src/index.js",
    "clean": "rimraf dist"
  },
```

### [koa插件] koa-compress 区分生产和开发环境, 对js代码进行压缩
```
安装:
    yarn add koa-compress -D

// src/index.js文件
const idDevMode = process.env.NODE_ENV === 'production' ? false : true
if (!idDevMode) {
  app.use(compress())
}

```


### [nodejs/koa] 注册登录逻辑开发
layui参考资料: https://www.layui.com/

```
登录模块需求分析
登录页面 / 注册页面 / 忘记密码页面
图形验证码 / NodeMail邮件服务配置
```

验证码模块开发
```
layui-cdn: https://www.layuicdn.com/
参考资料: https://www.npmjs.com/package/svg-captcha

安装
    npm i svg-captcha

使用: 
    svgCaptcha.create(options)
```

vue表单字段校验工具veevalidate
```
参考资料: https://github.com/logaretm/vee-validate

安装:
    yarn add vee-validate

    
```