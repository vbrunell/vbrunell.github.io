	var Quotation=new Array()

	Quotation[0] = "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors. - Leon Bambrick -";
	Quotation[1] = "Computers are useless.  They can only give you answers.  - Pablo Picasso -";
	Quotation[2] = "The question of whether computers can think is like the question of whether submarines can swim. - Edsger Dijkstra -";
	Quotation[3] = "Never trust a computer you can’t throw out a window. - Steve Wozniak -";
	Quotation[4] = "Any fool can use a computer.  Many do. - Ted Nelson -";
	Quotation[5] = "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. - Seymour Cray -";
	Quotation[6] = "To iterate is human, to recurse divine. - L. Peter Deutsch -";
	Quotation[7] = "There are only two kinds of programming languages: those people always bitch about and those nobody uses. - Bjarne Stroustrup -";
	Quotation[8] = "Computer language design is just like a stroll in the park.  Jurassic Park, that is. - Larry Wall -";
	Quotation[9] = "Writing in C or C++ is like running a chain saw with all the safety guards removed. - Bob Gray -";
	Quotation[10] = "In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg. - Bjarne Stroustrup -";
	Quotation[11] = "If Java had true garbage collection, most programs would delete themselves upon execution. - Robert Sewell -";
	Quotation[12] = "Software is like sex: It’s better when it’s free. - Linus Torvalds -";
	Quotation[13] = "If debugging is the process of removing bugs, then programming must be the process of putting them in. - Edsger Dijkstra -";
	Quotation[14] = "There are two ways to write error-free programs; only the third one works. - Alan J. Perlis -";
	Quotation[15] =	"You can either have software quality or you can have pointer arithmetic, but you cannot have both at the same time. - Bertrand Meyer -";
	Quotation[16] = "To err is human, but to really foul things up you need a computer. - Paul Ehrlich -";
	Quotation[17] = "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else. - Eagleson’s Law -";

 	var Q = Quotation.length;
  	var whichQuotation=Math.round(Math.random()*(Q-1));

  	function showQuotation()
    {
		document.write(Quotation[whichQuotation]);
	}

  	showQuotation();

