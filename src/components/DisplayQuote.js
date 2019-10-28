import React from 'react'

function DisplayQuote ({simpson}) {
    return(
        <div>
            <img src={simpson.image} alt=''/>
            <p>{simpson.character}</p>
            <p>{simpson.quote}</p>
        </div>
    )
}
export default DisplayQuote