"use stric";
import communicate from "./Core/communicate.js";

let data;

const input = {
    async getData(URL_SRC, type, typeSave) {
        let accusative = "store";
        if (!type || !URL_SRC) {
            communicate.logger("err", "input", "URL or type is undefine!!!",
                " Please set this", "View more in REAME.md",
                "By input-->getData()");
            return;
        }
        try {
            let response = await fetch(URL_SRC);
            let data;
            switch (type) {
                case "json":
                    data = await response.json();
                    return communicate.send(accusative, data, typeSave);
                    
                case "txt":
                    data = await response.text();
                    return communicate.send(accusative, data, typeSave);
                   
                default:
                    communicate.logger("war","input", "Type data result not have config!");
                    return;
            }
        } catch (error) {
            communicate.logger("err", "input", "Failed to fetch data", error);
        }
    }
    
}

export default input;