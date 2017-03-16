/*jshint esversion: 6 */
{
    let url = function(obj){
        let _2url = Object.keys(obj).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
        }).join('&');

        return _2url;
    };

    module.exports = url;
}
