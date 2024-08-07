"use stric";
import input from "./input.js";
import output from "./output.js";
import store from "./store.js";
import action from "./action.js";


const $ = document.querySelector.bind(document);

const communicate = {
    
    contact(accusative, data){
        let result;
        window.redata = data;
        if(typeof accusative === "string"){
            accusative = accusative.trim();
            accusative = accusative.toUpperCase();
            switch(accusative){
                case "INPUT":
                    result = input;
                    break;
                case "OUTPUT":
                    result = output;
                    break;
                case "STORE":
                    result = store;
                    break;
                case "CONFIG":
                    result = config;
                    break;
                case "ACTION":
                    result = action;
                    break;
                default:
                    console.group("Core");
                    console.error("Accusative is not define", accusative);
                    console.groupEnd();
            }
        }else{
            console.group("Core");
            console.error("Accusative is not type String", accusative);
            console.groupEnd();
        }    
        return result;
        
    },
    request_data(accusative, type_dataReques){
        switch(accusative){
            case "store":
                // console.log(getDataPlayList);
                return store.sendData(type_dataReques);
            case "output":
                return output.returnDataByOutput(type_dataReques);
            default:
                console.group("Core");
                console.error("Option data is not config", type_dataReques);
                console.groupEnd();
        }
    },
   
    send(accusative, data, type){
        switch(accusative){
            case "store":
                return store.setDataToStore(data, type);
            case "output":
                return output.setDataToOutput(data,type);
            default:
                console.group("Core------");
                console.log("Accusative is not define: ", accusative);
                console.groupEnd();
        }
    },
    view_render(location, type){
        return output.render(location,type);
    },
    declare_action(type, declare){
        if(!type || !declare) {
            communicate.logger(
            'err',"communicate", "please set valid value"
            );
            return;
        }
        action.action_declare(type, declare);
    },
    action(createHandel){
        if(createHandel){
            window.handle = action.action_function('more');
        }
        return action.action_function('more');
    },
    logger(type,location, ...log) {
        switch (type) {
            case "log":
                console.group(`Core -------------> Log at ${location} module`);
                log.forEach((msg) => console.log(msg));
                console.groupEnd();
                break;
            case "infor":
                console.group(`Core -------------> Info at ${location} module`);
                log.forEach((msg) => console.info(msg));
                console.groupEnd();
                break;
            case "err":
                console.group(`Core -------------> Error at ${location} module`);
                log.forEach((msg) => console.error(msg));
                console.groupEnd();
                break;
            case "warr":
                console.group(`Core -------------> Warning at ${location} module`);
                log.forEach((msg) => console.warn(msg));
                console.groupEnd();
                break;
            default:
                console.group(`Core -------------> Unknown Type at ${location} module`);
                console.warn("Unknown log type:", type);
                log.forEach((msg) => console.log(msg));
                console.groupEnd();
                break;
        }
    },
    set_data_localStore(key, status){
        try{
            store.save_to_storage(key, status);
        }catch(err){
            communicate.logger('err', 'communicate', 
                'set data to local storage faild');
        }
    },

    data_storage(){
        try{
            return store.get_data_store();
        }catch(err){
            communicate.logger('err', 'communicate', 
                'get data to local storage faild');
        }
    }
}

export default communicate;