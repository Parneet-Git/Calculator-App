let buttons = document.querySelectorAll('span');
let output = document.querySelector('input');

for(let button of buttons){
	button.addEventListener('click', (e) => {
		const text = e.target.innerText;
		if(text === 'C'){
			output.value = '';
		}
		else if(text === '='){
			try {
				output.value = eval(output.value);	
			} catch (error) {
				output.value = "Invalid Input";
			}
		}
		else if (text === '⌫'){
			output.value = output.value.substring(0, output.value.length-1);
		}
		else{
			output.value += text;
		}
	})
}

document.addEventListener('keydown', (e) => {
	let input = e.key;
	if((input >= 0 || input <= 9) || ['/', '*', '-', '+', '.'].includes(input)){
		output.value += input;
	}
	else if (input === 'Backspace') {
		if(['Invalid Input', 'Infinity', 'undefined'].includes(output.value)){
			output.value = '';
		}
		output.value = output.value.substring(0, output.value.length - 1);
	}
	else if (input === 'Enter') {
		try {
			output.value = eval(output.value);
		} catch (error) {
			output.value = "Invalid Input";
		}
	}
})