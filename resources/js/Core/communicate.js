import input from "../input.js";
import output from "../output.js";
import store from "../store.js";
import config from "./config.js";

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
                    output._setKey(data);
                    result = output;
                    break;
                case "STORE":
                    result = store;
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
        if(!data){
            return result;
        }
        render();
        
    },
    save(){
        
    },
    request_data(dataReques){
        switch(dataReques){
            case "api":
                // console.log(getDataPlayList);
                return store.sendData(dataReques);
            case "songs":
                break;
            case "authors":
                break;
            case "albums":
                break;
            case "singers":
                break;
            default:
                console.group("Core");
                console.error("Option data is not config", dataReques);
                console.groupEnd();
        }
    },
    rollback(){

    },
    preview(){

    },
    send(accusative, data, type, value){
        switch(accusative){
            case "store":
                return store.setDataToStore(data, type);
                break;
            case "output":
                break;
            case "input":
                break;
            case "config":
                break;
            case "view":
                break;
            default:
                console.group("Core------");
                console.log("Accusative is not define: ", accusative);
                console.groupEnd();
        }
    },
    action(type){
        switch(type){
            case "add":
                return ;
            case "remove":
                return ;
            case "replace":
                return ;
            
        }
    },

    logger(type, ...log) {
        switch (type) {
            case "log":
                console.group("Core -------------> Log");
                log.forEach((msg) => console.log(msg));
                console.groupEnd();
                break;
            case "infor":
                console.group("Core -------------> Info");
                log.forEach((msg) => console.info(msg));
                console.groupEnd();
                break;
            case "err":
                console.group("Core -------------> Error");
                log.forEach((msg) => console.error(msg));
                console.groupEnd();
                break;
            case "warr":
                console.group("Core -------------> Warning");
                log.forEach((msg) => console.warn(msg));
                console.groupEnd();
                break;
            default:
                console.group("Core -------------> Unknown Type");
                console.warn("Unknown log type:", type);
                log.forEach((msg) => console.log(msg));
                console.groupEnd();
                break;
        }
    }
    
}

export default communicate;