//Write a sleep function using a promise in javascript?
function sleep(ms){
	return new Promise((resolve, reject)=>{
		setTimeout(()=> resolve("Sleep function"), ms);
	});
}

sleep(5000).then((promise)=>{
	console.log(promise)
})
.catch((err)=>{
	console.log(err.message)
})
.finally(()=>{
	console.log("final block")
});


/*
Output:
Sleep function
final block
*/