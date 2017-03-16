/*jshint esversion: 6 */

import __fields from './fields';
import query from './utils/query';
import tracefire from './utils/tracefire';

{
    let fields = new __fields();
    const performance = window.performance || {};
    const timing = performance.timing;
    
    class PV{
        constructor(uid){
            // Get common collection data
            fields.uid = uid;
            fields.tt = 'pageview';
            fields.timing = '{"CE": '+ timing.connectEnd +', "CS": '+ timing.connectStart +', "DC": '+ timing.domComplete +', "DCLE": '+ timing.domContentLoadedEventEnd +', "DCLS": '+ timing.domContentLoadedEventStart +', "DI": '+ timing.domInteractive +', "DL": '+ timing.domLoading +', "DLE": '+ timing.domainLookupEnd +', "DLS": '+ timing.domainLookupStart +', "FS": '+ timing.fetchStart +', "LE": '+ timing.loadEventEnd +', "LS": '+ timing.loadEventStart +', "NS": '+ timing.navigationStart +', "RE": '+ timing.redirectEnd +', "RS": '+ timing.redirectStart +', "RQS": '+ timing.requestStart +', "RPE": '+ timing.responseEnd +', "RPS": '+ timing.responseStart +', "SS": '+ timing.secureConnectionStart +', "UE": '+ timing.unloadEventEnd +', "US": '+ timing.unloadEventStart +'}';
            this.fire();
        }

        validateField(){

        }

        fire(){
            tracefire(fields);
        }
    }

    let pageview = function(uid){
        new PV(uid);
    };

    module.exports = pageview;
}
