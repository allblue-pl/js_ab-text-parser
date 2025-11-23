'use strict';

class abTextParser_Class
{

    constructor()
    {

    }

    parse(text, ignoreLeadingSpaces = true)
    {
        let
            Text = require('./Text')
        ;

        let t = new Text(text, ignoreLeadingSpaces);

        return t.parts;
    }

}
module.exports = new abTextParser_Class();