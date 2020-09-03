class BaseComponent extends HTMLElement {
    props;
    state;
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
        this.props = {};
        this.state = {};
    }

    connectedCallback() {
        this.render();
        this.componentDidMount();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.props[name] = newValue;
        this.render();
        this.componentDidUpdate();
    }

    disconnectedCallback() {
        this.componentWillUnmount();
    }

    setState(newState) {
        this.state = newState;
        this.render();
        this.componentDidUpdate();
    }

    /**
     * In HTML ra man hinh
     * Gan su kien cho cac the ben trong component
     */
    render() {

    }

    /**
     * Duoc goi sau khi component duoc sinh ra
     * Goi 1 lan duy nhat
     */
    componentDidMount() {

    }

    /**
     * Duoc goi sau khi props hoac state duoc thay doi, sau khi render
     */
    componentDidUpdate() {

    }

    /**
     * Duoc goi truoc khi component bien mat
     */
    componentWillUnmount() {

    }
}

export {BaseComponent};