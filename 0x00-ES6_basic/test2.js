let p1 = new Promise((resolve, reject) => {
	if (true) {
		console.log('p1 is resolved');
	} else {
		console.log('p1 is rejected');
	}
});

let p2 = Promise.resolve('p2 is resolved');
let p3 = () => Promise.resolve(null);

p1.then((result) => {
	console.log('p1:', result);
})
p2.then((result) => {
	console.log('p2:', result);
})
p3().then((result) => {
	console.log('p3:', result);
})
