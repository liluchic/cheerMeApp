<!--cheer me app 2.1 JavaScript-->
//linked to index.html


<!--*********-->
var description = new Array("Ruth", "Lea", "Orit", "Rony", "Luda");
var pictures = new Array(4);
var quates = new Array("Do it for the sake of doing, it's fun! mainly enjoy creating and programming in a community with girl-friends", "use stackoverflow.com", "If it has no deadline - it's just dead", "stuck? ask a friend next to you to listen", "It doesn't matter what you are interested in, games, animals, photography, cars, planes, fashion ext. You can invent an interesting aplication for every field. Code is like play dough in the hands of a programmer, it allows you to create almost anything");
var counter = 0;


function initialize(){
  // sets up the array with some startin values
  pictures[0] = new Image(50, 50);
  pictures[0].src = "img/ruth.jpg";
  pictures[1] = new Image(50, 50);
  pictures[1].src = "img/lea.jpg";
  pictures[2] = new Image(50, 50);
  pictures[2].src = "img/orit.jpg";
  pictures[3] = new Image(50, 50);
  pictures[3].src = "img/rony.jpg";
  pictures[4] = new Image(50, 50);
  pictures[4].src = "img/luda.jpg";

} // end initialize

function upDate(){
  //increments the counter and shows the next description and picture of leader
  counter++;
  if (counter > description.length){
    counter = 0;
  } // end if
  document.imgDisplay.src = pictures[counter].src;
  document.myForm.txtDescription.value = description[counter];
  document.myForm.txtQuates.innerHTML = quates[counter];
  if (quates[counter].length>50) {
	  document.myForm.txtQuates.rows = quates[counter].length / 50 + 1;
  }
  else {
	  document.myForm.txtQuates.rows = 1;
  } 
} // end upDate


<!--*********-->

// create extra checkboxes and eventlistener that can make this happen

     function addRow(tableID) {
 
            var table = document.getElementById(tableID);
 
            var rowCount = table.rows.length;
            if (rowCount == 32) { return; }
			var row = table.insertRow(rowCount);
 
 
 
            var cell1 = row.insertCell(0);
            cell1.innerHTML =  "lesson  " + (++rowCount);
        }
		
	

//girl goes up one step on click
let girlGoupOnestep = $(document).ready(function(){
	$("#addLesson").click(function(){
		$("#upbox").animate({left: '+=15', top: '-=15'}, 4000);}
		
	)});


