"use stric";
import config from "./config.js";
import communicate from "./Core/communicate.js";

(async ()=>{
    communicate.unlogger('all', 'output', true);
    const $ = document.querySelector.bind(document);
    const header = config.setConfig('header');
    communicate.send('output', header, 'header');
    communicate.view_render('#root', 'header');
    const home = config.setConfig('home');
    communicate.send('output', home, 'home');
    communicate.view_render('#body', 'home');
    communicate.send('output', config.setConfig(`idea`), `idea`);
    communicate.send('output', config.setConfig(`aboutme`), `aboutme`);
    communicate.send('output', config.setConfig(`source`), `source`);
    communicate.send('output', config.setConfig(`signin`), `signin`);


    communicate.declare_action('click', (accusative)=>{
        if(accusative){
            communicate.view_render("#body", accusative);
        }
    });
    communicate.action(true);

    

    const readme = config.setConfig('readme');
    communicate.send('output', readme, 'readme');

    const goal = config.setConfig('goal');
    communicate.send('output', goal, 'goal');
    
})();
