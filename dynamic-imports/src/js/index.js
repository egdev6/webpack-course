import '../css/estilos.css';
import image from '../images/design-code.png';
import data from './teachers.json';

import React from 'react';
import Teachers from './components/Teachers';
import {render} from 'react-dom';
import {firstMessage, delayedMessage} from './message.js';

var button = document.getElementById('dynamic-import');
button.addEventListener('click', async () => {
	const {default: alerta} = await import('./alerta.js');
	alerta();
})

render(<Teachers data={data}/>, document.getElementById('container'))

console.log(data);

console.log("Hola mundo!");
document.write(firstMessage);
delayedMessage();

const img = document.createElement('img');
img.setAttribute('width', 300);
img.setAttribute('src', image);
document.body.append(img);