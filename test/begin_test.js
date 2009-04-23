var abbreviations = [
	{'f': 1, 'a': 'c'},
	{'f': 1, 'a': 'cd'},
	{'f': 1, 'a': 'cde'},
	{'f': 1, 'a': 'cdef'},
	{'f': 0, 'a': 'd'},
	{'f': 0, 'a': 'de'},
	{'f': 0, 'a': 'def'},
	{'f': 1, 'a': 'defg'}
];

var phrases = [
	{'w': 'abc def'},
	{'w': 'cde fgh'}
];

pair_winner(abbreviations, phrases, 'abrv beginning word higher score').run();