class SearchForm extends HTMLElement {
    constructor() {
        super();
        this.input = this.querySelector('input[type="search"]')
        this.resetButton = this.querySelector('button[type="reset"]')
        
        if (this.input) {
            this.input.addEventListener("input", debounce((event) => {
                this.onchange(event);
            }, 3000).bind(this))
        }
    }

    toggleResetButton() {
        const resetIsHidden = this.resetButton.classList.contains("hidden")
        if (this.input.value.length > 0 && resetIsHidden) {
            this.resetButton.classList.remove('hidden')
        } else if (this.input.value.length === 0 && !resetIsHidden) {
            this.resetButton.classList.add("hidden")
        }
    }

    onchange() {
        this.toggleResetButton();
    }

    shouldResetForm() {
        return !document.querySelector('[aria-selected="True"] a')
    }

    onformReset(event) {
        event.preventDefault();

        if (this.shouldResetForm()) {
            this.input.value = '';
            this.input.focus();
            this.toggleResetButton();
        }
    }
} 

customElements.define("search-form", SearchForm)