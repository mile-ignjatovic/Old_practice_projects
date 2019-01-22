const _items = new WeakMap();

class Stack {
	constructor() {
		_items.set(this, []);
	}
	peek() {
		const items = _items.get(this);
		if (items.length <= 0) {
			throw new Error("stack is empty");
		} else {
			return items[items.length - 1];
		}
	}
	pop() {
		const items = _items.get(this);
		if (items.length === 0) {
			throw new Error("stack is empty");
		} else {
			return items.pop();
		}
	}
	push(item) {
		_items.get(this).push(item);
	}
	get count() {
		return _items.get(this).length;
	}
}

const s = new Stack();
console.log(s);
