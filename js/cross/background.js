class CrossB{

    constructor(){
        this.runMessager();
        this.acts = [];
    }

    runMessager(){
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if(request.action){
                if (typeof this.acts[request.action] === 'function'){
                    sendResponse(this.acts[request.action](request.data));
                }else{
                    sendResponse();
                }
            }else{
                sendResponse();
            }
        });
    }

    react(action, callback){
        this.acts[action] = callback;
    }

}