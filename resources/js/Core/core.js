"use stric";
import config from "./config.js";
import communicate from "./communicate.js";
(async()=>{
    const $ = document.querySelector.bind(document);
    const input = communicate.contact("input");

    //get data from API ---> send to store.js
    await input.getData("fakeAPI.json", "json", "api_playlist");

    // user set config for data and send to output or other
    //send to Output if you want render this
    // send to Store if you want user this for setting, status web or other
    //store cant save to local storage
    const playlist = await config.setConfig("api_playlist"); 
    communicate.send("output", playlist, "playlist");

    const header = await config.setConfig("header");
    communicate.send("output", header, "header");

    //declare function 
    communicate.declare_action('more',(event)=>{
        console.log(event);
    });
    communicate.declare_action('play',(event)=>{
        const tarGet = event.target;
        const index = tarGet.closest('[data-index]');
        console.log(index.dataset.index);
        $(`[data-index="${index.dataset.index}"] audio`).play();
    });
    communicate.declare_action('test', ()=>{
        communicate.view_render("#root", "playlist");
    });

    //push function to global
    communicate.action(true);

    communicate.view_render("#header", "header");
})();
