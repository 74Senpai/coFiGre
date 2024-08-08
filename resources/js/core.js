"use stric";
import config from "./config.js";
import communicate from "./Core/communicate.js";

const $ = document.querySelector.bind(document);

communicate.unlogger('all', 'output', true);
communicate.send('output', config.setConfig('header'), 'header');
communicate.view_render('#root', 'header');
communicate.send('output', config.setConfig('home'), 'home');
communicate.view_render('#body', 'home');
communicate.send('output', config.setConfig('footer'), 'footer');
communicate.view_render('#footer', 'footer');

(async ()=>{
   
    communicate.send('output', config.setConfig(`idea`), `idea`);
    communicate.send('output', config.setConfig(`aboutme`), `aboutme`);
    communicate.send('output', config.setConfig(`source`), `source`);
    communicate.send('output', config.setConfig(`signin`), `signin`);
    communicate.send('output', config.setConfig('goal'), 'goal');

    communicate.declare_action('click', (accusative)=>{
        if(accusative){
            communicate.view_render("#body", accusative);
        }
        
    });
    communicate.action(true);

    
    await communicate.get_data_API('./resources/data/readme.txt', 'txt', 'readme');
    communicate.send('output', config.setConfig('readme'), 'readme');
    
    
})();
