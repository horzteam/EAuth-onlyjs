function login() {
    // 获取表单中的邮箱和密码
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // 构造请求的 JSON 数据
    var data = {
        email: email,
        password: password
    };

    // 发送 POST 请求
    fetch(api+'/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if(data.token){
        // 将返回的 token 存储到 localStorage
        localStorage.setItem('token', data.token);
        // 可以根据业务逻辑进行其他处理，比如跳转页面等
        console.log('[EAuth] 登录成功，token 已存储到 localStorage');
        mdui.snackbar({
            message: '登录成功',
            position: 'right-bottom',
        });
        location.href="/usr/";
    }else{
        console.error('[EAuth] 登录失败:', error);
        // 可以根据错误情况进行处理，比如显示错误信息给用户
        mdui.snackbar({
            message: '登录失败, 可能账户密码出错/邮箱未验证',
            position: 'right-bottom',
        });
    }
    })
    .catch(error => {
        console.error('[EAuth] 登录失败:', error);
        // 可以根据错误情况进行处理，比如显示错误信息给用户
        mdui.snackbar({
            message: '登录失败, 可能账户密码出错',
            position: 'right-bottom',
        });
    });
}
