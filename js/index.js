function typed(obj){
    this.el=document.getElementById(obj.id);
    this.strings=obj.strings;
    this.typeSpeed=obj.typeSpeed;
    this.quench=0;
    this.completedWord=0;

    this.timeout=setInterval(function (typed) {
            typed.el.innerText=typed.getNextTxt()
    },this.typeSpeed,this);
    this.getNextTxt=function () {
        if(this.strings[this.quench]){
            var term = this.strings[this.quench];
            if(term.length>=this.completedWord){
                return term.substr(0,this.completedWord++);
            }
        }
        this.completedWord=0;
        if(this.strings.length > this.quench){
            this.quench++;
        }else{
            this.quench=0;
        }
        return this.getNextTxt();
    }
}
new typed({
    id:"dynamic-content",
    strings:["HTML","CSS","JavaScript","PHP"],
    typeSpeed:200,
})
