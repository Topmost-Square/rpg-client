import {KeyPressListener} from "./KeyPressListener";

export class TextMessage {
    text = '';
    onComplete = null;
    element = null;

    setText(text) {
        this.text = text;
    }

    setOnComplete(onComplete) {
        this.onComplete = onComplete;
    }

    createElement() {
        this.element = document.createElement('div');
        this.element.classList.add('TextMessage');

        this.element.innerHTML = (`
            <p class="TextMessage_p">${this.text}</p>
            <button class="TextMessage_button">Next</button>
        `);

        this.element.querySelector('button').addEventListener('click', () => {
            this.done();
        });

        this.actionListener = new KeyPressListener('Enter', () => {
            this.actionListener.unbind();
            this.done();
        });
    }

    done() {
        this.element.remove();
        this.onComplete();
    }

    init(container) {
        this.createElement();
        container.appendChild(this.element);
    }
}