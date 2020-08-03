import koa from 'koa'
import router from './routes'
import cors from '@koa/cors'
import koaBody from 'koa-body'
import staticRoot from 'koa-static'
import path from 'path'
import compose from 'koa-compose'
import compress from 'koa-compress'
import helmet from 'helmet'
import koaJson from 'koa-json'


const app = new koa()
const idDevMode = process.env.NODE_ENV === 'production' ? false : true

const middlewares = compose([
  koaBody(),
  staticRoot(path.resolve(__dirname, '../public')),
  cors(),
  koaJson({ pretty: false, param: 'pretty' }),
])

app
.use(middlewares)
.use(router())

if (!idDevMode) {
  app.use(compress())
}

app.listen(3100, () => {
  console.log('listen in port 3100')
})