import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
   fetch("service.json")
   .then(res=>res.json())
   .then(data=> setServices(data) )
    }, []);
    return (
        <div>
             <h2 className='text-4xl text-secondary text-center my-12'> Our Course : {services.length}</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-auto lg:px-60 p-0'>
                {
                    services.map(service => <Service 
                        key={service._id}
                        service={service}
                    ></Service>)
                }
             </div>
        </div>
    );
};

export default Services;