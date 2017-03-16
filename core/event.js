/*jshint esversion: 6 */

import __fields from './fields';
import query from './utils/query';
import tracefire from './utils/tracefire';
import on from './utils/on';

{
    let fields = new __fields();
    class Event{
        constructor(uid){
            // Get common collection data
            fields.uid = uid;
            fields.tt = 'event';
            this.fire();
        }

        validateField(){

        }

        fire(){
            on(query('body'), 'click', function(e){
                switch(e.target.nodeName){
                case 'A':
                    fields.et = 'link';
                    fields.url = e.target.href;
                    fields.label = e.target.innerText;
                    break;
                case 'BUTTON':
                    fields.et = 'button';
                    fields.url = '';
                    fields.label = e.target.innerText;
                    break;
                default:
                    fields.eleType = 'undefined';
                fields.url = '';
                fields.label = '';
                break;
                }

                if(fields.eleType !== 'undefined'){
                    tracefire(fields);
                }
            }, false);
        }
    }

    let event = function(uid){
        new Event(uid);
    };

    module.exports = event;
}
