const ShowToastEventName = 'lightning__showtoast';

export class ShowToastEvent extends CustomEvent {
    constructor() {
        super(ShowToastEventName, {
            composed: true,
            cancelable: true,
            bubbles: true,
        });
    }
}

export const foo = "foo";