const w                   = 3700;
const h                   = 11300;
const padding             = .5;
const minBarThickness     = 2;
const textYesNo           = false;
const agencyPadding       = 20;
const dateformat          = d3.time.format("%b, %y");
const lhPadding           = 700;
let y_index               = 15;
let staffer_line_xy       = {};

const linearScale = d3.time.scale()
    .domain([new Date("2017-1-1"), new Date("2018-12-1")])
    .range([0, 2500]);

function gradeLevel( salary ) {
    if (salary[0] == salary[1]) {
        return "$"+salary[0]
    }
    else if (!salary[0] || !salary[0]) {
        return "no information on salary"
    }
    else {
        return "$"+salary[0] + " - " + "$"+salary[1]
    }

}

function handleMouseOut(d, i) {
    // Use D3 to select element, change color back to normal
    d3.select(this)
        .attr({fill: !d.start_date ? "#eaeaea" : "#ffccff"})
        .attr({height: 2});
}

function handleMouseOver(d, i) {
    d3.select(this)
        .attr({fill: "#ff00ff"})
        .attr({height: 2});

}