import js0 from "js0";
import Text from "./Text";

export default class Parser {
    constructor(text) {
        js0.args(arguments, Text);

        this.text = text;
    }

    error(message, line) {
        throw new Error('Line: ' + line + '. ' + message);
    }

    finish() {
        this.text.finishParser(this);
    }

    read(c, i, line) {
        return this.__read(c, i, line);
    }


    __check(c, i, line) { js0.virtual(this); }
    __read(c, i, line) { js0.virtual(this); }
}