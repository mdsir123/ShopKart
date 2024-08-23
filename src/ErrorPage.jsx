import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    let error = useRouteError()
    console.log(error)
    return (
        <div>
            
            {`ERROR : ${error.status}`}
        </div>
    )
}

export default ErrorPage