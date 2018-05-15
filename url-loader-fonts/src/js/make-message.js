// module.exports = 
function MakeMessage(message){
	const element = document.createElement('p');
	element.textContent = message;
	return element;
}

export default MakeMessage;