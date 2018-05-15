import '../css/estilos.css';
import image from '../images/design-code.png';

import {firstMessage, delayedMessage} from './message.js';

console.log("Hola mundo!");
document.write(firstMessage);
delayedMessage();

const img = document.createElement('img');
img.setAttribute('width', 300);
img.setAttribute('src', image);
document.body.append(img);