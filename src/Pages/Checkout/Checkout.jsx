import { useContext, } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { logEvent } from "firebase/analytics";

const Checkout = () => {

    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const { _id, img, title, price } = service;

    const handelBooking = (e) =>{
        e.preventDefault()
        const form = e.target;
        
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        const booking = {
            customerName : name,
            email, 
            date,
            price,
            service : title,
            img
        }

        console.log(booking);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
        
    }

    return (
        <div>
            <h2>Checkou:{title}</h2>
            <form onSubmit={handelBooking} className="card-body w-2/3 mx-auto">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName}  placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
                        
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;