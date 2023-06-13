class FacetFilterForm extends HTMLElement {
    constructor() {
        super();
        this.onActiveFilterClick = this.onActiveFilterClick.bind(this)

        this.debounceOnSubmit = debounce((event) => {
            this.onsubmitHandler(event);
        }, 500);

        const facetForm = this.querySelector("form");
        facetForm.addEventListener("input", this.debounceOnSubmit.bind(this));

        const facetWrapper = this.querySelector("FacetsWrapperDesktop");
        if (facetWrapper) facetWrapper.addEventListener("keyup", this.onKeyUpEscape);
    }

    static setLister() {
        
    }
}