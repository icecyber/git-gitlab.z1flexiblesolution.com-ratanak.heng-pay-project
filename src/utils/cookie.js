export function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
export function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
export function eraseCookieCurrentPath(name) { 
    document.cookie = name+'=; Max-Age=-99999999;';
}
// export function eraseCookieFromAllPaths(name) {
//     // This function will attempt to remove a cookie from all paths.
//     //var pathBits = location.pathname.split('/');
//     // eslint-disable-next-line no-restricted-globals
//     var pathCurrent = ' path=';

//     // do a simple pathless delete first.
//     document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';

//     for (var i = 0; i < pathBits.length; i++) {
//         pathCurrent += ((pathCurrent.substr(-1) !== '/') ? '/' : '') + pathBits[i];
//         document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
//     }
// }