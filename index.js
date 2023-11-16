(function(){
	'use strict';
	const questions = document.querySelectorAll('.faq-container .question');
	questions.forEach(function(question){
		console.log(question);
		question.addEventListener('click', function(){
			const parentelement = question.parentElement;
			const parentelementanswer = parentelement.querySelector('p');
			console.log(parentelementanswer);
			if(parentelementanswer.classList.contains('answer-show')){
				parentelementanswer.classList.remove('answer-show');
			}
			else{
				parentelementanswer.classList.add('answer-show');
			}
		});
	});
	window.addEventListener('scroll', fixNavbar);
	function fixNavbar(){
		const navHeader = document.querySelector('header');
		console.log(navHeader);
		if(window.pageYOffset >= 140){
			if (!(navHeader.classList.contains('header-fixed'))) {
				navHeader.classList.add('header-fixed');
			}
		}
		else{
			if (navHeader.classList.contains('header-fixed')) {
				navHeader.classList.remove('header-fixed');
			}
		}
	}
})();