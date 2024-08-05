"use stric";
import communicate from "./Core/communicate.js";

const dataStore={

};

async function dataAPI(data, type) {
    if(!dataStore[type]){
        dataStore[type] = data;
        communicate.logger('infor',  "Store", `Set data for key ${type} done`);
        return true;
    }else{
        communicate.logger('infor', "Store",  `replace data for key ${type}`);
        dataStore[type] = data;
        return true;
    }
}


const store = {
    async setDataToStore(data, type){
        if(!data || !type){
            communicate.logger('err', "Store",
                "data or type is undefine"
            );
            return false;
        } 
        return  await dataAPI(data, type);
    },

    sendData(type){
        if(dataStore[type]) 
            return dataStore[type];
        return `Key ${type} is undefine`;
    }
}

export default store;