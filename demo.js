document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    
    let v = new Visible(".targetElement",function() {
        console.log("e work o");   
    },function() {
        console.log("e don comot");   
    });

    v.watch();

});