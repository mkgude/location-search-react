import React from  "react";
import TextResults from "./TextResults"
import MapResults from "./MapResults"

function Results () {
    return (
        <div>
            <p>This is the results box where the two different kinds of results live.</p>
            <TextResults/>
            <MapResults/>
        </div>
    )
}
export default Results;