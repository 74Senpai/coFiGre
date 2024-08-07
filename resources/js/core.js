"use stric";
import config from "./config.js";
import communicate from "./Core/communicate.js";
(async ()=>{
    const $ = document.querySelector.bind(document);
    const header = config.setConfig('header');
    communicate.send('output', header, 'header');
    communicate.view_render('#root', 'header');
    
    communicate.declare_action('click', (accusative)=>{
        if(accusative){
            communicate.view_render("#body", accusative);
        }
    });
    communicate.action(true);

    const home = config.setConfig('home');
    communicate.send('output', home, 'home');

    const readme = config.setConfig('readme');
    communicate.send('output', readme, 'readme');

    const goal = config.setConfig('goal');
    communicate.send('output', goal, 'goal');
    
})();
