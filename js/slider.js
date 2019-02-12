var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

function convertRange( value, r1, r2 ) {
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

addEventListener("DOMContentLoaded", function() {
    shape = document.getElementsByTagName("svg")[0];
    shape.setAttribute("viewBox", `0 0 ${w + convertRange(70,[1,100],[20000,0])} ${h}`);
    output.innerHTML = convertRange(70,[1,100 ],[1,100]);
});

slider.oninput = function() {
    shape = document.getElementsByTagName("svg")[0];
    shape.setAttribute("viewBox", `0 0 ${w + convertRange(this.value,[1,100],[20000,0])} ${h}`);
    output.innerHTML = convertRange(this.value,[1,100 ],[1,100]);

    eventLine = document.getElementsByClassName("event_label");
    agencyLabel = document.getElementsByClassName("agency");
    for (node of eventLine) {
        node.style.fontSize = `${convertRange(this.value,[1,100],[70,25])}px`;
    }
    for (node of agencyLabel) {
        node.style.fontSize = `${convertRange(this.value,[1,100],[70,25])}px`;
    }
}
