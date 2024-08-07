# myCore

# 1. Preview
- myCore give your method to rendering HTML and control event to easer, don't worry, myCore have syntax so basic and you can control this mini libary after your read guild

    - Step 1 : Your create a js file and import this to index.html file
        Example: <script type="module" src="./resources/js/Core/core.js"></script>
            + In example, I create file name is core.js

    - Step 2 : Your import libary to communicate.js and now, you can use this for every thing you need.
    - Step 3 : Befor do some thing, your need create a file config.js to config you data
        Your need return like this 
            ![alt text](./readme_img/image.png)
        * home() is you declare function, you can return you HTML
        * "home" is name you want when you call this, you get data from home() you declare

      + You can config API data if you want

    - Step 4 : Now, you go back core.js file and save you "home" to output
        - Syntax: 
                const home = config.setConfig('home');
                communicate.send('output', home, 'home');
    - Step 5 : Now, you can render this by funtion 
        - Syntax:
                communicate.view_render("body", 'home');

# 2.Syntax 

    - communicate.logger('type', 'loaction', ...'Some thing you need log');
        + type is type or log
        + location is loaction logger you call

    - communicate.contact('type');
        + type is type you need return this object
            Example: if you want get output module you need 
                      communicate.contact('output');
                    and this return output object/class/...
    
    - communication.send('accusive', data, 'key');
        + accusive is where data you need seed this
        + data is every think
        + key is name of key you want accusive get this
            Example: communication.send('output', "<h1>Home</>", 'home');
                    Now in output, you have data with key: home and data is <h1>Home</>

    - communicate.view-render(location, 'key');
        + location is where you can innerHTML
            +location will use document.querySelecter('location');
        + Now let try render 'home' in to body:
            communicate.view_render('body', 'home');

    - communicate.declare_action('name-action', 'logic')
        + name-action is name you want call this
        + logic is a function have a action you want do this when action called
            Example: communicate.declare_action('viewHome', ()=>{
                alter('Home Page');
            });
         - If you want use this action let read next syntax

    - communicate.action(default);
        + default is boolen type, chose true if you want user default name(handle) to call function you declare or you can set this in avrible and call avrible name
            Exampl: communicate.action(true);
                now in local, you have handle.viewHome() function
            you can use this in config file witch event like onclick,...
    
    



        

