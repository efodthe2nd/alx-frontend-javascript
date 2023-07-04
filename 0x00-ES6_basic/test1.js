let p1 = new Promise((resolve, reject) => {
	let x = 5;
	reject(x);
})

p1.then((ex) => {
	console.log(ex);
}).catch((err) => {
	console.log("Caught", err);})
