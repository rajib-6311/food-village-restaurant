import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigation = useNavigate()


    // const handleRegisterSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post(`${import.meta.env.VITE_API_URL}/users`, {
    //         firstName,
    //         lastName,
    //         email,
    //         password
    //     })
    //         .then(result => console.log(result))
    //         .catch(err => console.log(err))
    // };
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/register`, {
            firstName,
            lastName,
            email,
            password
        })
            .then(result => {
                console.log('User registered:', result.data);
                // Optionally show success message or navigate
                navigation('/login')
            })
            .catch(err => {
                console.error('Registration failed:', err);
            });
    };


    return (
        <div className="min-h-screen bg-[linear-gradient(115deg,_#9F7AEA,_#FEE2FE)] py-30 text-black">
            <div className="container mx-auto">
                <div className="w-8/12 bg-white mx-auto rounded-lg flex">
                    {/* Left side with image */}
                    <div className="w-1/2 bg-[url(https://i.ibb.co/sJ9hjHV5/3d.jpg)] rounded-lg flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center p-12">
                        <h1 className="text-white text-5xl font-bold pb-3">Welcome</h1>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                            assumenda hic molestias laudantium obcaecati, quasi dolore rem
                            optio explicabo impedit iure, aliquam, quod facilis officiis.
                        </p>
                    </div>

                    {/* Right side with form */}
                    <div className="w-1/2 p-6">
                        <h1 className="text-2xl font-bold pb-2">Register</h1>
                        <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing.</p>

                        <form onSubmit={handleRegisterSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="first-name"
                                    className="border border-gray-500 py-1 px-2"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="last-name"
                                    className="border border-gray-500 py-1 px-2"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="border border-gray-500 py-1 px-2 w-full mt-5"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="border border-gray-500 py-1 px-2 w-full mt-5"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>


                            <div className="mt-5 flex items-center gap-3">
                                <input type="checkbox" />
                                <span>Lorem ipsum dolor sit amet consectetur?</span>
                            </div>

                            <div className="mt-5">
                                <button
                                    type="submit"
                                    className="w-full bg-purple-500 py-3 text-center text-white cursor-pointer"
                                >
                                    Register Now
                                </button>
                            </div>
                        </form>

                        <p className="mt-4">
                            Already have an account?{" "}
                            <Link to="/login" className="text-purple-600 underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
