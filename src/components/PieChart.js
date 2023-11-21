import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import keys from '../assets/19keys-three.jpeg'

const PieChart = () => {
  const svgRef = useRef();

  const dataset = [
    { value: 100, year: 2020 },
    { value: 250, year: 2021 },
    { value: 80, year: 2019 },
    { value: 120, year: 2018 },
    { value: 90, year: 2017 },
    { value: 110, year: 2016 },
    { value: 95, year: 2015 },
    { value: 105, year: 2014 }
  ];
  

useEffect(() => {
  const w = 620;
  const h = 500;
  const startAngle = 0;
  const endAngle = 4 * Math.PI;
  const stroke = 5;
  const innerRadius = h/4;
  const outerRadius = h/2 - stroke;

  
  // const divNode = d3.select("body").node();
  //Create SVG
  const svg = d3.select(svgRef.current)
  .attr('width', w)
  .attr('height', h);

  //Create PIE Data converter
  const pie = d3.pie()
    .value(d => d.value)
    .startAngle(startAngle)
    .endAngle(endAngle);

  //Create Arc for
  const arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)

  const cScale = d3.scaleOrdinal(d3.schemeCategory10);

  // Defining the patters for custom bg
  svg.append("defs")
   .append("pattern")
   .attr("id", "bgImage")
   .attr("x", "0")
   .attr("y", "0")
   .attr("height", "100%")
   .attr("width", "100%")
   .attr("viewBox", "0 0 1 1")
   .append("image")
   .attr("x", "0")
   .attr("y", "0")
   .attr("height", "1")
   .attr("width", "1")
   .attr("preserveAspectRatio", "none")
   .attr("xlink:href", keys);


  const center = svg.append('g')
    .attr('transform', `translate(${h/2}, ${h/2})`)
  
    const centerSvgPadding = 5; // Adjust this value for more or less padding
 
    const centerSvg = center.append('circle')
    .attr('fill', "url(#bgImage)")
    .attr('r', outerRadius - innerRadius)
    .attr('stroke', '#6c757d')
.attr('stroke-width', '1.5');
 
  
  const text = center.append('text')
    .attr('text-anchor','middle')
    .attr('transform', `translate(0, 10)`)
    .attr('font-size',"1.5rem")
    .attr('fill', '#fff')
    .attr('id', "mainText")
    // .html("19Keys");
  
  const arcs = svg
    .selectAll('g.arc')
    .data(pie(dataset))
    .join('g')
      .classed('arc', true)
      .attr('transform', `translate(${h/2}, ${h/2})`);
  
  arcs.append('path')
    // .attr('fill', (d, i) => cScale(i + 1))
    .attr("fill", "#e9ecef")
    .attr("stroke", "black")
    .attr("stroke-width", "1.5")
    .attr('d', arc)
    .on("mousemove",handleMouseOver)
    .on("mouseout", handleMouseOut)
    .append('title')    // Alt-text for the pie slice
      .text(d => d.data.name);
      
// Append text labels for each arc slice
arcs.append('text')
  .attr('transform', d => `translate(${arc.centroid(d)})`) // Position the text at the centroid of the arc
  .attr('text-anchor', 'middle')
  .attr('alignment-baseline', 'middle')
  .attr('font-size', '10px') // Adjust font size as needed
  .attr('fill', 'black')     // Color of the text
  .text(d => d.data.year);   // Set the text content to the year from the dataset
      

  function handleMouseOver(d, i) {
    console.log(d);
      d3.select(this)
        .attr("stroke", "black")
        .attr("stroke-width",stroke);
      d3.select(this)
        .transition()
        .duration(500)
        .attr('transform',GetTransform);
      d3.select('#mainText')
        .html(`${d.target.__data__.data.name} ${d.target.__data__.data.value}%`);
  }

  function GetTransform(d){
    var dist = 1;
    d.midAngle = ((d.endAngle - d.startAngle)/2) + d.startAngle;
    var x = Math.sin(d.midAngle) * dist;
    var y = Math.cos(d.midAngle) * dist;
    return 'translate(' + x + ',' + y + ')';
  }
  
  function handleMouseOut(d,i){
    d3.select(this)
      .attr("stroke-width","0px");
    d3.select(this)
      .transition()
      .duration(500)
      .attr('transform','translate(0,0)');
    
      d3.select('#mainText')
        // .html("19keys");
  }
  
 
  // ... (Rest of the D3 code to generate the pie chart)

}, [dataset]); // Re-run the effect if the dataset changes



  return <svg ref={svgRef} />;
};

export default PieChart;