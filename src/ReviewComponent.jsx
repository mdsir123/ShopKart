import React, { useState } from 'react'

const ReviewComponent = ({obj,index,setShowIdx,showIdx})=>{

    let {reviewerName, rating, comment} = obj
    


    return (
        <div className="w-3/4 mx-auto rounded-2xl ">
                <div className="titleBox h-14 bg-gray-600 text-gray-950 rounded-2xl flex justify-between items-center mt-1 px-4 ">
                <p>{reviewerName}</p> <p onClick={() => showIdx == index? setShowIdx(null) :setShowIdx(index)} className='cursor-pointer'>🔽</p>
                </div>
                { showIdx == index?
                    <div className="comment h-12 bg-gray-400 text-black rounded-2xl flex justify-between items-center pl-7 pr-3">
                    <p>{comment}</p> <p>{rating}⭐</p>
                    </div>: <></>
                }
            </div>
    )
}

export default ReviewComponent