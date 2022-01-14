// // const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json("samples.json").then(function(data){
//     console.log(data);
// });

// //extract washing frequency data
// var washingFreq = d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);// in descending order

// var filteredWfreq = wfreq.filter(element => element!= null);//filter out null values
//     console.log(filteredWfreq);
// });

// //use object.entries() to get keys and values, and forEach to access each element of those pairs
// d3.json("samples.json").then(function(data){
//     let firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) => {console.log(key + ': '+ value);});
// });

// //update page upon user input
// //listener for dropdown selection
// d3.selectAll("body").on("change", updatePage)

// function updatePage() {
//     var dropdownMenu = d3.selectAll("#selectOption").node();
//     var dropdownMenuID = dropdownMenu.id;
//     var selectedOption = dropdownMenu.value;
  
//     console.log(dropdownMenuID);
//     console.log(selectedOption);
//     console.log(d3.selectAll("#menu").node().id);
// }

function init(){
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
          selector
            .append("option")
            .text(sample)
            .property("value", sample);
        });
    })
    
}
init();
//dropdown option changed func
function optionChanged(newSample) {
    //function calls to build demographic data in field
    buildMetadata(newSample);
    //buildCharts(newSample);
}

//build metadata
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text(result.location);
    });
  }