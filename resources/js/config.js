"use stric";
import communicate from "./Core/communicate.js";

function header(){
    let HTMLs = "";
    HTMLs += `
        <div class="header">
            <div class="tools bar">
                <div class="" onclick="handle.click('home')">Home</div>
                <div class="" onclick="handle.click('readme')">README</div>
                <div class="" onclick="handle.click('goal')">CORE GOAL</div>
                <div class="" onclick="handle.click('idea')">IDEA STRUCT</div>
                <div class="" onclick="handle.click('aboutme')">ABOUT ME</div>
                <div class="" onclick="handle.click('source')">SOURCE</div>
                <div class="" onclick="handle.click('signin')">SIGN IN</div>
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

function idea(){
    return`
        <h2>My idea is stop </h2>
    `;
}

function footer(){
    let HTMLs = "";
    HTMLs +=`
       
    `;
    return HTMLs;
}

function aboutme(){
    return `
        <h2>Hi am Thong, now, you can add frend me </h2>
    `;
}

function source(){
    return `
        <h2>View my source code in github </h2>
    `;
}

function signin(){
    return `
        <h1>Sign In is comming soon !!!</h1>
    `;
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
            case "idea":
                return idea();
            case "aboutme":
                return aboutme();
            case "source":
                return source();
            case "signin":
                return signin();
            default:
                communicate.logger("err", "config", "Can not set config",
                    `${type} is undefine`
                );
        }
    }
}

export default config;