import '../css/estilos.css';
import image from '../images/design-code.png';
import video from '../video/que-es-core.mp4';

import {firstMessage, delayedMessage} from './message.js';

console.log("Hola mundo!");
document.write(firstMessage);
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', image);
img.setAttribute('width', 300);
document.body.append(img);

const vid = document.createElement('video');
vid.setAttribute('src', video);
vid.setAttribute('width', 300);
vid.setAttribute('autoplay', true);
vid.setAttribute('controls', true);
document.body.append(vid);