"use stric";
import communicate from "./communicate.js";

function configAPI() {
    let HTMLs = "";
    let data = communicate.request_data('store','api_playlist');
    // communicate.logger('log',"config", data);
    let songList = data.play_list;
    let index = 0;
    for (let i of songList) {
        // console.log(i)
        HTMLs += `
        <div class="@{class_song_tag}">
            <div class="@{class_song}" data-index="${index}">
                <audio preload="none">
                    <source src="${i.audio_src}" type="audio/ogg">
                </audio>
                <div class="@{class_song_img_mini}">
                    <img src="${i.img}" alt="@{alt}"
                        onclick="handle.play(event)"
                    >    
                </div>
                <div class="@{class_song_infor}">
                    <div class="@{class_name_song}">
                        ${i.name_song}<img width="12px" height="12px" style="display: none; background-color: rgba: (0,0,0,0); margin-left:10px;"src="">    
                    </div>
                    <div class="@{class_author}">
                        ${i.author}
                    </div>
                </div>
                <div class="@{class_more_infor}">
                    <button id="@{id_more}"
                    onclick="handle.more('hihi')"
                    >...</button>
                </div>
            </div>
        </div>`;
        index++;
    }
    return HTMLs;
}

function header(){
    let HTMLs = "";
    HTMLs +=`
        <div>
            <div>
                <h1>Hello Header</h1>
                <button onclick="handle.test()">Click me</button>
            </div>
        </div>
    `;
    return HTMLs;
}

const config = {
    setConfig(type) {
        switch (type) {
            case "api_playlist":
                communicate.logger("infor", "config", "Set config for API");
                return configAPI(); 
            case "header":
                return header();
            default:
                communicate.logger("err", "config", "Can not set config",
                    `${type} is undefine`
                );
        }
    }
}

export default config;