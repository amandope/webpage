console.log('Hello World!');
let count = 0
let btn = document.getElementById('btn')

function add() {
	count++
	btn.innerText = "Count: " + count
}

function reset() {
	count = 0
	btn.innerText = "Counter: 0"
}