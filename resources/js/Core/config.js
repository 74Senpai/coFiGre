import communicate from "./communicate.js";

function configAPI(){
    let data = communicate.request_data('api');
    communicate.logger('log',data);
}

const config = {
    setConfig(type){
        switch(type){
            case "api":
                configAPI();
                communicate.logger("infor","Set config for API");
                break;
            default:
                communicate.logger("err", "Can not set config",
                    `${type} is undefine`
                );
        }
    }
}

export default config;