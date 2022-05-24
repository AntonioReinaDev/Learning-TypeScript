"use strict";
function viewError(error, code) {
    throw { error: error, code: code };
}
;
viewError("error server", 500);
//used for errors
