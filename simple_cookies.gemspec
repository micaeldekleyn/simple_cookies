# coding: utf-8

Gem::Specification.new do |s|
  s.name        = 'simple_cookies'
  s.version     = "0.0.4"
  s.date        = '2017-10-26'
  s.summary     = "A simple gem to display cookies consent !"
  s.description = "A simple gem to display cookies consent ! If you don't disable cookies, we assume you are ok with app's cookies policy."
  s.authors     = ["Micael Dekleyn"]
  s.email       = 'micael.dekleyn@gmail.com'
  s.files       = ["lib/simple_cookies.rb"]
  s.homepage    = 'http://rubygems.org/gems/simple_cookies'
  s.license     = 'MIT'

  s.add_dependency "railties", ">= 4.2.0"

  s.files        = `git ls-files`.split("\n")
end
