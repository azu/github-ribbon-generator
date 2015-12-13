// LICENSE : MIT
"use strict";
/*
    #emitChange
    #onChange
 */

import {EventEmitter} from "events";
export default class ChangeEmitter extends EventEmitter {
    emitChange(...args) {
        this.emit("change", ...args);
    }

    onChange(eventHandler) {
        this.on("change", eventHandler);
    }
    removeChange(eventHandler) {
        this.removeListener("change", eventHandler);
    }
}
