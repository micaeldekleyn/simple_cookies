# coding: utf-8

lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

require 'simple_cookies/version'

Gem::Specification.new do |s|
  s.name        = 'simple_cookies'
  s.version     = SimpleCookies::VERSION
  s.date        = '2017-10-20'
  s.summary     = "A simple gem to display cookies consent !"
  s.description = "A simple gem to display cookies consent ! If you don't disable cookies, we assume you are ok with app's cookies policy."
  s.authors     = ["Micael Dekleyn"]
  s.email       = 'micael.dekleyn@gmail.com'
  s.files       = ["lib/simple_cookies.rb"]
  s.homepage    = 'http://rubygems.org/gems/simple_cookies'
  s.license     = 'MIT'
end
