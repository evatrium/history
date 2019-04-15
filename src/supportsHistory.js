/**
 * tests if the browser supports history
 * *** have not tested ***
 * @returns {Boolean} - returns true if the browser supports it
 */
export const supportsHistory = () => {
    const ua = window.navigator.userAgent;
    return (ua.indexOf("Android 2.") !== -1 || ua.indexOf("Android 4.0") !== -1) &&
    ua.indexOf("Mobile Safari") !== -1 && ua.indexOf("Chrome") === -1 &&
    ua.indexOf("Windows Phone") === -1 ? false : window.history && "pushState" in window.history;
};