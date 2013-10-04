source 'https://rubygems.org'

group :assets do
  gem 'coffee-script'
end

group :development, :test do
  gem 'actionpack', '~> 3.2'
  gem 'jquery-rails'
  gem 'railties', '~> 3.2'
  gem 'thin'
  gem 'tzinfo'

  gem 'guard-jasmine'
  gem 'jasminerice', git: 'git://github.com/bradphelan/jasminerice.git' # jasmine 1.3.1
  gem 'rb-fsevent', require: false if RUBY_PLATFORM =~ /darwin/i
end
