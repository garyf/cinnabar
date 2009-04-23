var abbreviations = [
	{'f': 0, 'a': 'B'},
	{'f': 1, 'a': 'Ba'},
	{'f': 1, 'a': 'Be'},
	{'f': 1, 'a': 'Bac'},
	{'f': 1, 'a': 'Beet'},
	{'f': 1, 'a': 'Bev'},
	{'f': 0, 'a': 'Concerto'},
	{'f': 0, 'a': 'oncerto'},
	{'f': 0, 'a': 'concertoA'},
	{'f': 1, 'a': 'concertoaO'}
];

var phrases = [
	{'w': 'Bach, Concerto No. 4 in A, BWV 1055'},
	{'w': 'Beethoven, Concerto No. 4 for Piano & Orchestra, Op. 58'}
];

pair_winner(abbreviations, phrases, 'music').run();