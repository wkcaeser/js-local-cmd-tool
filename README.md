# 安装

``` shell
 npm link
```

# param-cli

> 用于处理参数列表，支持命令行输入或者文件输入

``` javascript
param-cli convert paramStr [arround]
```

> param-cli convert '11111 aaaa bbbb'
> [
> 11111,
> aaaa,
> bbbb
> ]
> param-cli convert '11111 aaaa bbbb' \"
> [
> "11111",
> "aaaa",
> "bbbb"
> ]

``` javascript
param-cli file filePath [arround]
```

> 使用方式和convert相同，原本的参数换成了文件路径
> param-cli file ~/param-list.txt [arround]
