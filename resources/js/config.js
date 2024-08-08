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

function home(){
    let HTMLs = "";
    HTMLs +=`
       <h1>This is Home bro</h1>
       <div class="OverView">
            <div class="intro">
                <div class="text"> Create user interfaces esasyli with coFiGer library </div>
            </div>
            <div class="intro">
                <div class="text"> Declare handel event with method fast and open like sky </div>
            </div>
            <div class="intro">
               <div class="text"> Save data to local storage by key, value in 1 step </div>
            </div>
            <div class="intro">
                <div class="text"> Support get API and easy to config </div>
            </div>
       </div>
    `;
    return HTMLs;
}

function readme(){
    return `
        <h2>This is ReadMe </h2>
        ${communicate.request_data('store', 'readme')}
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