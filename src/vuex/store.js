import applyMixin from './mixin'
let Vue;
// 最终用户拿到的是这个类的实例
class Store {
    constructor(options){
        console.log(options)
    }
}


const install = (_vue)=>{
    Vue = _vue
    // vue-router 调用install目的?注册了全局组件 注册原型方法 mixin =>router 实例绑定给了所有的组件
    console.log('install')
    
    applyMixin(Vue)
}


export {
    Store,
    install
}