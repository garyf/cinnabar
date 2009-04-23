var abbreviations = [
	{'f': 0, 'a': 'a'},
	{'f': 0, 'a': 'ab'},
	{'f': 0, 'a': 'abc'},
	{'f': 0, 'a': 'abcd'},
	{'f': 0, 'a': 'abcde'},
	{'f': 0, 'a': 'abcdef'}
];

var phrases = [
	{'w': 'abc def'},
	{'w': 'abcd efgh'}
];

pair_winner(abbreviations, phrases, 'smaller phrase higher score').run();