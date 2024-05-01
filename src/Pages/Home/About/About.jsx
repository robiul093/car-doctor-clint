import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"


const About = () => {
    return (
        <div className="hero lg:min-h-[600px] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="lg:w-1/2 relative">
                    <img src={person} className="max-w-md max-h-[470px] rounded-lg shadow-2xl" />
                    <img src={parts} className="max-w-xs max-h-80 rounded-lg shadow-2xl absolute right-6 top-1/2 border-8 border-white" />
                </div>
                <div className="lg:w-1/2 p-5">
                    <p className="text-[#FF3811] text-xl font-bold mb-5">About Us</p>
                    <h1 className="text-5xl font-bold text-[#151515] leading-[55px]">We are qualified <br /> & of experience <br /> in this field</h1>
                    <div  className="text-[#737373] font-normal space-y-5 py-7">
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p>
                            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                    <button className="btn bg-[#FF3811] text-white rounded-lg">Get More Info</button>
                </div>

            </div>
        </div>
    );
};

export default About;