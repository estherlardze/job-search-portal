const ReachOut = () => {
  return (
    <div className="mx-4 rounded-2xl  px-4 shadow-2xl lg:w-2/3 ">
      <div className="mx-auto mb-20 md:w-2/3 lg:w-full">
        <form>
          <div className="mb-8 mt-16 flex flex-col items-center gap-8 sm:flex-row">
            <div className="w-full">
              <label
                htmlFor="firstname"
                className="text-headingcolor w-full text-lg"
              >
                Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Your Name"
                className="mt-2 block w-full rounded-lg border border-slate-200 py-4 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor="firstname"
                className="text-headingcolor w-full text-lg"
              >
                Email
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Email Address"
                className="mt-2 block w-full rounded-lg border border-slate-200 py-4 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-8 flex flex-col items-start gap-8 sm:flex-row">
            <div className="w-full">
              <label
                htmlFor="lastname"
                className="text-headingcolor w-full text-lg"
              >
                Phone number
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="+00 123 456 789"
                className="mt-2 block w-full rounded-lg border border-slate-200 py-4 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastname" className=" w-full text-lg">
                Subject
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Demo Services"
                className="mt-2 block w-full rounded-lg border border-slate-200 py-4 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-8 w-full">
            <label
              htmlFor="message"
              className="text-headingcolor w-full text-base"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="9"
              className="mt-2 block w-full rounded-lg border border-slate-200 py-4 text-slate-500 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
            >
              Type your message...
            </textarea>
          </div>
          <div className="mx-auto inline-flex w-36 rounded-lg border">
            <input
              type="submit"
              value="Send Message"
              className=" inline-block w-full cursor-pointer rounded-lg border-blue bg-blue py-3 font-medium text-white outline-none "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReachOut;
