if ($prefs.valueForKey("airport_headers")) {
  $done({})
}
const headers = $request.headers
let ok = $prefs.setValueForKey(JSON.stringify(headers), "airport_headers")
if (ok) {
    $notify("机场Cookie", "✅获取成功", "")
    console.log("success :get cookie ");
} else {
  $notify("机场Cookie", "❌获取失败", "")
  console.log("fail :get cookie ");
}

$done({})
