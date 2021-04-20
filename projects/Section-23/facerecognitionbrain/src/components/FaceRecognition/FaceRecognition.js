
import React from 'react'

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className="center">
            {imageUrl?<img src={`${imageUrl}`} alt="random woman" style={{height: "300px", width: "300px"}}/>:null}
        </div>
    )
}

export default FaceRecognition

