let cookie={}

/**
* 设置cookie
* @param {String} name  cookie名称
* @param {String} value cookie值
* @param {Number} time 过期时间 分钟
*/
cookie.setCookie = function(name, value, minute){
    let va = escape(value)
    let data = new Date()
    if (minute) {
        data.setTime(data.getTime() + 1000 * 60 * minute)
        document.cookie = `${name}=${va};expires=${data.toUTCString()}`
    } else {
        document.cookie = `${name}=${va}` //当前会话关闭就超时
    }
}

/**
 * 删除指定cookie
 * @param {String} name 要删除的cookie名称
 */
cookie.clearCookieByName = function (name){
    cookie.setCookie(name, '', -1)
}


/**
 * 获取所有cookie
 * return 包含当前cookie值的对象 
 */
cookie.getAll =  function(){
    let coo = document.cookie
    if (coo == '') {
        return null
    }
    //清除空格
    coo = coo.replace(/\s+/g, '')
    let cArr = coo.split(';')
    let cookies = {}
    cArr.forEach((coo) => {
        let c = coo.split('=')
        cookies[c[0]] = unescape(c[1])
    })
    return cookies
}

/**
 * 获取指定名称的cookie
 * 参数name: cookie名称
 * return :如果有返回cookie值，否则返回为null
 */
cookie.getCookieByName = function(name){
    let cs =  cookie.getAll()
    
    if(cs.hasOwnProperty(name)){
        return cs[name]
    }else {
        return null
    }
}