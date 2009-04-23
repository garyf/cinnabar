var abbreviations = [
	{'f': 0, 'a': 'a'},
	{'f': 1, 'a': 'A'},
	{'f': 0, 'a': 'bde'},
	{'f': 1, 'a': 'bdE'},
	{'f': 0, 'a': 'bcdf'},
	{'f': 1, 'a': 'bCdf'},
	{'f': 0, 'a': 'abdf'},
	{'f': 1, 'a': 'Abdf'}
];

var phrases = [
	{'w': 'abc def'},
	{'w': 'AbC dEf'}
];

pair_winner(abbreviations, phrases, 'case sensitivity').run();