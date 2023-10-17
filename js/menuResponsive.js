const iframe = document.getElementById("menu");
// we will assign this value once the iframe is ready
let iWindow = null;;

// Once the iframe is done loading, assign its window object to the variable we prepared earlier
iframe.addEventListener("load", () => {
    iWindow = iframe.contentWindow;
    iWindow.postMessage(window.innerWidth);
});

window.addEventListener("message", (event) => {
    // extract the data from the message event
    const { data } = event;
    let active = JSON.stringify(data, null, 2);
            
    if (active == "true") {
        iframe.style = "z-index: 11";
    }
    else{
        iframe.style = "z-index: 9";
    }
});