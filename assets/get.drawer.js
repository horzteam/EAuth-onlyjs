var xhr = new XMLHttpRequest();
xhr.open('GET', '/assets/html/drawer.html', true);
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
        var drawerContent = xhr.responseText;
        document.querySelector('.mdui-drawer').innerHTML = drawerContent;
    } else {
        console.error('请求失败：' + xhr.status);
    }
};
xhr.send();
