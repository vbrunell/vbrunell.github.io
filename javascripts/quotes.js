	var Quotation=new Array()

	Quotation[0] = "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors. - Leon Bambrick -";
	Quotation[1] = "Computers are useless.  They can only give you answers.  - Pablo Picasso -";
	Quotation[2] = "The question of whether computers can think is like the question of whether submarines can swim. - Edsger Dijkstra -";
	Quotation[3] = "Never trust a computer you can’t throw out a window. - Steve Wozniak -";
	Quotation[4] = "Any fool can use a computer.  Many do. - Ted Nelson -";
	Quotation[5] = "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. - Seymour Cray -";
	Quotation[6] = "To iterate is human, to recurse divine. - L. Peter Deutsch -";
	Quotation[7] = "Computer language design is just like a stroll in the park.  Jurassic Park, that is. - Larry Wall -";
	Quotation[8] = "In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg. - Bjarne Stroustrup -";
	Quotation[9] = "If debugging is the process of removing bugs, then programming must be the process of putting them in. - Edsger Dijkstra -";
	Quotation[10] = "There are two ways to write error-free programs; only the third one works. - Alan J. Perlis -";
	Quotation[11] = "To err is human, but to really foul things up you need a computer. - Paul Ehrlich -";
	Quotation[12] = "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else. - Eagleson’s Law -";
	Quotation[13] = "Any problem in computer science can be solved with another level of indirection. - David Wheeler -";
	Quotation[14] = "Talk is cheap. Show me the code. - Linus Torvalds";
	Quotation[15] = "I do not fear computers. I fear the lack of them. - Isaac Asimov -";
	Quotation[16] = "If you don’t know anything about computers, just remember that they are machines that do exactly what you tell them but often surprise you in the result. — Richard Dawkins";
	Quotation[17] = "The inside of a computer is as dumb as hell but it goes like mad! - Richard P. Feynman -";

 	var Q = Quotation.length;
  	var whichQuotation=Math.round(Math.random()*(Q-1));

  	function showQuotation()
    {
		document.write(Quotation[whichQuotation]);
	}

  	showQuotation();

