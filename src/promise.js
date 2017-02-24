function addPromise(a,b){

		return new Promise(function (resolve, reject){


			resolve(a+b);
			reject('error');
		})

}


addPromise(1,6).then(function(sum){ 
console.log(sum);
}, function(err){

	consol.log(err);
})


