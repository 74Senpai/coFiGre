import communicate from "./Core/communicate.js";

let apiData;

async function dataAPI(data) {
    apiData = data;
}


const store = {
    async setDataToStore(data, type){
        switch(type){
            case "api":
                await dataAPI(data);
                communicate.logger('log',"data API", apiData);
                return true;
            default: 
                communicate.logger("err", `Type ${type} not have any config`, 
                    "By config-->getDataConfig"
                );
                return false;
        }
    },

    sendData(type){
        switch(type){
            case "api":
                return apiData;
            default:
                communicate.logger("err", "Please set type of data you want return");
        }
    }
}

export default store;