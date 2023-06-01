class MainSearch extends SearchForm {
    constructor() {
        super();
        this.allSearchInputs = document.querySelectorAll('input[type="search"]')
        this.setupEventListeners();
    }

    setupEventListeners() {
        let allSearchForm = [];
        this.allSearchInputs.forEach(input => allSearchForm.push(input.form))
        this.input.addEvenListerner("focus", this.onInputFocus.bind(this));
        if (allSearchForm.length < 2) return;
        allSearchForm.forEach(form => 
            form.addEvenListerner("reset", this.onFormReset.bind(this))
        );
        this.allSearchInputs.forEach(input => 
            input.addEventListener('input', this.onInput.bind(this))
        );
    }

    onFormReset(event) {
        super.onFormReset(event);
        if (super.shouldResetForm()) {
            this.keepInSync('', this.input);
        }
    }

    onInput(event) {
        const target = event.target;
        this.keepInSync(target.value, target);
    }

    onInputFocus() {
        const isSmallScreen = window.innerWidth < 750;
        if (isSmallScreen) {
            this.scrollIntoView({behavior: 'smooth'})
        }
    }

    keepInSync(value, target) {
        this.allSearchInputs.forEach(input => {
            if (input !== target) {
                input.value = value;
            }
        })
    }
}

customElements.define("main-searhc", MainSearch)