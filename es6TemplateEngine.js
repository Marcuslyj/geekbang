// es6模板字符串实现模板引擎
// 要素
// xss过滤
// include子模板


const user = {
    name: '<sctipt/>'
}
const result = `<h2>${user.name}</h2>`

const vm = require('vm')
// 运行在沙箱
console.log(vm.runInNewContext('`<h2>${_(user.name)}</h2>`', {
    user,
    // xss过滤函数
    _: function (markup) {
        if (!markup) return ''
        return String(markup)
            .replace(/&/g, '&amp;')
            .replace(/ /g, '&nbsp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/\r{0,}\n/g, '<br/>')
    },
    // helper函数
    helper: function () { }
}))
// const template = '<h2><%= user.name %></h2>'
// ejs.render(template, user)
