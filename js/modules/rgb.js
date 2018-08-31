class RGB {

    static rgb(text, color){
        chrome.browserAction.setBadgeText({
            text: text.toString()
        });
        chrome.browserAction.setBadgeBackgroundColor({
            color: color
        });
    }

    static red(text){
        RGB.rgb(text, 'red');
    }

    static green(text){
        RGB.rgb(text, 'green');
    }

    static blue(text){
        RGB.rgb(text, 'blue');
    }

}