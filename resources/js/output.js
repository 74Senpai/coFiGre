"use stric";
import communicate from "./Core/communicate.js";


const output_HTMLs = {

}

const output = {
    setDataToOutput(data,type){
        if(!output_HTMLs[type]){
            output_HTMLs[type] = data;
        }else{
            communicate.logger('infor', 'output',`Pre data key ${type}:`,
                output_HTMLs[type],
                "New data: ", data
            );
            output_HTMLs[type] = data;
        }

        return communicate.logger('log','output', 'Set data done!',
            `Key: ${type}`, "Value ",output_HTMLs[type]
        );
    },

    returnDataByOutput(type){
        if(output_HTMLs[type]){
            return output_HTMLs[type];
        }else{
            return communicate.logger("err",'output', `Key ${type} is undefine`);
        }
    }
}

export default output;