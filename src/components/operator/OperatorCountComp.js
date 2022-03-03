import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react";

// Prime components
import { Button } from "primereact/button";

export const OperatorCountComp = observer((props) => {
    /*
    Variables
    */
    const [serviceCount, setServiceCount] = useState(0);
    /*
    Init
    */
    useEffect(() => {
        loadAvailables();
    }, []);

    /*
    Context  
    */

    /*
    Formats
    */

    /*
    Methods
    */
    const loadAvailables = () => { 
        handleCountServices(props.services);
    };
    const handleCountServices = (services) => {
        let count = 0;
        services.map( key =>{
            count = count + key.quantity;
        });
        setServiceCount(count);
    }
    /*
    Inner Components
    */

    /*
    Return
    */
    return (
        <>
            {serviceCount}
        </>
    );
});