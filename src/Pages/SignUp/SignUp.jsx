import { Navbar,Footer } from "../../components";

const SignUp = () => {
  return (
    <div className="w-[100%] overflow-hidden">
      <Navbar />
      <div className=" my-20 mx-1 ">
        <p className="lg:md:capitalize text-blue text-center font-bold mb-4">
          SIGN UP
        </p>
        <h2 className="text-black/90 font-semibold lg:md:sm:text-6xl text-4xl text-center">
          Create Account
        </h2>

        <div className="flex justify-center mt-12">
          <form className="lg:md:space-y-4 space-y-4 w-96 mx-4">
            <label htmlFor="username" className="font-semibold text-xl block">
              User Name
            </label>
            <input
              id="username"
              placeholder="User Name"
              className=" rounded-lg text-xl py-4 px-4 w-full font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
            />
            <label htmlFor="email" className="font-semibold block text-xl">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className=" rounded-lg text-xl py-4 px-4 w-full font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
            />
            <label htmlFor="password" className="font-semibold text-xl block ">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className=" rounded-lg text-xl py-4 px-4 w-full font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue"
            />
            <label
              htmlFor="confirmPassword"
              className="font-semibold block text-xl"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder=" Confirm Password"
              className="  rounded-lg text-xl py-4 px-4 w-full font-light placeholder-black
              ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue
              "
            />

            <div className="lg:md:sm:flex lg:md:sm:justify-between mb-8">
              <div>
                <input
                  id="check"
                  type="checkbox"
                  className="border-gray border rounded  py-4 px-4"
                />
                <label htmlFor="check" className="font-semibold text-xl mx-1">
                  I agree with the{" "}
                </label>
              </div>
              <a href="#" className=" font-semibold text-xl  text-blue ">
                Terms & Conditions
              </a>
            </div>

            <button className="block bg-blue font-semibold text-white lg:md:px-16 px-8  py-4 mt-4 rounded-full hover:bg-black transition-all ease-in-out duration-500">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SignUp;
