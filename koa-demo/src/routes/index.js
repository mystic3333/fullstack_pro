import combineRouters from 'koa-combine-routers'
import LoginRoutes from './LoginRoutes'


export default combineRouters(
  LoginRoutes
)