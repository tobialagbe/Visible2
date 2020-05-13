
function Visible(selector,callback,callback2) {

    if (!document.querySelector(selector)) {
        throw "invalid selector";
    }

    this.target = document.querySelector(selector);
    this.callback = callback;
    this.callback2 = callback2;
    this.options = {
        root: null, // relative to document viewport 
        rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: 1.0 // visible amount of item shown in relation to root
    };

} 

Visible.prototype.watch = function(){

    var exec = this.callback;
    var exec2 = this.callback2;
    function onChange(changes, observer) {
        changes.forEach(change => {
            if (change.isIntersecting) {
                // your observer logic
                exec();
            }else{
                exec2();
            }
        });
    };
    
    let observer = new IntersectionObserver(onChange, this.options);
    observer.observe(this.target);


}













    

