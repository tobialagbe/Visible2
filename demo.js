document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    
    let v = new Visible(".targetElement",function() {
        console.log("It's visible!");   
    },function() {
        console.log("naah..it's gone");   
    });

    v.watch();

});