const koa = require('koa')
const fs = require('fs')
const mount = require('koa-mount')
const static = require('koa-static')
const path = require('path')

const app = new koa()

// static中间件
app.use(
    static(__dirname + '/source/static/')
)

app.use(
    mount('/', async (ctx) => {
        console.log(path.join(__dirname, '/source/index.html'))
        ctx.body = fs.readFileSync(path.join(__dirname, '/source/index.html'), 'utf-8')
    })
)

app.listen(3000)