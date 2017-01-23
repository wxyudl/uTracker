/*jshint esversion: 6 */
import pv from './pageview';
import hs from './hotspots';
import ev from './event';

(function(){
  class UT{
    constructor(cat, uid){
      switch(cat){
        case 'pageview':
          pv(uid);
          break;
        case 'hotspots':
          hs(uid);
          break;
        case 'event':
          ev(uid);
          break;
        default:
          pv(uid);
          break;
      }
    }
  }

  let uTracker = function(cat, uid){
    return new UT(cat, uid);
  };

  window.ut = uTracker;
})();
