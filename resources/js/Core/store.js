"use stric";
import communicate from "./communicate.js";

const dataStore = {};
const store_local = {};

(()=>{
    store_local = JSON.parse(localStorage.getItem('store_data')) || {};
})();

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

function save(){
    localStorage.setItem('store_data', JSON.stringify(store_local));
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
    },

    save_to_storage(key, status){
        if(!key){
            communicate.logger('err','store',
                'please delare valid value'
            );
            return false;
        }
        store_local[key] = status;
        save();
        return true;
    },

    get_data_store(key){
        if(!store_local[key]){
            store_local[key] = false;
            save();
        }
        const data = JSON.parse(localStorage.getItem('store_data'));
        return data[key]; 
    }
}

export default store;