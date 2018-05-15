import renderToDOM from './render-to-dom';
import MakeMessage from './make-message';
const waitTime = new Promise((todoOK, todoMal)=>{
	setTimeout(()=>{
		todoOK('Han pasado 3 segundos');
	},3000)
})

module.exports = {
	firstMessage: ' Hola mundo desde modulo!',
	delayedMessage: async() => {
		const message = await waitTime;
		console.log(message);
		// const element = document.createElement('p');
		// element.textContent = message;
		renderToDOM(MakeMessage(message));
	}
}