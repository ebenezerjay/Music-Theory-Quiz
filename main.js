var answerInput = document.querySelector('#answer-input');
var submitButton = document.querySelector('#submit-button');
var h2outcome = document.querySelector('#h2-outcome');
var questionHeading= document.querySelector('#h2-question');
var heading2Message = document.querySelector('#h2Congrats');
// var answerInteger = parseInt(answerInput.value);
var keySpan = document.querySelector('#key-span');
var keyParagraph = document.querySelector('#key-paragraph');
var h3KeyHeading = document.querySelector('#h3-key-heading');
var keyList = document.querySelector('#key-list');
var counter = 0;
var keyListItem1 = document.querySelector('#li-1');
var keyListItem2 = document.querySelector('#li-2');
var keyListItem3 = document.querySelector('#li-3');
var keyListItem4 = document.querySelector('#li-4');
var keyListItem5 = document.querySelector('#li-5');
var keyListItem6 = document.querySelector('#li-6');
var keyListItem7 = document.querySelector('#li-7');
var keyListItem8 = document.querySelector('#li-8');



// var testArray = JSON.parse(localStorage.getItem('pTest')) || [];

// when user clicks submit answer button
submitButton.addEventListener('click', onSubmitClick);

function onSubmitClick(e) {
	if (keySpan.innerText === 'C major') {
		question1();
	} else if (keySpan.innerText === 'G major') {
		question2();
	} else if (keySpan.innerText === 'D major') {
		question3();
	}
	e.preventDefault();
}
// True/False display on dom when 1st ? aswered right or wrong
function question1() {
	var answerInteger = parseInt(answerInput.value);
	 if (answerInteger === 0) {
		h2outcome.innerText = 'True';
		question2prep();
	} else  {
		alert("You can't always get what you want");
		h2outcome.innerText = 'False';
	} 
}

// when 1st answer is correct the inner html of key list and paragraph change
function question2prep() {
	keySpan.innerText = "G major";
	keyParagraph.innerHTML = `
			<span id="key-span" class="key-span">G major</span>
			G major has one sharp. Find the G's on this<a href="Guitar-Fretboard.png" target="_blank">Guitar Fretboard</a> also see what note is directly before each G.
	` ;
	questionHeading.innerText = "How many sharps or flats are in G major?";
	h3KeyHeading.innerText = "Notes in G major";
	keyListItem1.innerText = 'G';
	keyListItem2.innerText = 'A';
	keyListItem3.innerText = 'B';
	keyListItem4.innerText = 'C';
	keyListItem5.innerText = 'D';
	keyListItem6.innerText = 'E';
	keyListItem7.innerText = 'F#';
	keyListItem8.innerText = 'G';
}

// True/False display on dom when 2nd ? aswered right or wrong
function question2() {
	var answerInteger = parseInt(answerInput.value);
	if (answerInteger === 1) {
		h2outcome.innerText = 'True';
		question3prep();
	} else {
		alert("You can't always get what you want");
		h2outcome.innerText = 'False';
	}
}

function question3prep() {
	keySpan.innerText = "D major";
	keyParagraph.innerHTML = `
			<span id="key-span" class="key-span">D major</span>
			D major has two sharps. Find the D's on this<a href="Guitar-Fretboard.png" target="_blank">Guitar Fretboard</a> also see what note is directly before each D.
	` ;
	questionHeading.innerText = "How many sharps or flats are in D major?";
	h3KeyHeading.innerText = "Notes in D major";
	keyListItem1.innerText = 'D';
	keyListItem2.innerText = 'E';
	keyListItem3.innerText = 'F#';
	keyListItem4.innerText = 'G';
	keyListItem5.innerText = 'A';
	keyListItem6.innerText = 'B';
	keyListItem7.innerText = 'C#';
	keyListItem8.innerText = 'D';
}

function question3() {
	var answerInteger = parseInt(answerInput.value);
	if (answerInteger === 2) {
		h2outcome.innerText = 'True';
	} else {
		alert("You can't always get what you want");
		h2outcome.innerText = 'False';
	}
}