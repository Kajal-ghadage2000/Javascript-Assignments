/* Write a function delay that returns a promise.
And that promise should return a setTimeout that calls resolve after 1000ms.*/

function delay(){
	return new Promise((resolve,reject)=> {
		setTimeout(resolve("done"), 1000);
	});
}

delay()
.then(()=>{
	console.log('runs after 1 seconds')	
})
.catch((err)=>{
	console.log(err.message);	
});
