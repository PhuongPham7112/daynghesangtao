import { Accordion } from "flowbite";
import type { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite";
import type { InstanceOptions } from 'flowbite';

const accordionEl = document.querySelector('#accordion-example')! as HTMLElement;

// create an array of objects with the id, trigger element (eg. button), and the content element
const accordionItems: AccordionItem[] = [
    {
        id: 'accordion-example-heading-1',
        triggerEl: document.querySelector('#accordion-example-heading-1')!,
        targetEl: document.querySelector('#accordion-example-body-1')!,
        active: true
    },
    {
        id: 'accordion-example-heading-2',
        triggerEl: document.querySelector('#accordion-example-heading-2')!,
        targetEl: document.querySelector('#accordion-example-body-2')!,
        active: false
    },
    {
        id: 'accordion-example-heading-3',
        triggerEl: document.querySelector('#accordion-example-heading-3')!,
        targetEl: document.querySelector('#accordion-example-body-3')!,
        active: false
    }
];

// options with default values
const options: AccordionOptions = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400',
    onOpen: (item) => {
        console.log('accordion item has been shown');
        console.log(item);
    },
    onClose: (item) => {
        console.log('accordion item has been hidden');
        console.log(item);
    },
    onToggle: (item) => {
        console.log('accordion item has been toggled');
        console.log(item);
    },
};

// instance options object
const instanceOptions: InstanceOptions = {
    id: 'accordion-example',
    override: true
};

/*
* accordionEl: HTML element (required)
* accordionItems: array of accordion item objects (required)
* options (optional)
* instanceOptions (optional)
*/
const accordion: AccordionInterface = new Accordion(accordionEl, accordionItems, options, instanceOptions);

// open accordion item based on id
accordion.open('accordion-example-heading-2');

// destroy accordion
accordion.destroy();