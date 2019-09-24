# fillr

Quickly present your designs with the famous "Lorem Ipsum" text.

Based on the idea of [digitalvillainy's loremFill](https://github.com/digitalvillainy/loremFill):

- no more copying & pasting of placeholer text
- easy to remove/replace with real content
- output variations that test your design by simply reloading the page (ups, I did not expect the real headline to be so long...)

### Try it out: [plnkr](https://plnkr.co/edit/v31OZE?p=preview)

## How to use

CDN: Place the following script tag **at the end of your body** 

`<script src="https://cdn.jsdelivr.net/gh/sroehrl/fillr/fillr.min.js"></script>`

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
