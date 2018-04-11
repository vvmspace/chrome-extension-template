class CrossB{

    constructor(){
        this.runMessager();
        this.acts = [];
    }

    runMessager(){
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if(request.action){
                if (typeof this.acts[request.action] === 'function'){
                    this.acts[request.action](request.data);
                }
            }
            sendResponse(request);
        });
    }

    react(action, callback){
        this.acts[action] = callback;
    }

}