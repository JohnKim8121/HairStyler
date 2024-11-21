import { Observable } from '@nativescript/core';
import { takePicture } from '@nativescript/camera';

export class HomeViewModel extends Observable {
    private _featuredStyles: Array<any>;

    constructor() {
        super();
        
        this._featuredStyles = [
            { name: "Modern Bob", image: "~/images/styles/bob.jpg" },
            { name: "Layered Cut", image: "~/images/styles/layered.jpg" },
            { name: "Pixie Style", image: "~/images/styles/pixie.jpg" },
            { name: "Beach Waves", image: "~/images/styles/waves.jpg" }
        ];

        this.notifyPropertyChange('featuredStyles', this._featuredStyles);
    }

    get featuredStyles(): Array<any> {
        return this._featuredStyles;
    }

    async onAnalyze() {
        try {
            const imageAsset = await takePicture({
                width: 640,
                height: 640,
                keepAspectRatio: true,
                saveToGallery: false
            });

            if (imageAsset) {
                // TODO: Navigate to analysis page with the image
                console.log("Picture taken, starting analysis");
            }
        } catch (err) {
            console.error("Error taking picture:", err);
        }
    }

    onTryStyles() {
        // TODO: Navigate to style gallery
        console.log("Navigate to style gallery");
    }

    onTutorials() {
        // TODO: Navigate to AR tutorials
        console.log("Navigate to tutorials");
    }

    onProfile() {
        // TODO: Navigate to profile
        console.log("Navigate to profile");
    }
}