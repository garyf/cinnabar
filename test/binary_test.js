var abbreviations = [
	{'f': 0, 'a': 'a'},
	{'f': 0, 'a': 'ab'},
	{'f': 0, 'a': 'abc'},
	{'f': 0, 'a': 'abcg'},
	{'f': 0, 'a': 'abcgh'},
	{'f': 0, 'a': 'abcghi'},
	{'f': 1, 'a': 'd'},
	{'f': 1, 'a': 'de'},
	{'f': 1, 'a': 'def'},
	{'f': 1, 'a': 'defg'},
	{'f': 1, 'a': 'defgh'},
	{'f': 1, 'a': 'defghi'},
	{'f': 1, 'a': 'dg'},
	{'f': 1, 'a': 'dh'},
	{'f': 1, 'a': 'di'},
	{'f': 1, 'a': 'eg'},
	{'f': 1, 'a': 'eh'},
	{'f': 1, 'a': 'ei'},
	{'f': 1, 'a': 'fg'},
	{'f': 1, 'a': 'fh'},
	{'f': 1, 'a': 'fi'},
	{'f': 0, 'a': 'ag'},
	{'f': 0, 'a': 'ah'},
	{'f': 0, 'a': 'ai'},
	{'f': 0, 'a': 'bd'},
	{'f': 0, 'a': 'be'},
	{'f': 0, 'a': 'bf'},
	{'f': 0, 'a': 'bd'},
	{'f': 0, 'a': 'be'},
	{'f': 0, 'a': 'bf'}
];

var phrases = [
	{'w': 'abc ghi'},
	{'w': 'def ghi'}
];

pair_winner(abbreviations, phrases, 'binary').run();