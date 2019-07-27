let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

function convertRange( value, r1, r2 ) {
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

addEventListener("DOMContentLoaded", function() {
    let shape = document.getElementsByTagName("svg")[0];
    shape.setAttribute("viewBox", `0 0 ${w + convertRange(70,[1,100],[20000,0])} ${h}`);
    output.innerHTML = convertRange(70,[1,100 ],[1,100]);
});

slider.oninput = function() {
    shape = document.getElementsByTagName("svg")[0];
    shape.setAttribute("viewBox", `0 0 ${w + convertRange(this.value,[1,100],[20000,0])} ${h}`);
    output.innerHTML = convertRange(this.value,[1,100 ],[1,100]);

    let eventLine = document.getElementsByClassName("event_label");
    let agencyLabel = document.getElementsByClassName("agency");
    let careerHist = document.getElementsByClassName("career_history");

    for (node of eventLine) {
        node.style.fontSize = `${convertRange(this.value,[1,100],[70,25])}px`;
    }
    for (node of agencyLabel) {
        node.style.fontSize = `${convertRange(this.value,[1,100],[70,25])}px`;
    }
    career_history_text         = convertRange(this.value,[1,100],[70,25]);
    career_history_text_spacing = convertRange(this.value,[1,100],[10,3]);
};
