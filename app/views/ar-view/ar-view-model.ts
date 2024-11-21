import { Observable } from '@nativescript/core';
import { AR } from '@nativescript/ar';

export class ARViewModel extends Observable {
    private arView: AR;

    constructor() {
        super();
        this.initAR();
    }

    private async initAR() {
        try {
            this.arView = new AR();
            await this.arView.startPreview();
        } catch (error) {
            console.error('AR initialization error:', error);
        }
    }

    adjustLength() {
        console.log('Adjusting length...');
    }

    adjustColor() {
        console.log('Adjusting color...');
    }

    adjustStyle() {
        console.log('Adjusting style...');
    }

    onUnloaded() {
        if (this.arView) {
            this.arView.stopPreview();
        }
    }
}