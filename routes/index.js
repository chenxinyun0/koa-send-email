const router = require('koa-router')()
const nodemailer = require('nodemailer')
const sendEmail = require('../utils/email')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})


router.get('/send-email', async (ctx, next) => {

  // 获取四位随机数
  function generateRandomNumbers() {
    var str = '';
    for (var i = 0; i < 4; i++) {
      var randomNumber = Math.floor(Math.random() * 10); // 生成0到9之间的随机整数
      str += randomNumber
    }
    return str;
  }


  const sendEmialRes = await sendEmail('xxxx@qq.com', 'xxxx@qq.com', 'xxxxxxx@qq.com', 'weoxwxmxzxxubdfxzytxbich', generateRandomNumbers()).catch(console.error)
  ctx.body = {
    title: sendEmialRes
  }
})

module.exports = router
