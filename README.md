# myCore

## 1. Preview
myCore provides methods for rendering HTML and controlling events easily. Don't worry, myCore has a basic syntax that you can control after reading this guide.

### Steps to Use myCore

1. **Create a JS file and import it into your index.html file**
    ```html
    <script type="module" src="./resources/js/Core/core.js"></script>
    ```
    *Example:* In the example above, the file name is `core.js`.

2. **Import the library**
    ```javascript 
        import communicate from './Core/communication.js';
    ```
    Now you can use it for everything you need.

3. **Create a config.js file to configure your data**
    You need to return it like this:
    ```javascript
    function home() {
        return `
            <h1>This is Home</h1>
        `;
    }

    const config = {
        setConfig(type) {
            switch (type) {
                case "home":
                    return home();
                // Add other configurations here
                default:
                    console.error(`Type ${type} is undefined`);
            }
        }
    };

    export default config;
    ```
    - `home()` is a function you declare to return your HTML.
    - `"home"` is the name you want to use when you call this function to get the data returned by `home()`.

4. **Save your "home" to output in core.js**
    ```javascript
    const home = config.setConfig('home');
    communicate.send('output', home, 'home');
    ```

5. **Render this by using the function**
    ```javascript
    communicate.view_render("body", 'home');
    ```

## 2. Syntax

1. **Logger**
    ```javascript
    - communicate.logger('type', 'loaction', ...'Some thing you need log');
    ```
    + `type` is type or log
    + `location` is loaction logger you call.  
    
2. **Contact**
    ```javascript
    communicate.contact('type'); 
    ```
    + `type` is type you need return this object
    *Example*: If you want get output module you need 
                `communicate.contact('output');`
            and this return output object/class/...other

3. **send**
    ```javascript
        communication.send('accusive', data, 'key');
    ```
    + `accusive` is where data you need seed this.  
    + `data` is every think.  
    + `key` is name of key you want accusive get this.  
        *Example*: `communication.send('output', "<h1>Home</>", 'home');`
                Now in output, you have data with key: home and data is `<h1>Home</>`

4. **view-render**
    ```javascript
    - communicate.view-render(location, 'key');
    ```  
    + `location` is where you can innerHTML
        +`location` will use `document.querySelecter('location');`
    + Now let try render 'home' in to body:
        `communicate.view_render('body', 'home');`

5. **declare_action**
    ```javascript
    - communicate.declare_action('name-action', 'logic');
    ```

    + `name-action` is name you want call this
    + `logic` is a function have a action you want do this when action called
    *Example*: 

    ```javascript
        communicate.declare_action('viewHome', ()=>{
            alter('Home Page');
        });
    ```        
    - If you want use this action let read next syntax

6. **action**
    ```javascript
    - communicate.action(default);
    ```
    + `default` is boolen type, chose true if you want user default name(handle) to call function you declare or you can set this in avrible and call avrible name
    *Example*: `communicate.action(true);`
            now in local, you have `handle.viewHome()` function
        you can use this in config file witch event like onclick,...

7. **set_data_localStore**
    ```javascript
        communication.set_data_localStore(key, status);
        /*-----------*/
        communication.set_data_localStore('Read', true);
        // store_data = {Read : true};
    ```
    + `key` is name key data you want declare and set into local storage.
    + `status` is boolen type  or other this may be save you status or data.
    *Example*: `communication.set_data_localStore('Read', true);`
    - Now in local storage, you have data_storage object with key Read and value is true

8. **get_data_storage**
    ```javascript
        communication.get_data_storage(key);
        /*------*/
        communication.get_data_storage('Read'); // true
        communication.get_data_storage('something'); // false

    ```
    + `key` is name of key you declare befor
    + If you call key your don't declare befor, this key will be declare with false value and return
    
9. **request_data**
    ```javascript
        communicate.request_data(accusative, type_dataReques);
    ```
    + `accusative` is where you need get data (output, store).
    + `type_dataReques` is type of data you save , it is name key.
    
10. **unlogger**
    ```javascript
        communicate.unlogger(type, location, isLock);
        /*--------*/
        communicate.unlogger('log', 'output', true);
        //--> this will be lock all console have type log from output

        communicate.unlogger('log', 'output', false);
        //--> this will be unlock all console have type log from output

        communicate.unlogger('all', 'all', true);
        //-->This will be lock all logger from Core
    ```
    + `type` is type you want return in console
    + `location` is where you want block or unblock

11. **get_data_API**
    ```javascript
        await communicate.get_data_API(URL_SRC, type, keyName);
    ```
    + `URL_SRC` is url or src API you need request
    + `type` is type of data (json, txt, html, ...)
    + `keyName` is name key you want save data to store
    + You sould use async/await to sure get data done befor you config this
    

