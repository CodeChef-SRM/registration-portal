import React, { useState } from 'react';
import LoadingContext from './LoadingContext';

const LoadingState = (props) => {


    const [loader, setLoader] = useState(false);

    const showLoader = () => {
        setLoader(true);
    }

    const closeLoader = () => {
        setLoader(false);
    }

    return (
        <LoadingContext.Provider value={{ loader, setLoader, showLoader, closeLoader }}>
            {props.children}
        </LoadingContext.Provider>
    )
}

export default LoadingState;