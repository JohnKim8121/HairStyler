import { Observable } from '@nativescript/core';
import { AR } from '@nativescript/ar';

export class TutorialViewModel extends Observable {
    private _currentStepIndex: number = 0;
    private _steps: Array<string>;
    private arView: AR;

    constructor() {
        super();
        this.initTutorial();
    }

    private initTutorial() {
        this._steps = [
            "Position your head in the frame",
            "Follow the guide for sectioning",
            "Start with the back section",
            "Move to the sides",
            "Final touches and styling"
        ];
        this.updateCurrentStep();
        this.initAR();
    }

    private async initAR() {
        try {
            this.arView = new AR();
            await this.arView.startPreview();
            this.loadStepOverlay(this._currentStepIndex);
        } catch (error) {
            console.error('AR initialization error:', error);
        }
    }

    private loadStepOverlay(stepIndex: number) {
        // Load AR overlay for current step
        console.log(`Loading overlay for step ${stepIndex}`);
    }

    get currentStep(): string {
        return this._steps[this._currentStepIndex];
    }

    get progress(): number {
        return ((this._currentStepIndex + 1) / this._steps.length) * 100;
    }

    get isLastStep(): boolean {
        return this._currentStepIndex === this._steps.length - 1;
    }

    get canGoPrevious(): boolean {
        return this._currentStepIndex > 0;
    }

    nextStep() {
        if (this._currentStepIndex < this._steps.length - 1) {
            this._currentStepIndex++;
            this.updateCurrentStep();
            this.loadStepOverlay(this._currentStepIndex);
        }
    }

    previousStep() {
        if (this._currentStepIndex > 0) {
            this._currentStepIndex--;
            this.updateCurrentStep();
            this.loadStepOverlay(this._currentStepIndex);
        }
    }

    private updateCurrentStep() {
        this.notifyPropertyChange('currentStep', this.currentStep);
        this.notifyPropertyChange('progress', this.progress);
        this.notifyPropertyChange('isLastStep', this.isLastStep);
        this.notifyPropertyChange('canGoPrevious', this.canGoPrevious);
    }

    onUnloaded() {
        if (this.arView) {
            this.arView.stopPreview();
        }
    }
}