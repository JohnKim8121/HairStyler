import { EventData, View } from '@nativescript/core';
import { StyleCardViewModel } from './style-card-view-model';

export function onLoaded(args: EventData) {
    const view = args.object as View;
    view.bindingContext = new StyleCardViewModel();
}