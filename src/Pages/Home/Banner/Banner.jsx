import img1 from "../../../assets/images/homeCarousel/1.jpg"
import img2 from "../../../assets/images/homeCarousel/2.jpg"
import img3 from "../../../assets/images/homeCarousel/3.jpg"
import img4 from "../../../assets/images/homeCarousel/4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full rounded-2xl " />

                <div className="absolute transform -translate-y-1/2 top-1/2  bg-gradient-to-r from-[#151515F] to-[#15151500] w-full h-full">
                    <div className="md:w-[600px] p-24 space-y-7 gap-5 text-white">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className="text-lg font-normal">
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div className="">
                            <button className="btn text-lg font-semibold mr-5 text-white bg-[#FF3811] border-0">Discover More</button>
                            <button className="btn text-lg font-semibold text-white bg-transparent border-[#FF3811] border-2">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-2xl " />
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-2xl " />
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-2xl " />
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0 gap-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;