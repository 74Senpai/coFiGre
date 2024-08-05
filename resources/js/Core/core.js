"use stric";
import config from "./config.js";
import communicate from "./communicate.js";


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

communicate.declare_action('more',(event)=>{
    console.log(event);
});
communicate.action(true);

$('#header').innerHTML=`${
    communicate.request_data('output', 'header')
}`;

$('#root').innerHTML = `${
    // get data you want render into html
    communicate.request_data('output', 'playlist')
}`;