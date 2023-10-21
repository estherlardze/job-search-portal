import React from 'react';
import { logo } from '../../assets/index';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';

const transition = 'transition-all ease-in-out duration-500';
const Footer = () => {
  return (
    <footer className="bg-blue/5">
      <div className='mx-[5%] mt-[50px] w-[90%] pt-10 lg:mx-[10%] lg:w-[80%]'>
      <section className="mb-8 flex gap-8 flex-wrap lg:flex-nowrap">

        <article className="w-full sm:w-2/4 lg:w-1/4" data-aos="fade-right" data-aos-duration="2000">
          <img src={logo} alt="logo" className="w-[100px] sm:w-[180px]" />
          <p className="my-6 text-lg font-semibold text-gray">
            It is a long esta fact that a reader wil dist by the real cont of a
            page when
          </p>
          <div className="mr-2 flex items-center gap-2 border-r border-white/70">
            <FaFacebookF
              size={44}
              className={`${transition} rounded-full bg-gray/10 p-3 text-gray hover:mt-[-10px] hover:bg-blue hover:text-white`}
            />
            <AiOutlineTwitter
              size={44}
              className={`${transition} rounded-full bg-gray/10 p-3 text-gray hover:mt-[-10px] hover:bg-blue hover:text-white`}
            />
            <FaLinkedinIn
              size={44}
              className={`${transition} rounded-full bg-gray/10 p-3 text-gray hover:mt-[-10px] hover:bg-blue hover:text-white`}
            />
            <AiOutlineInstagram
              size={44}
              className={`${transition} rounded-full bg-gray/10 p-3 text-gray hover:mt-[-10px] hover:bg-blue hover:text-white`}
            />
          </div>
          <div className="group mt-4 flex cursor-pointer items-center gap-1 text-blue">
            <p className="text-xl font-semibold">Webflow Template</p>
            <BsArrowRightShort
              size={30}
              className={`${transition} group-hover:ml-2`}
            />
          </div>
        </article>

        <article className=" w-full sm:w-2/4 lg:w-1/4" data-aos="fade-left" data-aos-duration="2000">
          <h3 className="text-xl font-bold">Main Pages</h3>
          <Link to="/">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Home
            </p>
          </Link>
          <Link to="/about">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              About Us
            </p>
          </Link>
          <Link to="/blogs">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Blog Pages
            </p>
          </Link>
          <Link to="/contact">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Contact Page
            </p>
          </Link>
          <Link to="/styles">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Docs
            </p>
          </Link>
          <Link to="/jobs">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Services
            </p>
          </Link>
        </article>

        <article className="w-full sm:w-2/4 lg:w-1/4" data-aos="fade-right" data-aos-duration="2000">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <Link to="/signup">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Sign Up
            </p>
          </Link>
          <Link to="*">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              404 Pages
            </p>
          </Link>
          <Link to="/password">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Password Safe
            </p>
          </Link>
          <Link to="/license">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Licenses
            </p>
          </Link>
          <Link to="/changelog">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Changelog
            </p>
          </Link>
          <Link to="/styles">
            <p
              className={`${transition} my-1 text-lg font-semibold text-gray hover:text-blue`}
            >
              Style Guide
            </p>
          </Link>
        </article>

        <article className="w-full sm:w-2/4 lg:w-1/4" data-aos="fade-left" data-aos-duration="2000">
          <h3 className="text-xl font-bold">Contact Info</h3>
          <p className="my-1 text-lg font-semibold text-gray">
            Phone:+00 123 456 789
          </p>
          <p className="my-1 text-lg font-semibold text-gray">
            Emaildemomail@gmail.com
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="my-1 text-lg font-semibold text-gray">
              It is a long esta fact that a reader wil dist by the real cont of
              a page when
            </p>
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-[80%] rounded-sm border border-gray px-4 py-0 outline-none"
            />
            <BsArrowRightShort
              size={50}
              className={`${transition} rounded-sm bg-blue px-2 text-white hover:bg-black`}
            />
          </div>
        </article>
      </section>
      <hr className="border border-gray/30" />
      <p className="my-6 text-center text-sm font-semibold text-black/80 sm:text-xl">
        Copyright © Careari - Design by
        <Link to="https://webflow.com/?r=0" className="hover:text-blue">
          {' '}
          WebliWeb
        </Link>
        - Powered by Webflow.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
