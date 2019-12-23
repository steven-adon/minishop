// default config
module.exports = {
  default_module: 'api',
  weixin: {
    appid: 'wxf48b3885d11a8484', // 小程序 appid
    secret: 'c6a78d9b9a4098951de39b2d424ee29e', // 小程序密钥
    mch_id: '', // 商户帐号ID
    partner_key: '', // 微信支付密钥
    notify_url: 'http://192.168.3.110:8360/api/pay/notify' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
  },
  express: {
    // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
    appid: '', // 对应快递鸟用户后台 用户ID
    appkey: '', // 对应快递鸟用户后台 API key
    request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
  }
};
