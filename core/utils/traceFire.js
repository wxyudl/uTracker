/*jshint esversion: 6 */
import o2u from './obj2url';
{
  let tracefire = function(fields){
    let collect = new Image();
    collect.src = './trace/?' + o2u(fields);
  };
  module.exports = tracefire;
}
