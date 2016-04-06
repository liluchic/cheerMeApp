<!--cheer me app 2.1 JavaScript-->
//linked to index.html

// leaders constructor:
function leader(first, last, quate, img) {
    this.firstName = first;
    this.lastName = last;
    this.quate = quate;
    this.img = img;
};
// creating new leaders with our constructor
var orit = new leader("Orit", "Ophir", "'If it doesn't have a deadline - it's just dead'", "orit.jpg");
var ruth = new leader("Ruth", "Polachek", "'blablabla'", "ruth.jpg");
var luda = new leader("Luda", "Fux", "'blbabla'", "luda.jpg");

//get random leader from array.

GetLeaderFN = function() {
	var leaders = [orit, ruth, luda];
	var arrSize = leaders.length-1;
	var rand = leaders[Math.round(Math.random() * arrSize)];
	console.log(rand);
	document.getElementById("leaderAppear").innerHTML = rand.firstName + rand.lastName + rand.quate + rand.img;
	
};



//image appears with quate
// var rand = Math.floor(Math.random()* $('.leaders').length); console.log(rand);
/* 
1. RANDOM  between 0- leaders.length
2. var person = $(leaders[rand]);
3. call methode - person.fadein(slow)
*/