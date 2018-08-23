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
    <h1 id="val1">4</h1>
    <h1 id="val2">4</h1>
    <h1 id="val3">5</h1>
    <h1 id="val4">2</h1>
    <h1 id="val5">1</h1>

    <h1 id="res"></h1>
```
```js
   x('#res').sum(['#val1', '#val2', '#val3', '#val4', '#val5'])
```

```html
    <h1 id="res">16</h1>
```

License
----

MIT