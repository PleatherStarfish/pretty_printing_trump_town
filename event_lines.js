// ====== EVENTS LINES ======

const inauguration = linearScale(new Date("2017-1-20")) + lhPadding;
const flynn = linearScale(new Date("2017-2-13")) + lhPadding;
const comey = linearScale(new Date("2017-5-9")) + lhPadding;
const bannon = linearScale(new Date("2017-8-18")) + lhPadding;
const tillerson = linearScale(new Date("2018-3-31")) + lhPadding;
const manafort = linearScale(new Date("2017-10-30")) + lhPadding;

// Inauguration
svgSelection.append("text")
    .attr("x", inauguration - 5)
    .attr("y", 530)
    .attr('id', "label")
    .attr("transform", "rotate(-90, "+ (inauguration - 5) + ", 530)")
    .text("Inauguration of Donald Trump (Jan. 20, 2017)");
svgSelection.append("line")
    .style("stroke-dasharray", ("10, 10"))
    .attr("x1", inauguration)
    .attr("y1", 25)
    .attr("x2", inauguration)
    .attr("y2", 11300);

// Mike Flynn
svgSelection.append("text")
    .attr("x", flynn - 5)
    .attr("y", 695)
    .attr('id', "label")
    .attr("transform", "rotate(-90, "+ (flynn - 5) + ", 695)")
    .text("National Security Advisor Mike Flynn resigns (Feb. 13, 2017)");
svgSelection.append("line")          // attach a line
    .style("stroke-dasharray", ("10, 10"))
    .attr("x1", flynn)
    .attr("y1", 25)
    .attr("x2", flynn)
    .attr("y2", 11300);

svgSelection.append("text")
    .attr("x", comey - 5)
    .attr("y", 675)
    .attr('id', "label")
    .attr("transform", "rotate(-90, "+ (comey - 5) + ", 675)")
    .text("Trump dismisses FBI director James Comey (May 9, 2017)");
svgSelection.append("line")
    .style("stroke-dasharray", ("10, 10"))
    .attr("x1", comey)
    .attr("y1", 25)
    .attr("x2", comey)
    .attr("y2", 11300);

svgSelection.append("text")
    .attr("x", bannon - 5)
    .attr("y", 555)
    .attr('id', "label")
    .attr("transform", "rotate(-90, "+ (bannon - 5) + ", 555)")
    .text("Trump dismisses Steve Bannon (Aug. 18, 2017)");
svgSelection.append("line")
    .style("stroke-dasharray", ("10, 10"))
    .attr("x1", bannon)
    .attr("y1", 25)
    .attr("x2", bannon)
    .attr("y2", 11300);

svgSelection.append("text")
    .attr("x", manafort - 5)
    .attr("y", 858)
    .attr('id', "label")
    .attr("transform", "rotate(-90, "+ (manafort - 5) + ", 858)")
    .text("Paul Manafort arrested for conspiracy against United States (Oct. 30, 2017)");
svgSelection.append("line")
    .style("stroke-dasharray", ("10, 10"))
    .attr("x1", manafort)
    .attr("y1", 25)
    .attr("x2", manafort)
    .attr("y2", 11300);

svgSelection.append("text")
    .attr("x", tillerson - 5)
    .attr("y", 540)
    .attr('id', "label")
    .attr("transform", "rotate(-90, "+ (tillerson - 5) + ", 540)")
    .text("Trump dismisses Rex Tillerson (Mar. 31, 2018)");
svgSelection.append("line")
    .style("stroke-dasharray", ("10, 10"))
    .attr("x1", tillerson)
    .attr("y1", 25)
    .attr("x2", tillerson)
    .attr("y2", 11300);