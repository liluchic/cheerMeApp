/**
 * Created by liat and Rita on 4/17/2016.
 */

// so we will see the checkboxes according to the number of the lesson:

var data = {
    labels: [],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [0]
        }
    ]
};
var ctx = document.getElementById("myChart").getContext("2d");
//And for a Bar chart
var myDoughnutChart = new Chart(ctx).Bar(data,{
    animateScale: true,
    scaleOverride : true,
    scaleSteps : 1,
    scaleStepWidth : 32,
    scaleStartValue : 0
});
function addData() {
    var val = $(this).val();
    myDoughnutChart.addData([val], val);
    // Remove the first point so we dont just add values forever
    //myDoughnutChart.removeData();
}
$(document).ready(function() {
    $('#checkboxArea').append(
        $(document.createElement('input')).attr({
            id:    'myCheckbox1'
            ,name:  'myCheckbox1'
            ,value: 1
            ,type:  'checkbox'
        }).click(addData)
    );
    $('#checkboxArea').append(
        $(document.createElement('label')).attr({
            id:    'myCheckboxLabel1'
            ,for:   'myCheckbox1'
        }).text("lesson #1")
    );
    $('#checkboxArea').append($(document.createElement('br')));
    for (var i=2; i<33; i++){
        createCheckbox(i);
    }
    function createCheckbox(id) {
        $('#checkboxArea').append(
            $(document.createElement('input')).attr({
                id:    'myCheckbox' + id
                ,name:  'myCheckbox' + id
                ,value: id
                ,type:  'checkbox'

            }).click(addData)
        );
        $('#checkboxArea').append(
            $(document.createElement('label')).attr({
                id:    'myCheckboxLabel' + id
                ,for:   'myCheckbox' + id
            }).text("lesson #" + id)
        );
        $('#checkboxArea').append($(document.createElement('br')));
    }
});



    console.log(id);
console.log(orderedLessons);


// call the right cheer with the right lesson ending.
// var numberOfChecked = $('input:checkbox:checked').length;
