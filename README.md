# 具体用法见 https://blog.csdn.net/u012396955/article/details/79380407
# ES6转换 排除jquery

# css不进行自动补全 只补全sass文件

# 使用gulp时常用的插件介绍及用法

## 可用的插件
```
编译
gulp-sass - 通过 libsass将Sass编译成 CSS

gulp-ruby-sass - 通过 Ruby Sass将Sass编译成CSS

gulp-compass - 通过 Ruby Sass和CompassSass编译成CSS

gulp-less - Less编译成 CSS.

gulp-stylus - Stylus 编译成 CSS.

gulp-postcss - Pipe CSS 通过 PostCSS processors with a single parse.

gulp-coffee - Coffeescript 编译成 JavaScript.

gulp-typescript - TypeScript编译成JavaScript.

gulp-react - Facebook React JSX 模板编译成JavaScript.

webpack-stream - 将webpack集成在Gulp中使用。

gulp-babel - ES6编译成ES5 通过 babel.

gulp-traceur - ES6编译成ES5 通过 Traceur.

gulp-regenerator - ES6编译成ES5 通过 Regenerator.

gulp-myth - Myth - a polyfill for future versions of the CSS spec.

合并
gulp-concat - 合并文件.

压缩
gulp-clean-css - 压缩 CSS 通过 clean-css.

gulp-csso - 压缩 CSS 通过 CSSO.

gulp-uglify - 压缩 JavaScript 通过 UglifyJS2.

gulp-htmlmin - 压缩 HTML 通过 html-minifier.

gulp-minify-html - 压缩 HTML 通过 Minimize（包已被弃用，建议使用gulp-htmlmin）

gulp-imagemin - 压缩 PNG, JPEG, GIF and SVG 图片 通过 imagemin.

gulp-svgmin - 通过Gulp压缩 SVG 文件

优化
gulp-uncss - 移除未使用的CSS选择器通过 UnCSS.

gulp-css-base64 - 将CSS文件中所有的资源(有url()声明的)变成base64-encoded 数据的URI字符串

gulp-svg2png - 将SVGs转换成PNGs

gulp-responsive - 生成不同尺寸的图片

gulp-svgstore -将svg files 合并成一个通过 元素

gulp-iconfont - 通过SVG icons创建 icon fonts

资源注入
gulp-useref - 解析HTML文件中特殊标签里面的script或style标签，合并成一个script或css文件，并替换。

gulp-inject - 将指定的css或js文件以标签的形式插入到HTML中的指定标志内。

wiredep - 将Bower依赖自动注入HTML文件中。

模板
gulp-angular-templatecache - 在$templateCache中联系并注册AngularJS模板

gulp-jade - Jade 转换成 HTML.

gulp-handlebars - Handlebars模板转换成 JavaScript.

gulp-hb - Handlebars 模板转换成 HTML.

gulp-nunjucks - Nunjucks模板转换成JavaScript.

gulp-dustjs - Dust模板转换成JavaScript.

gulp-riot - Riot模板转换成JavaScript.

gulp-markdown - Markdown → HTML.

gulp-template - Lodash 模板转换成JavaScript.

gulp-swig - Swig模板转换成HTML.

gulp-remark - Gulp plugin for [remark]的Gulp插件(https://github.com/wooorm/remark) 通过插件处理markdown

代码校验
gulp-csslint - 通过CSSLint自动校验CSS.

gulp-htmlhint - 通过HTMLHint校验HTML.

gulp-jshint - 通过JSHint发现错误和潜在的问题.

gulp-jscs - 通过jscs检查JavaScript代码风格.

gulp-coffeelint - 一种用来保证CoffeeScript代码风格统一的检查。

gulp-tslint - gulp的TypeScript代码校验插件.

gulp-eslint - ECMAScript/JavaScript代码校验.

gulp-w3cjs - 通过w3cjs检验HTML.

gulp-lesshint - 通过lesshint校验LESS.

实时加载
browser-sync - 保证多个浏览器或设备网页同步显示 (recipes).

gulp-livereload - Gulp的实时加载插件.

缓存
gulp-changed - 仅让发生改变的文件通过.

gulp-cached - 一个简单的文件内存缓存.

gulp-remember - 记忆并回收通过了的文件.

gulp-newer - 只让新的源码通过.

流控制
merge-stream - 合并多个流到一个插入的流.

streamqueue - 逐渐输入队列的流.

run-sequence - 按要求运行一些依赖的Gulptask.

gulp-if - 按照条件运行task.

日志
gulp-notify - Gulp的通知插件.

gulp-size - 显示你的项目的大小.

gulp-debug - 通过调试文件流来观察那些文件通过了你的Gulp管道.

测试
gulp-mocha - 运行Mocha测试用例.

gulp-jasmine - 在Node.js中运行Jasmine 2 测试用例.

gulp-protractor - 为Protractor测试用例包裹Gulp.

gulp-coverage - 为Node.js覆盖相对于运行的测试运行独立的报告.

gulp-karma - 通过Gulp运行Karma测试用例.

gulp-ava- 通过Gulp运行AVA 测试用例.

其他插件
gulp-util - 包含一系列有用插件.

gulp-plumber - 防止错误引起管道中断Prevent pipe breaking caused by errors.

gulp-load-plugins - 自动加载Gulp插件.

main-bower-files - 构建时自动获取bower库的文件.

autoprefixer - 解析CSS且根据规则添加浏览器兼容性前缀.

gulp-sourcemaps - 提供source map支持.

gulp-replace - Gulp的一个字符串替换插件.

gulp-rename - 轻松重命名文件.

gulp-rev - 在静态文件名的后面添加hash值，如: unicorn.css → unicorn-d41d8cd98f.css.

del - 使用globs删除文件/文件夹.

gulp-exec - 运行一个shell命令.

gulp-strip-debug - 除去javascript代码中的console,alert,debugger声明.

gulp-cssimport - 解析CSS文件，找到imports,将连接文件替换成imort声明.

gulp-inline-css - 将HTML中的css属性放到style标签中.

gulp-gh-pages - 将内容发布到GiHub有页面.

gulp-ng-annotate - 通过ng-annotate添加Angular依赖注入.

gulp-bump - 通过Gulp Bump任何semvar JSON版本.

gulp-file-include - 通过Gulp Include文件.

gulp-zip - 以ZIP格式压缩文件.

gulp-git - 通过Gulp运行git命令.

gulp-filter - 使用globbing过滤文件.

gulp-preprocess - 基于自定义内容或环境配置预处理文件.
```
