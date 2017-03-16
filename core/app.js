/*jshint esversion: 6 */
import pageview from './pageview';
import hotspots from './hotspots';
import event from './event';

let analyzer = {
    pageview: pageview,
    hotspots: hotspots,
    event : event
};

(function(){	
    class UT{
        constructor(catArr, uid){
            if(Array.isArray(catArr)){
                for(let cat of catArr){
                    analyzer[cat](uid);
                }
            }else{
                throw TypeError('First parameter must be an array!');
            }
        }
    }

    let uTracker = function(cat, uid){
        return new UT(cat, uid);
    };

    window.ut = uTracker;
})();
