let today = new Date().getDate()
const flag = JSON.parse($prefs.valueForKey("clash_headers_flag") || -1)
if (today === flag) {
  $done({})
}
const headers = $request.headers
$prefs.setValueForKey(today, "clash_headers_flag")

let ok = $prefs.setValueForKey(JSON.stringify(headers), "clash_headers")
if (ok) {
  if (flag === today) {
    $notify("机场Cookie", "✅获取成功", "")
    console.log("success :get cookie ");
  }
} else {
  $notify("机场Cookie", "❌获取失败", "")
  console.log("fail :get cookie ");
}

$done({})
