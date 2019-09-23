# fillr

Quickly present your designs with the famous "Lorem Ipsum" text.

## How to use

CDN: 

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
