# xJS - Javascript Library

[![N|Solid](https://github.com/x0uter/xJS/raw/master/assets/xjs.png)](https://github.com/x0uter/xJS)
[![N|Solid](https://github.com/x0uter/xJS/raw/master/assets/xjs.gif)](https://github.com/x0uter/xJS)

Make it simple.

## How to Use
Add xJS Library to your HTML file
```html
    <script src="xjs.js"></script>
```

## Examples

```html
    <h1 id="test">TEST</h1>
```

## CSS
```js
    x('#test').css('color', 'red');
```

### CSS as Object
```js
const {
    'color': 'blue',
    'text-align': 'center'
}
					    
x('#test').css(decor);
```

## JSON GET and Add
```js
    x().jsonGet('https://jsonplaceholder.typicode.com/todos/1').then(x('#test').add)
```

## SUM
```html
    <div id="res"><div>
```
```js
   x('#res').sum(3, 3); // res -> 6
   x('#res').sum('3', 3); // res -> 6
   x('#res').sum('3', '3'); // res -> 6
```

License
----

MIT