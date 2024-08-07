"use stric";
import communicate from "./communicate.js";

function header(){
    let HTMLs = "";
    HTMLs += `
        <div class="header">
            <div class="tools bar">
                <div class="" onclick="handle.click('home')">Home</div>
                <div class="" onclick="handle.click('readme')">README</div>
                <div class="" onclick="handle.click('goal')">CORE GOAL</div>
                <div class="">IDEA STRUCT</div>
                <div class="">ABOUT ME - AUTHOR</div>
                <div class="">SOURCE</div>
                <div class="">SIGN IN</div>
            </div>
        </div>
        <div id="body"></div>
            `;
    return HTMLs;
}

function home(){
    let HTMLs = "";
    HTMLs +=`
       <h1>This is Home bro</h1>
    `;
    return HTMLs;
}

function readme(){
    return `
        <h2>This is ReadMe </h2>
    `;
}

function goal(){
    return `
        <h2>My goal is become a Master web Dev</h2>
    `;
}

function footer(){
    let HTMLs = "";
    HTMLs +=`
       
    `;
    return HTMLs;
}

const config = {
    setConfig(type) {
        switch (type) {
            case "home":
                return home(); 
            case "header":
                return header();
            case "footer":
                return footer();
            case "readme":
                return readme();
            case "goal":
                return goal();
            default:
                communicate.logger("err", "config", "Can not set config",
                    `${type} is undefine`
                );
        }
    }
}

export default config;