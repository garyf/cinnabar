# port of a Quicksilver search algorithm found at https://github.com/quicksilver/Quicksilver
# see MIT_LICENSE

Function::method = (name, func) ->
  @::[name] = func unless @::[name]

String.method 'score', (abrv, precision) ->
  cinnabar(this, abrv, precision).score()

# functional object
cinnabar = (phrase, abrv, precision) ->
  o = {}
  abrvLength = abrv.length
  abrvIndex = abrvLength
  phraseLength = phrase.length
  discountedPenalty = 0.15
  precision = (if (typeof precision is 'undefined') then 4 else precision)
  phraseIndex = undefined
  remainingLength = undefined
  remainingScore = undefined
  score = undefined

  # search what is left of the phrase with the rest of the abrv
  o.scoreRemaining = ->
    remainingPhrase = phrase.slice(phraseIndex + abrvIndex)
    remainingLength = remainingPhrase.length
    remainingAbrv = (if (abrvIndex < abrvLength) then abrv.slice(abrvIndex) else '')
    remainingPhrase.score remainingAbrv

  # reward a match of the beginning of a word that follows skipped letters
  o.reward = ->
    score = phraseLength - remainingLength
    if phraseIndex > 0
      j = undefined
      chr = phrase.charAt(phraseIndex - 1)
      if chr is ' '
        j = phraseIndex - 2
        while j > -1
          chr = phrase.charAt(j)
          score -= (if (chr is ' ') then 1 else discountedPenalty)
          j -= 1
      else
        chr = phrase.charAt(phraseIndex)
        if chr isnt ' '
          j = phraseIndex - 1
          while j > -1
            chr = phrase.charAt(j)
            score -= (if (chr is ' ') then discountedPenalty else 1)
            j -= 1
        else
          score -= phraseIndex
    score

  o.scoreSum = ->
    score = o.reward()
    score += remainingScore * remainingLength
    score = score / phraseLength
    Number score.toFixed(precision)

  # detect the largest abrv subset match within the phrase
  o.detect = ->
    abrvIndex
    while abrvIndex > 0
      abrvSubset = abrv.slice(0, abrvIndex)
      phraseIndex = phrase.indexOf(abrvSubset)
      if phraseIndex > -1
        if phraseLength >= phraseIndex + abrvLength
          remainingScore = o.scoreRemaining()
          return o.scoreSum() if remainingScore > 0
      abrvIndex -= 1
    0.0

  o.score = ->
    return 0.9 if abrvLength is 0
    return 0.0 if abrvLength > phraseLength
    o.detect()

  o
