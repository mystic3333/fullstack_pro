import SvgCaptcha from 'svg-captcha'

class LoginController{
  constructor(){}
  getCaptcha(ctx) {
    const captcha = SvgCaptcha.create()
    ctx.body = {
      ...captcha.data
    }
  }
}

export default new LoginController()