const w                   = 3700;
const h                   = 11300;
const padding             = .5;
const minBarThickness     = 2;
const agencyPadding       = 20;
const lhPadding           = 700;
let y_index               = 15;
let career_history_text   = 38.6364;
let career_history_text_spacing = 5;
// let staffer_line_xy       = {};


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

function truncate(string, length) {
    if (string.length > length)
        return string.substring(0,length)+' [...]';
    else
        return string;
};
