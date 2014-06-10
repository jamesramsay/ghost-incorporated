# Incorporated for Ghost

![Incorporated for Ghost](http://l.jwr.vc/uTpo+)

### [→ Download](https://github.com/jamesramsay/ghost-incorporated/releases/latest)

> A [Ghost](https://ghost.org/) theme which provides great typography, responsive design, author details, semantic markup and more. At this time it is for the most part a port of [Jekyll Incorporated](https://github.com/kippt/jekyll-incorporated) by Kippt, Inc.

## Table of Contents

* [Features](#features)
* [Installing](#installing)
* [Configuring](#configuring)
* [Roadmap](#roadmap)
* [License](#license)
* [Thanks](#thanks)

## Features

- Designed for content
- SEO and sharing friendly
- Lightweight
- Code Syntax highlighting
- Responsive

## Installing

### Using Git
1. Navigate to your Ghost theme directory `ghost/content/themes`
2. Clone the theme repository
```sh
$ git clone https://github.com/jamesramsay/ghost-incorporated incorporated
```
3. Restart ghost and log in to your dashboard
4. In settings under themes select **Incorporated** and save


### Manually
1. Download as a `.zip` or `.tar.gz` from the [latest release](https://github.com/jamesramsay/ghost-incorporated/releases/latest)
2. Unzip the files and rename the folder to `incorporated`
4. Copy the folder into your Ghost theme directory `ghost/content/themes`
5. Restart ghost and log in to your dashboard
4. In settings under themes select **Incorporated** and save

## Configuring

All configurable files are located in `/partials`.

#### config.hbs

Configurable identifiers.

* `ga_ua`: Your [Google Analytics](https://support.google.com/analytics/answer/1032385) account identifier

#### menu.hbs

Configure your navigation items.

```html
<a href="/about">About</a>
<a href="/product">Product</a>
```

#### header.hbs

Configurable links which may be shown in the homepage header.

```html
<a href="https://twitter.com/USER" title="Follow on Twitter" target="_blank"><i class="icon icon-twitter"></i></a>
<a href="http://facebook.com/USER" title="Like on Facebook" target="_blank"><i class="icon icon-facebook"></i></a>
<a href="{{@blog.url}}/rss/" title="RSS Feed"><i class="icon icon-rss"></i></a>
```

#### tagline.hbs

Configurable tagline shown in the top right.

```html
<nav class="tagline">
    <span>Just a blogging platform.</span>
    <a href="http://ghost.org" class="btn btn-outline">Learn More</a>
</nav>
```

#### social.hbs

Configurable social links.

```html
<a class="icon-twitter" href="https://twitter.com/USER" title="Twitter"><span class="hidden">Twitter</span></a>
<a class="icon-facebook" href="http://facebook.com/USER" title="Facebook"><span class="hidden">Facebook</span></a>
```

## Roadmap

For the moment, the following improvements seem most pressing.

- Post cover image (dependent on support by Ghost)
- Social link configuration (hard coded for the time being)

## License

Copyright (C) 2013 James Ramsay - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Thanks

Thanks to [@JohnONolan](http://twitter/JohnONolan), [@ErisDS](http://twitter/ErisDS), and the Ghost team for creating this platform.

The Ghost, Facbook, Twitter, and Google+ icons are from the Casper theme.
Copyright (C) 2013 Ghost Foundation – Released under The MIT License.

