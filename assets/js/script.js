/* Author: 

*/
const counter = document.querySelectorAll(".number");
console.log(counter);
const numbers = counter.innerText
console.log(numbers);

counter.forEach((counter) => {
  // counter.innerText = "0";

	const updateCounter = () => {
		const target = +counter.innerText
		console.log(target);
		if(target)
		setTimeout(updateCounter, 1);

		// counter.innerText="0";
		// const c = +counter.innerHTML;

		// const increment = target/200;

		// if(c<target){
		// 	counter.innerText = `${math.ceil(c + increment)}`;
		// 	setTimeout(updateCounter,1)
		// }
	};
	updatecounter();
});
