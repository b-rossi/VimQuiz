// Questions will be asked
const Questions = [{
	id: 0,
	q: "What are the preferred keys for basic movement?",
	a: [
		{ text: "w, a, s, d", isCorrect: false },
		{ text: "Arrow keys", isCorrect: false },
		{ text: "h, j, k, l", isCorrect: true },
		{ text: "Mouse", isCorrect: false }
	]},
	{
	id: 1,
	q: "What is the key combination for moving down 10 lines?",
	a: [
		{ text: "j10", isCorrect: false },
		{ text: "10G", isCorrect: false },
		{ text: "G10", isCorrect: false },
		{ text: "10j", isCorrect: true }
	]},
	{
	id: 2,
	q: "What key combination moves to start of the file?",
	a:[
		{ text: "0j", isCorrect: false },
		{ text: "ESC", isCorrect: false },
		{ text: "gg", isCorrect: true},
		{ text: "$", isCorrect: false }
	]},
	{
	id: 3,
	q: "How would one move forwards by a word?",
	a:[
		{ text: "f", isCorrect: false },
		{ text: "w", isCorrect: true },
		{ text: "}", isCorrect: false },
		{ text: "ge", isCorrect: false }
	]},
	{
	id: 4,
	q: "What is the key binding for centering the cursor?",
	a:[
		{ text: "zz", isCorrect: true },
		{ text: "jj", isCorrect: false },
		{ text: "a", isCorrect: false },
		{ text: "g", isCorrect: false }
	]},
	{
	id: 5,
	q: "How to enter insert mode?",
	a:[
		{ text: "Enter", isCorrect: false },
		{ text: "i", isCorrect: true },
		{ text: "w", isCorrect: false },
		{ text: "+", isCorrect: false }
	]},
	{
	id: 6,
	q: "How to delete a word and enter Insert mode?",
	a:[
		{ text: "qw", isCorrect: false },
		{ text: "cw", isCorrect: true },
		{ text: "dw", isCorrect: false },
		{ text: "r", isCorrect: false }
	]},
	{
	id: 7,
	q: "How to delete a line and enter Insert mode?",
	a:[
		{ text: "Del", isCorrect: false },
		{ text: "dd", isCorrect: false },
		{ text: "cc", isCorrect: true },
		{ text: "Vi", isCorrect: false }
	]},
	{
	id: 8,
	q: "What is the key for entering Visual mode?",
	a:[
		{ text: "v", isCorrect: true },
		{ text: "s", isCorrect: false },
		{ text: "Ctrl + v", isCorrect: false },
		{ text: "V", isCorrect: false }
	]},
	{
	id: 9,
	q: "What is the keybind for Visual line selection?",
	a:[
		{ text: "V", isCorrect: true },
		{ text: "W", isCorrect: false },
		{ text: "Ctrl + v", isCorrect: false },
		{ text: "v", isCorrect: false }
	]},
	{
	id: 10,
	q: "What is the keybind for Visual block selection?",
	a:[
		{ text: "v", isCorrect: false },
		{ text: "Shift + v", isCorrect: false },
		{ text: "V", isCorrect: false },
		{ text: "Ctrl + v", isCorrect: true }
	]},
	{
	id: 11,
	q: "After Selection in Visual mode, how to delete selected area?",
	a:[
		{ text: "q", isCorrect: false },
		{ text: "p", isCorrect: false },
		{ text: "d", isCorrect: true },
		{ text: "dd", isCorrect: false }
	]},
	{
	id: 12,
	q: "After Selection in Visual mode, how to copy selected area?",
	a:[
		{ text: "s", isCorrect: false },
		{ text: "y", isCorrect: true },
		{ text: "c", isCorrect: false },
		{ text: "g", isCorrect: false }
	]},
	{
	id: 13,
	q: "What is the keybind to delete a line?",
	a:[
		{ text: "qq", isCorrect: false },
		{ text: "cc", isCorrect: false },
		{ text: "pp", isCorrect: false },
		{ text: "dd", isCorrect: true }
	]},
	{
	id: 14,
	q: "How to paste deleted or copied text?",
	a:[
		{ text: "Ctrl + v", isCorrect: false },
		{ text: "p", isCorrect: true },
		{ text: "b", isCorrect: false },
		{ text: "i", isCorrect: false }
	]},
	{
	id: 15,
	q: "How to open a new file called \"foo\"?",
	a:[
		{ text: ":foo", isCorrect: false },
		{ text: "foo", isCorrect: false },
		{ text: ":e foo", isCorrect: true },
		{ text: ":open foo", isCorrect: true }
	]},
	{
	id: 16,
	q: "How to undo?",
	a:[
		{ text: "p", isCorrect: false },
		{ text: "u", isCorrect: true },
		{ text: "Ctrl + r", isCorrect: false },
		{ text: "g", isCorrect: false }
	]},
	{
	id: 17,
	q: "How to redo?",
	a:[
		{ text: "Ctrl + r", isCorrect: true },
		{ text: "Ctrl + u", isCorrect: false },
		{ text: "R", isCorrect: false},
		{ text: "r", isCorrect: false }
	]},
	{
	id: 18,
	q: "How would you change \"foo\" to \"bar\" troughout the whole file?",
	a:[
		{ text: "/bar/foo", isCorrect: false },
		{ text: "/foo/bar", isCorrect: false },
		{ text: ":%s/bar/foo/g", isCorrect: false},
		{ text: ":%s/foo/bar/g", isCorrect: true }
	]},
	{
	id: 19,
	q: "How to quit Vim?",
	a:[
		{ text: ":wq", isCorrect: true },
		{ text: ":q!", isCorrect: true },
		{ text: ":q", isCorrect: true },
		{ text: "It is not possible", isCorrect: false }
	]}
]
  
// Iterate
function iterate(id) {
	// Getting the result display section
	var result = document.getElementsByClassName("result");
	result[0].innerText = "";
	
	// Getting the question
	const question = document.getElementById("question");
	
	
	// Setting the question text
	question.innerText = Questions[id].q;
	
	// Getting the options
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');
  
	// Set colors
	op1.style.backgroundColor = "lightskyblue";
	op2.style.backgroundColor = "lightskyblue";
	op3.style.backgroundColor = "lightskyblue";
	op4.style.backgroundColor = "lightskyblue";
	
	
	// Providing option text 
	op1.innerText = Questions[id].a[0].text;
	op2.innerText = Questions[id].a[1].text;
	op3.innerText = Questions[id].a[2].text;
	op4.innerText = Questions[id].a[3].text;
	
	// Providing the true or false value to the options
	op1.value = Questions[id].a[0].isCorrect;
	op2.value = Questions[id].a[1].isCorrect;
	op3.value = Questions[id].a[2].isCorrect;
	op4.value = Questions[id].a[3].isCorrect;
	
	var selected = "";
	var evaluate_flag = 0;


	// Show selection for op1
	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "lightgoldenrodyellow";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op1.value;
	})
  
	// Show selection for op2
	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightgoldenrodyellow";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op2.value;
	})
	
	// Show selection for op3
	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightgoldenrodyellow";
		op4.style.backgroundColor = "lightskyblue";
		selected = op3.value;
	})
	
	// Show selection for op4
	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightgoldenrodyellow";
		selected = op4.value;
	})
	
	// Grabbing the evaluate button
	const evaluate = document.getElementsByClassName("evaluate")[0];
	evaluate.style.visibility = 'visible';
	next.style.visibility = 'hidden';
	
	
	// Evaluate method
	resultFlag = 0;
	evaluate.addEventListener("click", () => {
		if (selected == "true") {
			result[0].innerHTML = "True";
			result[0].style.color = "green";
			resultFlag = 1;
		} else {
			result[0].innerHTML = "False";
			result[0].style.color = "red";
			resultFlag = 0;
		}
		evaluate.style.visibility = 'hidden';
		next.style.visibility = 'visible';
	})
}

function finish(points) {
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');
	const evaluate = document.getElementsByClassName("evaluate")[0];
	
	next.style.visibility = 'hidden';
	evaluate.style.visibility = 'hidden';
	
	op1.style.visibility = 'hidden';
	op2.style.visibility = 'hidden';
	op3.style.visibility = 'hidden';
	op4.style.visibility = 'hidden';
	
	var maximum_points = quizLength + 1;
	const question = document.getElementById("question");
	question.innerText = "Congratulations!\nYou got " + points + "\\" + maximum_points + " points.";
}

const quizLength = Questions.length - 1;
var points = 0;
var resultFlag = 0;
var id = 0;

console.log("Start");

// Next button and method
const next = document.getElementsByClassName('next')[0];

if (id == 0) {
	iterate(id);
}  
  
next.addEventListener("click", () => {
	if (resultFlag == 1) {
		points++;
	}
	if (id < quizLength) {
		// If result_flag is 1 add points
		id++;
		iterate(id);
		console.log("Question: " + id);
		console.log("Points: " + points);
	} else {
		console.log("End");
		console.log("Points: " + points);
		finish(points);
	}
})

const restart = document.getElementsByClassName('restart')[0];

restart.addEventListener("click", () => {
	points = 0;
	resultFlag = 0;
	id = 0;
	
	op1.style.visibility = 'visible';
	op2.style.visibility = 'visible';
	op3.style.visibility = 'visible';
	op4.style.visibility = 'visible';

	iterate(id);
})
