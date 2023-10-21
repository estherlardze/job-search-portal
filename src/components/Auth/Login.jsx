import { Link } from 'react-router-dom';
import {BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
  return (
    <div >
      <div className=" mx-1 mt-8 ">
        <div className=" flex justify-center">
          <form className="mx-4 w-full sm:w-96 space-y-4 lg:md:space-y-4">
            <label htmlFor="username" className="block text-xl font-semibold">
              User Name
            </label>
            <input
              id="username"
              placeholder="User Name"
              className=" w-full rounded-lg px-4 py-4 text-xl font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
            />

            <label htmlFor="password" className="block text-xl font-semibold ">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className=" w-full rounded-lg px-4 py-4 text-xl font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
            />
            <div className="flex justify-center">
              <button className="mt-4 block rounded-full bg-blue px-8 py-4  font-semibold text-white transition-all duration-500 ease-in-out hover:bg-black lg:md:px-16">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-8 pt-8">
          <p className="text-center font-black">Or Sign Up With</p>
          <div className="flex justify-center gap-4">
            <BsFacebook size={21} className='text-blue cursor-pointer'/>
            <FcGoogle size={21}/>
            <BsLinkedin size={21} className='text-blue cursor-pointer'/>
            <BsTwitter size={21} className='text-blue cursor-pointer'/>
          </div>
          <Link to="/signup">
            <p className="text-center font-bold text-blue mt-8"> Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
