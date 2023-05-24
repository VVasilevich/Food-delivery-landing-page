import calc from './modules/calc';
import forms from './modules/forms';
import menu from './modules/menu';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import {openModal} from './modules/generalFunctions';

window.addEventListener('DOMContentLoaded', () => {    
    
    const modalTimerID = setTimeout(() => openModal('.modal', modalTimerID), 50000);

    calc();
    forms('form', modalTimerID);
    menu('.menu .container');
    modal('[data-modal]', '.modal', modalTimerID);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
     });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2023-12-31T00:00:00');
});