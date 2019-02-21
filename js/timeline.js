let stafferLinesLocationStart = {};

function barCluster(agency) {

    // Create a new custem D3 node called "g"
    let agency_cluster = svgSelection.selectAll(null)
        .data([agency])
        .enter()
        .append("g");

    // Write the agencies name to the right of the timeline
    agency_cluster.append("text")
        .attr("x", 2400 + lhPadding)
        .attr("y", y_index * (minBarThickness + padding) + 5)
        .attr('class', "agency")
        .text((d) => agency.agency_name);

    const agencyLineLength = y_index * (minBarThickness + padding);

    for (let position in agency["positions"]) {

        let positions_cluster = svgSelection.selectAll(null)
            .data([position])
            .enter()
            .append("g");

        for (let person in agency["positions"][position]){

            const one_person = agency["positions"][position][person];
            // staffer_line_xy[one_person.staffer_id] = y_index;

            const start_x = linearScale(one_person.start_date ? new Date(one_person.start_date) : new Date("2017-1-19"));
            const end_x = linearScale(one_person.end_date ? new Date(one_person.end_date) : new Date("2018-10-15"));

            let bars = positions_cluster.selectAll(null)
                .data([one_person])
                .enter()
                .append("g");

            stafferLinesLocationStart[one_person.staffer_id] = [(start_x + lhPadding), (y_index * (minBarThickness + padding))];

            bars.append("a")
                .attr("xlink:href", function(d) {return d.linkedin_url})
                .append("rect")
                .attr("x", start_x + lhPadding)
                .attr("y", y_index * (minBarThickness + padding))
                .attr("height", minBarThickness)
                .attr("width", end_x - start_x)
                .attr("fill", (d, i) => d.staffer_id == 1032 ?
                    "#ff00ff"
                    :
                    start_x == linearScale(new Date("2017-1-19")) ? "#eaeaea" : "#ffccff"
                )
                .on("mouseover", handleMouseOver)
                .on("mouseout", handleMouseOut);

            bars.on("mouseover", (d, i) =>

                {tooltip.html
                ("<div class=tip><strong><span id=name>" + d.name + "</span></strong><br>"
                    + position + " (" + agency["agency_name"] + ") " + "<br><br>" + gradeLevel(d.grade_level) + "<br><br>" + (d.start_date ? d.start_date : "unknown") + " - " + (d.end_date ? d.end_date : "present") + "<br><br>" +
                    d.linkedin_url + "</div>"
                );

                    tooltip.style("visibility", "visible")
                        .transition()
                        .delay(0)
                        .duration(400)
                        .style("opacity", 0.7);

                    // A list to hold the career history and location of one staffer as it's displayed
                    const stafferCareerHistory = [];

                    // Add each company the moused-over person has previously worked for on left margin
                    for (let job in staffer_orgs[`${one_person.staffer_id}`]) {
                        const yLocation = stafferLinesLocationStart[`${d.staffer_id}`][1] + 0 + ((job + 1) * career_history_text_spacing);
                        const orgId = `${staffer_orgs[`${one_person.staffer_id}`][job].organization_id}`
                        const orgName = `${staffer_orgs[`${one_person.staffer_id}`][job].organization_name}`
                        svgSelection.append("text")
                            .attr("x", 650)
                            .attr("y", yLocation)
                            .attr("text-anchor", "end")
                            .attr('class', "career_history")
                            .attr('id', "one_career_history")
                            .style("font-size", career_history_text)
                            .html(truncate(orgName, 28));

                        stafferCareerHistory.push({['orgId']: orgId, ['yLocation']: yLocation});
                    }

                    for (let company of stafferCareerHistory) {
                        for (staffer of organzation_ids[company.orgId]) {
                            svgSelection.append("line")
                                .attr('class', "career_history_lines")
                                .attr("x1", 655)
                                .attr("y1", company.yLocation)
                                .attr("x2", stafferLinesLocationStart[staffer.staffer_id][0])
                                .attr("y2", stafferLinesLocationStart[staffer.staffer_id][1]);
                        }
                    }
                }
            )
                .on("mousemove", (d, i) => {
                    tooltip
                        .style("top", (event.pageY-10)+"px")
                        .style("left",(event.pageX+10)+"px");
                })

                .on("mouseout", (d, i) => {
                        tooltip
                            .style("visibility", "hidden")
                            .transition()
                            .delay(0)
                            .duration(300)
                            .style("opacity", 0);

                    svgSelection.selectAll(".career_history").remove();
                    svgSelection.selectAll(".career_history_lines").remove();
                    }
                );

            y_index += 1;
        }
        y_index += 1;
    }
    svgSelection.append("line")
        .attr('class', 'agency_lines')
        .attr("x1", 2380 + lhPadding) // vertical position on x-axis
        .attr("y1", agencyLineLength - 15)
        .attr("x2", 2380 + lhPadding)
        .attr("y2", y_index * (minBarThickness + padding) + 15);

    y_index += agencyPadding;
}