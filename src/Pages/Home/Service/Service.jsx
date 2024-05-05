import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {

    const [services, setServices] = useState([]);
    console.log(services);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div>
            <div className="text-center space-y-5 my-10">
                <h2 className="text-xl font-bold text-[#FF3811]">Service</h2>
                <h2 className="text-5xl font-bold text-[#151515]">Our Service Area</h2>
                <p className="text-[#737373] font-normal md:w-[700px] mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Service;