<!--cheer me app 2.1 JavaScript-->
//linked to index.html

// leaders constructor:
function leader(first, last, quate, img) {
    this.firstName = first;
    this.lastName = last;
    this.quate = quate;
    this.img = img;
}
// creating new leaders with our constructor
var Orit = new leader("Orit", "Ophir", "'If it doesn't have a deadline - it's just dead'", "orit.jpg");
var Ruth = new leader("Ruth", "Polachek", "'blablabla'", "ruth.jpg");
var Luda = new leader("Luda", "Fux", "'blbabla'", "luda.jpg");

//get random leader from array.

GetLeaderFN = function() {
	var leaders = [Orit, Ruth, Luda];
	var arrSize = leaders.length-1;
	var rand = leaders[Math.round(Math.random() * arrSize)];
	console.log(rand);
	document.getElementById("leaderAppear").innerHTML = rand.firstName + rand.lastName + rand.quate + rand.img;
	
}
// 1. create extra checkboxes
var nextCheckbox =
    $(document.createElement('input')).attr({
        id: 'lesson#' + lessonId,
        name: 'lesson#' + lessoName,
        value: 1,
        type: 'checkbox'
    });

// 2. change the lessons name and id of the new checkbox (which creates more checkboxes~!)
var isItChecked = document.getElementById("lesson#1").checked;
if (isItChecked === true) {
    changeLessonName(); }

// 3. when checkbox is clicked - next checkbox appears:
document.getElementById("lesson1").addEventListener("click", nextCheckbox);
checkbox[i].click =+ i++
//4. event: when checkbox clicked  -
    var changeLessonName = function() {
        for(i = 1; i < 33; i++) {
        lessoName += input.name[i] + "<br>";
        lessonId += input.id[i] + "<br>";
        lessonVal += input.value[i] + "<br>";
    } };
console.log(changeLessonName);
// $(document).ready(

//the addCheckbox function:
/*
    function addCheckBox() {
    var val = $(this).val();
    nextCheckbox.addEventListener(click, addCheckBox);
    $("checkbox").val(function([val], val))
    $(checkbox).click(function () {
        addCheckbox([val], val);
    })*/



// get the woman's picture to go up the stairs. (accordind to each step)

var goUp = function(){
	 $("#upbox").animate({left: '+=300', bottom: '+=300'}, 4000);};


//image appears with quate
// var rand = Math.floor(Math.random()* $('.leaders').length); console.log(rand);
/* 
 1. RANDOM  between 0- leaders.length
 2. var person = $(leaders[rand]);
 3. call methode - person.fadein(slow)
 */