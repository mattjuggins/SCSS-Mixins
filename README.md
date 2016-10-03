# A Selection of Useful SCSS Mixins and Functions
By [Matt Juggins](https://twitter.com/matthewjuggins)

A modest collection of SCSS mixins and functions for general purpose use.
These are compiled as and when I write them for other projects.
There are of course some incredible alternatives out there, especially when it comes to dealing with [browser features](https://modernizr.com/) but feel free to `@include` these where you wish.
All mixins and functions have unit tests using [True](http://oddbird.net/true/).

## Included Files
* [Flexbox Mixins](SCSS-Mixins/scss/flex_mixins.scss)
* [General Purpose Mixins](SCSS-Mixins/scss/general_mixins.scss)
* [General Purpose Functions](SCSS-Mixins/scss/general_functions.scss)

## Examples
```
// Import general purpose mixins
@import "general-mixins.scss"

// Include mixins to be used
@include absolute($top: 50px, $left: 10px);
@include size(100px);
@include border-radius($radius: 5px, $bottom-left: 2px);

```
