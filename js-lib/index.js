import Text from "./Text";

class abTextParser_Class {
    constructor() {

    }

    parse(text, ignoreLeadingSpaces = true) {
        let t = new Text(text, ignoreLeadingSpaces);

        return t.parts;
    }
}
const abTextParser = new abTextParser_Class();
export default abTextParser;