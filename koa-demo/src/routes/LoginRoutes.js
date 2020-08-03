import Router from 'koa-router'
import LoginController from '../api/LoginController'
const router = new Router()

router.get('/captcha', LoginController.getCaptcha)

export default router