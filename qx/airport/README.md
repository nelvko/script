机场签到：https://次元.net/auth/register?code=oUbI
```ini
[rewrite_remote]
https://raw.githubusercontent.com/nelvko/script/refs/heads/master/qx/airport/rewrite.snippet, tag=机场_获取Cookie, update-interval=86400, opt-parser=false, enabled=true

[task_local]
0 10 * * * https://raw.githubusercontent.com/nelvko/script/refs/heads/master/qx/airport/checkin.js, tag=机场签到
```
