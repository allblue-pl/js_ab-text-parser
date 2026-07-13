import js0 from "js0";
import Parser from "../Parser";
import Text from "../Text";
import FieldParser from "./FieldParser";

export default class FieldArgsParser extends Parser {

    static IsStart(c, i, line) {
        return c === '(' ? 1 : 0;
    }


    constructor(text, fieldParser) {
        js0.args(arguments, Text, FieldParser);
        super(text);

        this.fieldParser = fieldParser;

        this.args = '';
    }

    __read(c, i, line) {
        let step;

        if (c === ')') {
            this.fieldParser.args = this.args;
            this.finish();

            if (i + 1 >= this.text.content.length && !this.fieldParser.escaped) {
                if (this.name !== '') {
                    this.fieldParser.finish();
                    this.fieldParser.addField();
                }
            }

            return 1;
        }

        this.args +=c;
        return 1;
    }
}