/*jshint esversion: 6 */
{
    let on = function(dom, eventName, callback, useCapture){
        dom.forEach(function(e, idx){
            e.addEventListener(eventName, callback, useCapture);
        });
    };
    module.exports = on;
}
