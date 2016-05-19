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
  //maybe this row needs to change..?
	document.getElementById("leaderAppear").innerHTML = rand.firstName + " " + rand.lastName + " " + rand.quate + " " + rand.img;
}
<!--*********-->
var description = new Array("blank", "ruth", "lea", "orit", "rony", "luda");
var pictures = new Array(5);
var quates = new Array("blank", "ruthsays", "leasay", "oritsay", "ronysay", "ludasay");
var counter = 0;


function initialize(){
  // sets up the array with some startin values
  // Andy Harris
  pictures[0] = new Image(50, 50);
  pictures[0].src = "blank.gif";
  pictures[1] = new Image(50, 50);
  pictures[1].src = "img/ruth.jpg";
  pictures[2] = new Image(50, 50);
  pictures[2].src = "img/lea.jpg";
  pictures[3] = new Image(50, 50);
  pictures[3].src = "img/orit.jpg";
  pictures[4] = new Image(50, 50);
  pictures[4].src = "img/rony.jpg";
  pictures[5] = new Image(50, 50);
  pictures[5].src = "img/luda.jpg";

} // end initialize

function upDate(){
  //increments the counter and shows the next description
  counter++;
  if (counter > description.length){
    counter = 0;
  } // end if
  document.imgDisplay.src = pictures[counter].src;
  document.myForm.txtDescription.value = description[counter];
  document.myForm.txtQuates.value = quates[counter];
} // end upDate


<!--*********-->

// 1. create extra checkboxes and eventlistener that can make this happen

var nextCheckbox = $(document).ready(function(){
  $("document").createElement('input').attr({
    id: 'lesson#' + lessonId,
    name: 'lesson#' + lessoName,
    value: 1,
    type: 'checkbox'

  });
});

//checkbox[i].click =+ i++
//4. event: when checkbox clicked  -
var changeLessonName = function() {
    for(i = 1; i < 33; i++) {
        lessoName += input.name[i] + "<br>";
        lessonId += input.id[i] + "<br>";
        lessonVal += input.value[i] + "<br>";
    } };
console.log(changeLessonName());

// 2. CHECK IF CHECKBOX IS CHECKED
// 3. IF IT IS - change the lessons name and id of the newly created checkbox
var isItChecked = document.getElementById("lesson#").checked;
if (isItChecked === true) {
    changeLessonName(); }
console.log(isItChecked);
// 3. when checkbox is clicked - next checkbox appears:
document.getElementById("lesson#1").addEventListener("click", nextCheckbox);


// we want to push() all nextCheckboxes that are created into an array:
var checkboxArray = [];
var bb = checkboxArray.push(nextCheckbox);
console.log(bb);
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
