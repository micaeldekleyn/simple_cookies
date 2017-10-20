# Simple Cookies

A simple gem to display cookies consent !

## Installation

Simple Cookies is distributed as a gem, which is how it should be used in your app.

Include the gem in your Gemfile:

```ruby
gem 'simple_cookies'
```

Install assets file in application.js:

    //= require simple_cookies

And in application.css:

    *= require simple_cookies

Or, if you have application.scss:

    @import "simple_cookies";

## Usage

In your view add

```ruby
<%= render 'simple_cookies/consent' %>
```

You can add a link to redirect to your policy

```ruby
<%= render 'simple_cookies/consent', link: '/cookies' %>
```

You can also add a target parameter to the link

```ruby
= render 'simple_cookies/consent', link: '/cookies', target: '_blank'
```
