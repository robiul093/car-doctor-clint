import { useContext } from "react";
import img from "../../assets/images/login/login.svg"
import { AuthContext } from "../../Provider/AuthProvider";

const Registation = () => {

    const {createUser} = useContext(AuthContext)
    
    const handelSignUp = (e) =>{
        e.preventDefault();

        const form = e.target;
        
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => console.log(result))
        .catch(error => console.error(error))
    }
    
    
    return (
            <div className="hero-content flex justify-evenly">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handelSignUp} className="card-body">
                        <h2 className="text-4xl text-[#444444] font-semibold p-8 text-center">Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name"  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">
                                <input type="submit" value="Sign Up" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default Registation;