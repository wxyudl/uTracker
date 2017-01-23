/*jshint esversion: 6 */

import __fields from './fields';
import query from './utils/query';
import tracefire from './utils/tracefire';

{
  let fields = new __fields();

  class PV{
    constructor(uid){
      // Get common collection data
      fields.uid = uid;
      fields.tt = 'pageview';
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
