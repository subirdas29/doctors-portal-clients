
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data =>
    console.log(data)

    return (
        <div className='flex justify-center items-center h-[600px]'>
            <div className='w-96 p-7'>
                <p className='text-center text-5xl font-bold'>Login</p>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="text" {...register("email", { required: "Email Address is required" })} placeholder="Email" className="input input-bordered w-full" />
                        {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        <input type="password" {...register("password",{ required: "Password is required",minLength: { value: 6, message: "password must be 6 character or longer" } })} placeholder="Password" className="input input-bordered w-full " />
                    </div>
                    <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                        {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
                    <input type="submit" className='btn btn-accent w-full mt-4' value='Login' />
                </form>
                <p className='mt-3 text-center'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create New Account</Link></p>
                <div className="divider my-6">OR</div>
                <button type="submit" className='btn btn-outline w-full '>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;