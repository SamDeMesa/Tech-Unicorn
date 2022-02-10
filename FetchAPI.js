import React from 'react'

function FetchAPI(){

const apiGet = () => {
        fetch('https://api.sampleapis.com/futurama/episodes')
        .then(response => response.json())
        .then(json => console.log(json))
    }

    return(
        <div>
            

            <button onClick={apiGet}>Click Here</button>
        </div>
    )
}

export default FetchAPI