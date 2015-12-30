class TreeStore {

    /*ngInject*/
    constructor(options = {}) {
        this._options = options;
    }

    get options() {
        return _options;
    }

    set options(options) {
        this._options = options;
    }
}

export default TreeStore;
