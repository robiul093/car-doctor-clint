import { FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {

    const { service_id, title, img, price, description, facility } = service

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl space-y-5">
            <figure><img src={img} alt="Service img" /></figure>
            <div className="card-body flex flex-col">
                <h2 className="card-title text-xl text-[#444444] font-bold">{title}</h2>
                <div className="flex justify-between flex-grow text-xl items-center text-[#FF3811]">
                    <div className="flex gap-5 font-bold text-[#FF3811]">
                        <p>Price:</p>
                        <p>${price}</p>
                    </div>
                    <FaLongArrowAltRight />
                </div>
            
            </div>
        </div>
    );
};

export default ServiceCard;