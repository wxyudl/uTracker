/*jshint esversion: 6 */

import __fields from './fields';
import query from './utils/query';
import tracefire from './utils/tracefire';
import on from './utils/on';

{
    let fields = new __fields();
    class Hotspots{
        constructor(uid){
            // Get common collection data
            fields.uid = uid;
            fields.tt = 'hotspots';
            this.fire();
        }

        validateField(){

        }

        fire(){
            on(query('body'), 'click', function(e){
                fields.x = e.clientX;
                fields.y = e.clientY;

                tracefire(fields);
            }, false);
        }
    }

    let hotspots = function(uid){
        new Hotspots(uid);
    };

    module.exports = hotspots;
}
