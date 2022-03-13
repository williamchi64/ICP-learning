// 7 BOM
/* what is BOM
    B: Browser
    O: Object
    M: Model
    Browser engine:
        IE 6-11(windows), Chrome, Safari(Mac), FireFox(linux)
*/
// Object: window -- global, anything on browser
// window.alert(1);
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.outerWidth);
// Object: navigator | navigator -- browser info
// be careful with using navigator, because it can be changed easily.
window.Navigator;
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);
// Object: screen -- PC screen info
console.log(screen.width);
console.log(screen.height);
// Object: location -- url info
console.log(location);
console.log(location.host);
console.log(location.href);
console.log(location.protocol);
// location.reload(); // f5
// location.assign('https://google.com') // redirect
// Object: document -- web page info
document.title = 'bom learning';
// get example document
console.log(document.getElementById('dom1'));
// get cookie
console.log(document.cookie);
// get history
// Object: history -- location change history
console.log(history);