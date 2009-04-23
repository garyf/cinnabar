var pair_winner = function(abrv, prhs, title, prec){
	var o = {};
	var i;

	o.assertWinnerP = function(){
		var delta = phrs[1]['s'] - phrs[0]['s'];
		if ( abrv[i]['f'] === 1 ){
			if ( delta > 0 ){ return true; }
		} else {
			if ( delta < 0 ){ return true; }	
		}			
	};

	o.run = function(){
		var a, j, p, s;
		var b = '<br />';
		for ( i = 0; i < abrv.length; i += 1 ){
			a = abrv[i]['a'];
			document.writeln(b + a + b);
			for ( j = 0; j < prhs.length; j += 1 ){
				p = prhs[j]['w'];
				s = p.score(a, prec);
				document.writeln(' ' + s + ' ' + p + b);
				prhs[j]['s'] = s;
			}
			fireunit.ok(o.assertWinnerP, title);
		}
	};

	return o; 
};