class BG {

    constructor(){
        this.pair = 'kick_rur';
        this.url = 'https://yobit.net/api/2/' + this.pair + '/ticker';
        this.head = 'ticker';
        this.param = 'last';
        this.delay = 5000;
        this.last = 0;
    }

    tick(){
        $.getJSON(this.url, (data) => {
            let last = data[this.head][this.param];
            if(last !== this.last){
                if (last > this.last){
                    RGB.green(last);
                } else {
                    RGB.red(last);
                }
                this.last = last;
            }
        });
    }

    initTicker(){
        setInterval(() => {this.tick()}, this.delay);
    }

    static init(){

        let bg = new BG();

        bg.initTicker();

    }
}

$(function () {
   BG.init();
});