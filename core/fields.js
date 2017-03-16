/*jshint esversion: 6 */
import cookie from './utils/cookie';
/**
 * Set common data collection fields:
 *   bl: current browser link url.
 *   br: browser info, e.g. Chrome/55.0.2883.95
 *   ul: user language, e.g. en-US
 *   be: browser encode format, e.g. UTF-8
 *   bt: browser title.
 *   sr: screen resolution, e.g. 1440x900
 *   ref: page reference.
 *   tt: track type, e.g. pageview, hotspots, event
 *   t: timestamp
 *   _u: user information. e.g. wxyu|-|120.21.39.110|-|10, separate by '|-|', 1. user name, 2. ip, 3. visits count
 *   uid: unique id, from platform. each use should has an unique id.
 *
 *   Extra:
 *   et: element type, e.g. link, button
 *   url(Event), event clicked link url.
 *   label(Event), event clicked label name.
 *   x(Event), clicked clientX
 *   y(Event), clicked clientY
 */
{
    let _ipInfoObj = ipInfoObj || '';
    let _ip = _ipInfoObj ? _ipInfoObj.query : '';
    let _country = _ipInfoObj ? _ipInfoObj.country : '';
    let _city = _ipInfoObj ? _ipInfoObj.city : '';
    let _isp = _ipInfoObj ? _ipInfoObj.isp : '';
    let _lat = _ipInfoObj ? _ipInfoObj.lat : '';
    let _lon = _ipInfoObj ? _ipInfoObj.lon : '';

    let __fields = function(){
        this.bl = location.href;
        this.br = navigator.userAgent;
        this.ul = navigator.browserLanguage || navigator.language;
        this.be = 'UTF-8';
        this.bt = document.title;
        this.sr = window.screen.width + 'x' + window.screen.height;
        this.ref = document.referrer;
        this.t = +new Date();
        this._u = _ip + '|-|1' + '|-|' + _country + '|-|' + _city + '|-|' + _isp + '|-|' + _lat + '|-|' + _lon;
        this.uid = '';
    };

    module.exports = __fields;
}
