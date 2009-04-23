var solo_precision = function(abrv, prhs, title){
	var o = {};
	var i, s;
	var precision = [1, 3, 5, 9];
	
	o.assertPrec = function(){
		var n = s.toString();
		if ( precision[i] ){
			if ( n.length === precision[i] + 2 ){ return true; }
		}
	};

	o.run = function(){
		var a, p;
		var b = '<br />';
		a = abrv[0]['a'];
		document.writeln(b + a + b);
		p = prhs[0]['w'].toLowerCase();
		for ( i = 0; i < precision.length; i += 1 ){
			s = p.score(a, precision[i]);
			document.writeln(' ' + s + ' ' + p + b);
			fireunit.ok(o.assertPrec(), title);
		}
		
		s = p.score(a);
		document.writeln(' ' + s + ' ' + p + b);
		fireunit.ok(s.toString().length === 6, 'default_precision');
	};

	return o; 
};