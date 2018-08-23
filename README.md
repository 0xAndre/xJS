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
    <div>TEST</div>
```

## CSS
```js
    x('test').css('color', 'red');
    x('div').css('color', 'blue');
```

### CSS as Object
```js
const {
    'color': 'blue',
    'text-align': 'center'
}
					    
x('test').css(decor);
```

## JSON GET
```js
    x().jsonGet('https://jsonplaceholder.typicode.com/todos/1').then(x('test').add)
    x('test').jsonGet('https://jsonplaceholder.typicode.com/todos/1');
```

## SUM
```html
    <h1 id="val1">4</h1>
    <h1 id="val2">4</h1>
    <h1 id="val3">5</h1>
    <h1 id="val4">2</h1>
    <h1 id="val5">1</h1>
    <div>4<div>

    <h1 id="res"></h1>
```
```js
   x('res').sum(['val1', 'val2', 'val3', 'val4', 'val5', 'div'])
```

```html
    <h1 id="res">Result: 20</h1>
```

License
----

MIT