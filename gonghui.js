const url = `https://www.hfgh.org.cn/wxApi/v2/wxSignIn/signSave?usertoken=e4c3bd5f0e2245d2b598aac2dd27fbc1`;
const method = `GET`;
const headers = {
    'Referer': `https://servicewechat.com/wx2086f2885316ec5a/84/page-frame.html`,
    'Connection': `keep-alive`,
    'Host': `www.hfgh.org.cn`,
    'content-type': `application/json`,
    'Accept-Encoding': `gzip,compress,br,deflate`,
    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x1800142f) NetType/4G Language/zh_CN`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
