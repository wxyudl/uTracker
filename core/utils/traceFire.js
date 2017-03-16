/*jshint esversion: 6 */
import o2u from './obj2url';
{
    let traceUrl = 'http://mtev2.w3-969.ibm.com/dsdp/tools/save_tracker_data/';
    let tracefire = function(fields){
        let collect = new Image();
        collect.src = traceUrl + '?' + o2u(fields);
    };
    module.exports = tracefire;
}
