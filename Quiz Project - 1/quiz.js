
var array = [

	{
		question: "Which city is the capital of Germany?",
		right: 1,
		answers: [
					"Berlin",
					"Frankfurt",
					"Munic",
					"Cologne"
			]
	},

	{
		question: "Which city is the capital of Bulgaria?",
		right: 3,
		answers: [
					"Varna",
					"Plovdiv",
					"Sofia",
					"Burgas"
			]
	},

	{
		question: "Which city is the capital of England",
		right: 2,
		answers: [
					"Dublin",
					"London",
					"Portsmouth",
					"Manchester"
			]
	},

]



document.getElementById("q1").innerHTML = array[0].question;
for(var i=0;i<=3;i++){
document.getElementById("q1AnswerList").innerHTML += "<li>" + array[0].answers[i] + "</li>";
}

document.getElementById("q2").innerHTML = array[1].question;
for(var i=0;i<=3;i++){
document.getElementById("q2AnswerList").innerHTML += "<li>" + array[1].answers[i] + "</li>";
}

document.getElementById("q3").innerHTML = array[2].question;
for(var i=0;i<=3;i++){
document.getElementById("q3AnswerList").innerHTML += "<li>" + array[2].answers[i] + "</li>";
}


var answer = [];

function getAnswer(a,b,c){
	answer.push(a);
	answer.push(b);
	answer.push(c);
	//console.log(answer);
	compareAnswer(answer);
}

var anw = []

function compareAnswer(a){

	var right_count = 0;
	var false_count = 0;

for(var i = 0 ; i<3; i++){
	if(answer[i] == array[i].right){
			right_count++;
			console.log(i);
			anw.push(i+1);

		}
	else {
		 false_count++;
	}
}
    if(anw.length == 0) {
        document.getElementById("result").innerHTML = "No right answers" ;
    }
	else if(anw.length == 1){
	document.getElementById("result").innerHTML = "You have answered right only question N " +anw;
    }
    else {
    document.getElementById("result").innerHTML = "You have answered right " +right_count+ ". Your right answer is on questions " + anw;
    }
}

//console.log(array);
