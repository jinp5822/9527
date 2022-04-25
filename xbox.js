
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://h5.youzan.com/wscump/checkin/checkinV2.json?checkinId=1597464&app_id=wx7f4f694622875202&kdt_id=100464643&access_token=0d62de33a9e3fde8e9380aeffd6662`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip,compress,br,deflate`,
'content-type' : `application/json`,
'Connection' : `keep-alive`,
'Referer' : `https://servicewechat.com/wx7f4f694622875202/10/page-frame.html`,
'Host' : `h5.youzan.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.14(0x18000e2f) NetType/WIFI Language/zh_CN`,
'x-yz-action-id' : `wsc-PNcAu1ytYr-1650671974561-581245`,
'Extra-Data' : `{"is_weapp":1,"sid":"YZ967140858623819776YZefxqcOFl","version":"2.101.7.101","client":"weapp","bizEnv":"wsc","uuid":"8LB3eUHLQV1mP6D1642802721013","ftime":1642802721013}`
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
