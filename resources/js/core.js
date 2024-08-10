"use stric";
import config from "./config.js";
import communicate from "./Core/communicate.js";


const $ = document.querySelector.bind(document);

// communicate.unlogger('all', 'all', true);
communicate.send('output', config.setConfig('header'), 'header');
communicate.view_render('#root', 'header');

communicate.send('output', config.setConfig('footer'), 'footer');
communicate.view_render('#footer', 'footer');

(async () => {
    await communicate.get_data_API('fakeAPI.json', 'json', 'music');
    await communicate.get_data_API('./resources/data/imgAPI.json', 'json', 'imgAPI');
    communicate.send('output', config.setConfig('home'), 'home');
    communicate.view_render('#body', 'home');
    // communicate.send('output', config.setConfig(`idea`), `idea`);
    // communicate.send('output', config.setConfig(`aboutme`), `aboutme`);
    // communicate.send('output', config.setConfig(`source`), `source`);
    // communicate.send('output', config.setConfig(`signin`), `signin`);
    // communicate.send('output', config.setConfig('goal'), 'goal');

    communicate.declare_action('click', (accusative) => {
        if (accusative === 'commingsoon') {
            alert('This page is commingsoon!!!');
            return;
        }
        if (accusative) {
            communicate.view_render("#body", accusative);
        }
    });

    communicate.set_data_localStore('play', false);
    communicate.declare_action('play', async () => {
        if (!communicate.get_data_storage('play')) {
            $('.play').innerText = 'load';
            await $('#music').play();
            $('.play').innerText = 'pause';
            communicate.set_data_localStore('play', true);
        } else {
            $('#music').pause();
            $('.play').innerText = 'play';
            communicate.set_data_localStore('play', false);
        }
    });
    communicate.action(true);
    await communicate.get_data_API('./resources/data/readme.html', 'txt', 'readme');
    communicate.send('output', config.setConfig('readme'), 'readme');

})();
