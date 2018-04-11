
class CrossC {
    constructor(){

    }

    act(action, data, callback = () => {}){
        chrome.runtime.sendMessage({action: action, data: data}, (response) => {
           callback(response);
        });
    }
}