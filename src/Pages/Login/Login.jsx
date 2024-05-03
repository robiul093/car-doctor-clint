import { useContext } from "react";
import img from "../../assets/images/login/login.svg"
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { userLogin } = useContext(AuthContext)

    const handelSigiIn = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userLogin(email, password)
            .then(result => console.log(result))
            .catch(error => console.error(error))
    }

    return (
        <div className="hero-content flex justify-evenly">
            <div className="text-center lg:text-left">
                <img src={img} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <form onSubmit={handelSigiIn} className="card-body">
                    <h2 className="text-4xl text-[#444444] font-semibold p-8 text-center">Login</h2>
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
                        <button className="btn bg-[#FF3811]">
                            <input type="submit" value="Sign In" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;