// port of a Quicksilver search algorithm found at http://code.google.com/p/blacktree-alchemy/
// see MIT_LICENSE

Function.prototype.method = function(name, func){
	if ( !this.prototype[name] ){ this.prototype[name] = func; }
};

String.method('score', function(abrv, prec){
	var phrs = this;
	return cinnabar(phrs, abrv, prec).score();
});

// functional object
var cinnabar = function(phrs, abrv, prec){
	var o = {};				
	var pL = phrs.length;								// phrase length
	var aL = abrv.length;								// abbreviation length
	prec = (typeof prec === 'undefined') ? 4 : prec;	// precision
	var aI = aL;										// abrv index
	var pI, remainder, rL, rS, s;						// phrase index, remainder of phrase, remainder score, score
	const dP = 0.15;									// discounted penalty
		
	o.rScore = function(){
		remainder = phrs.slice(pI + aI);
		rL = remainder.length;
		var remainingAbrv = ( aI < aL ) ? abrv.slice(aI) : '';
		return remainder.score(remainingAbrv);
	};
	
	// reward matching the beginning of a word that follows skipped letters
	o.reward = function(){
		if ( pI > 0 ){
			var j;
			var c = phrs.charAt(pI - 1);
			if ( c === ' '){
				for ( j = pI - 2; j > -1; j -= 1){
					c = phrs.charAt(j);
					s -= ( c === ' ' ) ? 1 : dP;
				}
			} else {
				c = phrs.charAt(pI);
				if ( c !== ' '){
					for ( j = pI - 1; j > -1; j -= 1){
						c = phrs.charAt(j);
						s -= ( c === ' ' ) ? dP : 1;
					}
				} else { s -= pI; }
			}
		}
		return s;
	};
	
	o.sSum = function(){
		s = pL - rL;
		s = o.reward();
		s += rS * rL;
		s = s / pL;
		return s.toPrecision(prec); 
	};
	
	// detect the largest abrv subset match within the phrase 
	o.detect = function(){
		for ( aI; aI > 0; aI -= 1 ){
			var abrvSubset = abrv.slice(0, aI);
			pI = phrs.indexOf(abrvSubset);
			if ( pI > -1 ){
				if ( pL >= pI + aL ){
					rS = o.rScore();
					if ( rS > 0 ){ return o.sSum(); } 	
				}
			}
		}
		return 0.0;
	};

	o.score = function(){
		if ( aL === 0 ){ return 0.9; }
		if ( aL > pL ) { return 0.0; }
		return o.detect();
	};
	
	return o;
};