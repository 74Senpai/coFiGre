"use stric";
import communicate from './communicate.js';

const action_store = {};
const sensor_store = {};

const action = {
    action_declare(type, declare){
        if(!action_store[type]){
            action_store[type] = declare;
            communicate.logger('infor',"action",
                `Declare action: ${type} `,
                action_store[type]
            );
            return true;
        }else{
            communicate.logger('infor',"action",
                `action ${type} already exit`
            );
            return false;
        }
    },
    action_function(){
        if(action_store){
            const fun = action_store;
            return fun;
        }else{
            communicate.logger('infor',"action",
                `action function null`
            );
            return false;
        }
    }

};

export default action;


