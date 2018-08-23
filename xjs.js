function x(selector) {
	var self = {};

	self.selector = selector;
	self.element = document.querySelector(self.selector);

	/*
    |--------------------------------------------------------------------------
    | VISUALS 
    |--------------------------------------------------------------------------
    */
    self.css = (p1, p2) => {
    	if(!p1 && !p2) return;

    	if(p2 === undefined){
    		multiCSS(p1, self);
    	} else {
    		singleCSS(p1, p2, self);
    	}
    	return self;
    }

	/*
    |--------------------------------------------------------------------------
    | DOM 
    |--------------------------------------------------------------------------
    */
    self.add = (child) => {
    	if(!child) return;
    	self.element.innerHTML = child;
    	return self;
    }

	/*
    |--------------------------------------------------------------------------
    | EVENTS 
    |--------------------------------------------------------------------------
    */
    self.on = function(type, callback) {
    	if(!type && !callback) return;
    	self.element['on' + type] = callback;
    	return self;
    }

	/*
    |--------------------------------------------------------------------------
    | AJAX 
    |--------------------------------------------------------------------------
    */
    self.jsonGet = (path) => {
    	if(!path) return;
    	return fetch(path, {
    		method: 'GET',
    		headers: {'Content-Type': 'application/json'},
    		credentials: 'same-origin'
    	}).then(resp => {
    		if(resp.status != 200) throw new Error(resp.statusText)
    			return resp.text()
    	})
    }

    return self;
}
/*
|--------------------------------------------------------------------------
| xJS FUNCTIONS 
|--------------------------------------------------------------------------
*/
function singleCSS(name, value, self) {
	self.element.style[name] = value;
}

function multiCSS(obj, self) {
	for (var style in obj) {
		self.element.style[style] = obj[style];
	}
}