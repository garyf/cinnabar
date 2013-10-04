describe 'cinnabar#score', ->
  it 'higher score w larger fraction of phrase matched', ->
    phrase = 'abc def'
    scores = [0.9143, 0.9286, 0.9429, 0.9714, 0.9857, 1.0]
    abrv = ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef']
    expect(phrase.score abrv[i]).toEqual scores[i] for i in [0..5]

  it 'higher score w character beginning a word w 2 characters', ->
    phrase = 'abc def'
    scores = [0.9286, 0.5357, 0.4071, 0.8071, 0.5357, 0.4071, 0.6857, 0.5357, 0.4071]
    abrv = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
    expect(phrase.score abrv[i]).toEqual scores[i] for i in [0..8]

  it 'higher score w smaller phrase', ->
    phrase0 = 'abc def'
    phrase1 = 'abcd efgh'
    abrv = ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef']
    scores0 = [0.9143, 0.9286, 0.9429, 0.9714, 0.9857, 1.0]
    scores1 = [0.9111, 0.9222, 0.9333, 0.9444, 0.9667, 0.9778]
    expect(phrase0.score abrv[i]).toEqual scores0[i] for i in [0..5]
    expect(phrase1.score abrv[i]).toEqual scores1[i] for i in [0..5]

  it 'w abrv length > phrase length', ->
    expect('phrase'.score 'phrases').toEqual 0.0

  it 'w/o abrv length', ->
    expect('phrase'.score '').toEqual 0.9

  it 'case sensitivity', ->
    phrase0 = 'abc def'
    phrase1 = 'AbC dEf'
    abrv = ['a', 'A', 'bde', 'bdE', 'bcdf', 'bCdf', 'abdf', 'Abdf']
    scores0 = [0.9143, 0.0, 0.8214, 0.0, 0.7143, 0.0, 0.8357, 0.0]
    scores1 = [0.0, 0.9143, 0.0, 0.8214, 0.0, 0.7143, 0.0, 0.8357]
    expect(phrase0.score abrv[i]).toEqual scores0[i] for i in [0..7]
    expect(phrase1.score abrv[i]).toEqual scores1[i] for i in [0..7]

  it 'precision', ->
    phrase = 'abc def'
    abrv = 'abc'
    expect(phrase.score abrv, 2).toEqual 0.94
    expect(phrase.score abrv, 3).toEqual 0.943

  it 'w larger phrases', ->
    phrase0 = 'Bach, Concerto No. 4 in A, BWV 1055'
    phrase1 = 'Beethoven, Concerto No. 4 for Piano & Orchestra, Op. 58'
    abrv = ['B', 'Ba', 'Be', 'Bac', 'Beet', 'Bev', 'Concerto', 'oncerto', 'concertoA', 'honcertoaO']
    scores0 = [0.9029, 0.9057, 0.6986, 0.9086, 0.0, 0.0, 0.9186, 0.7643, 0.7129, 0.0]
    scores1 = [0.9018, 0.4736, 0.9036, 0.3919, 0.9073, 0.8400, 0.9073, 0.7318, 0.0, 0.5854]
    expect(phrase0.score abrv[i]).toEqual scores0[i] for i in [0..9]
    expect(phrase1.score abrv[i]).toEqual scores1[i] for i in [0..9]

  it 'w numerals', ->
    phrase = '123 456'
    abrv = ['1', '12', '123', '1234', '12345', '123456', '7']
    scores = [0.9143, 0.9286, 0.9429, 0.9714, 0.9857, 1.0, 0.0]
    expect(phrase.score abrv[i]).toEqual scores[i] for i in [0..6]

  describe 'higher score w abrv beginning a word', ->
    phrase0 = 'abc def'
    phrase1 = 'cde fgh'
    it '1st word in phrase', ->
      abrv = ['c', 'cd', 'cde', 'cdef', 'defg']
      scores0 = [0.6571, 0.6857, 0.7, 0.7143, 0]
      scores1 = [0.9143, 0.9286, 0.9429, 0.9714, 0.8429]
      expect(phrase0.score abrv[i]).toEqual scores0[i] for i in [0..4]
      expect(phrase1.score abrv[i]).toEqual scores1[i] for i in [0..4]

    it '2nd word in phrase', ->
      abrv = ['d', 'de', 'def']
      scores0 = [0.9071, 0.9214, 0.9357]
      scores1 = [0.7857, 0.8, 0.8286]
      expect(phrase0.score abrv[i]).toEqual scores0[i] for i in [0..2]
      expect(phrase1.score abrv[i]).toEqual scores1[i] for i in [0..2]
