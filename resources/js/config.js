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
        <div id="footer"></div>
            `;
    return HTMLs;
}

function music(){
    const playlist = communicate.request_data('store', 'music');
    const music = playlist.play_list;
    return`
        <div class="intro">
            <div class="text">${music[0].name_song} 
                <p onclick="handle.play()"> Click me to <span class="play">play</span> music </p>
                 <div class="music"> <img src="${music[0].img}"></div>
            </div>
           <div class="img configMusic"><img src="./readme_img/musicPlay.png"></div>
            <audio id="music" preload="none">
                <source src="${music[0].audio_src}" type="audio/ogg">
            </audio>
        </div>
    `;
}

function home(){
    let HTMLs = "";
    let tmp = "";
    
    const imgAPI = communicate.request_data('store', 'imgAPI');
    for(let i = 0 ; i < imgAPI.length ; i++){
        tmp+=`
            <div class="intro">
                <div class="text"> ${imgAPI[i].title}</div>
                <div class="img"><img src="${imgAPI[i].header}" alt=""></div>
            </div>
        `
    }
    HTMLs = `
        <div class="OverView">
            ${tmp}
            ${music()}
        </div>
    `
    return HTMLs;
}

function readme(){
    return `
        <h2>This is ReadMe </h2>
        <pre>${communicate.request_data('store', 'readme')}</pre>
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
       <div class="footer">
            <div class="contact">
                <div class="me">
                    <div class="name">Create : Tran Duc Thong</div>
                    <div class="PhoneNumber">Phone Number : 0848***159</div>
                    <div class="email">Email : trantran71***4@gmail.com</div>
                    <div class="Loaction">Live : Now in Da Nang Viet Nam</div>
                </div>
                <div class="social">
                    <div class="facebook"> Facebook: </div>
                    <div class="youtube">Youtube :</div>
                    <div class="github">Github :</div>
                    <div class="linkedin">Linkedin :</div>
                </div>
            </div>
       </div>
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