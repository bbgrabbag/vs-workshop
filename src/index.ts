/** @file Root JS file. Handles intializing element bindings and event listeners */

import './assets/styles.css';

window.addEventListener('load', () => {
    const calculator = document.getElementById('controls') as HTMLFormElement;
    const buttons = document.querySelectorAll('.input-btn') as NodeList;
    const output = document.getElementById('output') as HTMLSpanElement;

});
