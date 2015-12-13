// LICENSE : MIT
"use strict";
import { defaultOptions } from "../util/ribbon";
import ChangeEmitter from "./ChangeEmitter";
class UserStore extends ChangeEmitter {
    constructor() {
        super();
        this.state = {
            repositoryURL: "",
            position: defaultOptions.position,
            color: defaultOptions.color
        };
    }

    setState(state) {
        Object.assign(this.state, {}, state);
        this.emitChange();
    }

    getState() {
        return Object.assign({}, this.state);
    }

    setRepositoryURL(repositoryURL) {
        this.setState({repositoryURL});
    }

    setPosition(position) {
        this.setState({position});
    }

    setColor(color) {
        this.setState({color});
    }
}
const emitter = new UserStore();
export default emitter;