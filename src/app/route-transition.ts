import { trigger, query, style, animate, transition } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
    // We want to animate transition from any state
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, scale: 1 }),
        ], { optional: true }),
        query(':leave', [
            animate('0.25s', style({ opacity: 0, scale: 1 })),
        ], { optional: true }),
        query(':enter', [
            animate('0.25s', style({ opacity: 1, scale: 1 })),
        ], { optional: true }),
    ])
])