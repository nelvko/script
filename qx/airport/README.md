# 机场签到
https://次元.net/auth/register?code=oUbI

## qx配置
1. 添加重写：[safari打开](quantumult-x:///add-resource?remote-resource={"rewrite_remote":["https://raw.githubusercontent.com/nelvko/script/refs/heads/master/qx/airport/rewrite.snippet,tag=机场_获取Cookie"]})
2. 添加任务（文本方式）：`0 10 * * * https://raw.githubusercontent.com/nelvko/script/refs/heads/master/qx/airport/checkin.js`

配置详情
```ini
[rewrite_remote]
https://raw.githubusercontent.com/nelvko/script/refs/heads/master/qx/airport/rewrite.snippet, tag=机场_获取Cookie, update-interval=86400, opt-parser=false, enabled=true

[task_local]
0 10 * * * https://raw.githubusercontent.com/nelvko/script/refs/heads/master/qx/airport/checkin.js, tag=机场签到, enabled=true
```

登录，提示获取cookie成功，关闭重写
