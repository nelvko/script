const headers = JSON.parse($prefs.valueForKey("airport_headers"))

const url = "https://cylink.biz/user/checkin";
const method = "POST";
headers[":method"] = "POST"
headers[":path"] = "/user/checkin"

const myRequest = {
  url: url, method: method, headers: headers,
};

$task.fetch(myRequest).then(response => {
  const res = JSON.parse(decodeURIComponent(response.body))
  if (res.ret === 0) {
    $notify("机场签到", "✅成功", res.msg); // Success!
  } else {
    $notify("机场签到", "❌失败,请重新获取Cookie", res.msg); // Error!
    $prefs.removeValueForKey("airport_headers")

  }
  $done();
}, reason => {
  // reason.error
  $notify("签到请求", "❌失败，请重新获取Cookie", reason.error); // Error!
  $prefs.removeValueForKey("airport_headers")
  $done();
});
