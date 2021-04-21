
import React from 'react'

import './FaceRecognition.css';

const FaceRecognition = ({box, imageUrl}) => {
    console.log(box);
    return (
        <div className="center ma">
            <div className='absolute mt2'>
                {imageUrl?<img id='inputImage' src={`${imageUrl}`} alt="random woman" width='500px' height='auto'/>:null}
                <div 
                    className="bounding-box" 
                    style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
                >
                </div>
            </div>
        </div>
    )
}

export default FaceRecognition

