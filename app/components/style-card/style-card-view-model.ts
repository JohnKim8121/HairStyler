import { Observable } from '@nativescript/core';

export class StyleCardViewModel extends Observable {
    constructor() {
        super();
    }

    onTryOn() {
        // Navigate to AR view with selected style
        console.log('Trying on hairstyle...');
    }
}