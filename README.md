# fillr

Quickly present your designs with the famous "Lorem Ipsum" text.

Based on the idea of [digitalvillainy's loremFill](https://github.com/digitalvillainy/loremFill):

- no more copying & pasting of placeholer text
- easy to remove/replace with real content
- output variations that test your design by simply reloading the page (ups, I did not expect the real headline to be so long...)

### Try it out: [codepen](https://codepen.io/neoan/pen/ExYJMwE)

**Using it? consider leaving me a star**

## How to use

CDN: Place the following script tag into your project 

`<script src="https://cdn.jsdelivr.net/gh/sroehrl/fillr@v0.2.0/fillr.min.js" defer></script>`

Replace @v0.2.0 with desired version found from: [Available versions of Fillr](https://github.com/sroehrl/fillr/tags)

Just fill in {{lorem}} wherever you please. You can utilize basic functions:

## loop(n)
Will generate n repetitions of the element.

```HTML
<ul>
  <li>{{lorem.loop(4)}}</li>
</ul>

```

## rows(n)
Will generate n rows within the element.

```HTML
<p>{{lorem.rows(4)}}</p>

```

_NOTE_: combinations are possible.
`{{lorem.rows(5).loop(3)}}`

# But my JS-framework screams at me?!
Using one of the many frameworks utilizing the double curly brackets? Worry not, you can simply use **hard brackets** instead:

`<h1>[[lorem]]</h1>`
