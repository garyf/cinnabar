# Cinnabar
A derivative port of the [Quicksilver](https://github.com/quicksilver/Quicksilver) algorithm [scoreForAbbreviation](https://github.com/quicksilver/Quicksilver/blob/master/Quicksilver/Code-QuickStepFoundation/NSString_BLTRExtensions.m)

## Context
[John Nunemaker](http://railstips.org/) developed a jQuery plugin for [Live Search with Quicksilver Style](http://orderedlist.com/articles/live-search-with-quicksilver-style-for-jquery). As the user constructs a search query, each element of a local or Ajax remote data set receives a **score** in relation to the query text. The jQuery plugin then sorts and filters the results to narrow down the displayed set of items.

[John Resig](http://ejohn.org/about/) soon [refactored](http://ejohn.org/blog/jquery-livesearch/) the Live Search plugin.
As a building block for live search, Cinnabar simply provides a scoring function that gives preference to phrases having words that begin with the query text.

The structure of the `cinnabar` object draws directly from the functional inheritance pattern promoted by [Douglas Crockford](http://www.crockford.com/) in Chapter 5 of [JavaScript: The Good Parts](http://www.amazon.com/exec/obidos/ASIN/0596517742/wrrrldwideweb).

## string.score(queryText, precision)

Cinnabar augments the `String` type, where the `string` is an element of the data set being searched.
Given `queryText`, the `score` method returns a number ranging from 0.0 to 1.0.
The optional precision parameter controls the number of digits of precision, which default to 4.

	johann = 'Bach, Concerto No. 4 in A, BWV 1055'
	ludwig = 'Beethoven, Concerto No. 4 for Piano & Orchestra, Op. 58'

	johann.score('Ba')			-> 0.9057
	ludwig.score('Ba')			-> 0.4736
		
	johann.score('Bac')			-> 0.9086
	ludwig.score('Bac')			-> 0.3919
		
	johann.score('Beet')		-> 0
	ludwig.score('Beet')		-> 0.9073
		
	johann.score('Concerto')	-> 0.9186
	johann.score('oncerto')		-> 0.7643
		
* Cinnabar is case sensitive. For case insensitive scoring, preprocess the data set and query text with `string.toLowerCase()`.

## Testing
Cinnabar came into existence as part of a Ruby on Rails application. Its Jasmine specs are written in CoffeeScript and served by a mini-Rails app (see `config.ru`). Start the test server manually with `bundle exec rackup -p 3000` and visit `http://localhost:3000/jasmine` to verify that it works. More info about the test setup may be found at the [guard-jasmine](https://github.com/netzpirat/guard-jasmine) GitHub page.

## Similar work
* [liquidmetal](http://github.com/rmm5t/liquidmetal/tree/master) by [Ryan McGeary](http://twitter.com/rmm5t)
* [Quicksilver.js](http://rails-oceania.googlecode.com/svn/lachiecox/qs_score/trunk/qs_score.js) by [Lachie Cox](http://smartbomb.com.au/2008/02/11/quicksilver-javascript)

## Why 'Cinnabar'
Cinnabar provides the source for Mercury (Quicksilver).

## Provenance
Cinnabar was extracted from [Realized](http://www.realized-app.com/), an investment portfolio management application under development by [New Forge Technologies](http://newforge-tech.com).
