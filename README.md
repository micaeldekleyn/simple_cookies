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

    *= require simple-cookies

Or, if you have application.scss:

    @import "simple-cookies";

## Usage

In your view add

```ruby
<%= render 'simple_cookies/consent', appname: "App name", path: nil, klass: 'top' %>
```

## Default style

Simple Cookies comes with some customization.
Here are css class :

  full : make simple-cookies box full width of browser. Default is 375px.

  top || bottom : position the box at the top or bottom of the window.

  content-centered : center content inside the box. Default content is left align.

## CSS class and customization

You can customize the box by overriding css.

"Simple cookies" contains 4 elements :

```html
div#simple-cookies
  h1
  p
  a.simple-cookies-accept
```
