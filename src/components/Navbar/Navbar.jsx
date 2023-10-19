import React, {useState} from 'react';
import {logo, hand, flag, dots} from '../../assets/index'
import { Link } from 'react-router-dom';
import {MdKeyboardArrowDown, MdMenu} from 'react-icons/md'
import {AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai'
import {IoCall} from 'react-icons/io5'
import {FaLinkedinIn} from 'react-icons/fa'
import Catdropdown from './Catdropdown';
import PagesDropdown from './PagesDropdown';

const smallscreen = "gap-6 justify-start flex flex-col lg:hidden bg-white z-20 h-[100vh] w-[200px] sm:w-[300px] absolute left-0 top-0 px-4 py-4 transition-transform duration-300 ease-in-out"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [option, setOption] = useState('english')

  const handleSelect = (e) => {
   setOption(e.target.value)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const togglePages = () => {
    setPageOpen(!pageOpen);
  }

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <nav className='relative w-[100%]'>
      <article className='flex justify-between bg-[#0a0d33] items-center  px-4 text-white/75 py-4 font-semibold'>
         <div className='hidden lg:flex gap-4 '>
           <p className='flex gap-2'><AiOutlineInstagram size={25}/> 20k followers</p>
           <p className='flex gap-2'><AiFillFacebook size={24}/> 20k followers</p>
           <p className='flex gap-2'><IoCall size={22}/> +00 123 456 789</p>
         </div>
         <div className='flex justify-center gap-4 mx-auto'>
           <img src={hand} alt="wave" />
           <p className='text-center'>Largest Job portal Website</p>
         </div>
         <div className='hidden lg:flex'>
           <div className='flex gap-2 items-center border-r border-white/70 mr-2'>
             <AiFillFacebook size={25}/>
             <AiOutlineTwitter size={25}/>
             <FaLinkedinIn size={25}/>
             <AiOutlineInstagram size={25} className='mr-2'/>
           </div>
           <div className='flex gap-2'>
             <img src={flag} alt="flag" />
             <select value={option} onChange={handleSelect} className='text-white border-0 outline-none bg-transparent'>
              <option value="english" className='text-black font-semibold'>English</option>
              <option value="french" className='text-black font-semibold'>French</option>
              <option value="spanish" className='text-black font-semibold'>Spanish</option>
             </select>
           </div>
         </div>
      </article>

      <div className='flex justify-between py-6 shadow-xl  px-4'>
        <div className='flex gap-4'>
          <img src={logo} alt="logo" className='w-[100px] sm:w-[180px]'/>
          <div className='flex bg-black/5 gap-2 cursor-pointer px-2 sm:px-5 rounded-md items-center' onClick={toggleDropdown}>
            <img src={dots} alt="dots" className='hidden sm:block'/>
            <div>
             <p className=' text-gray font-semibold sm:text-lg'>Category</p>
             <Catdropdown isOpen={isOpen}/>
            </div>    
          </div>
         </div>

        <div className='gap-6 items-center hidden lg:flex'>
          <Link to='/' className='font-semibold hover:text-blue'>Home</Link>
          <Link to='/about' className='font-semibold hover:text-blue'>About</Link>
          <Link to='/blog' className='font-semibold hover:text-blue'>Blog</Link>
          <div  onClick={togglePages}>
            <div className='flex cursor-pointer hover:text-blue'>
              <span className='font-semibold'>
               Pages
              </span>
             <MdKeyboardArrowDown size={20} className='mt-1'/>
            </div>
            <PagesDropdown pageOpen={pageOpen}/>
          </div>

         <Link to='/contact' className='font-semibold hover:text-blue'>Contact </Link>
          <div className='flex gap-4'>
            <button className='font-semibold text-blue hover:text-white border hover:bg-blue rounded-3xl border-blue py-2 px-3 transition-all ease-in-out duration-500'>
              Login/Register
            </button>
            <Link to='/post'>
            <button className='font-semibold text-white bg-blue hover:bg-black rounded-3xl py-2 px-3 transition-all ease-in-out duration-500'>
              Job Post
            </button>
            </Link>
         </div>  
       </div> 

       <div className='block lg:hidden bg-gray/10 p-2 rounded-md focus:bg-blue' onClick={toggleMenu}>
          <MdMenu size={30}/>
       </div>       
     </div>

     { menu && (
      <div className={smallscreen}>
      <Link to='/' className='font-semibold'>Home</Link>
      <Link to='/about' className='font-semibold'>About</Link>
      <Link to='/blogs' className='font-semibold'>Blog</Link>
      <div  onClick={togglePages}>
        <div className='flex cursor-pointer justify-between'>
          <span className='font-semibold'>
           Pages
          </span>
         <MdKeyboardArrowDown size={20} className='mt-1'/>
        </div>
        <PagesDropdown pageOpen={pageOpen}/>
      </div>

     <Link to='/contact' className='font-semibold'>Contact </Link>
      <div className='flex gap-4 flex-col'>
        <button className='font-semibold text-blue hover:text-white border hover:bg-blue rounded-3xl border-blue py-2 px-3 transition-all ease-in-out duration-500 w-fit'>
          Login/Register
        </button>
        <Link to='/post'>
        <button className='font-semibold text-white bg-blue hover:bg-black rounded-3xl py-2 px-3 transition-all ease-in-out duration-500 w-fit'>
          Job Post
        </button>
        </Link>
     </div>  
     <div className='flex gap-4 flex-col font-semibold text-black/75 text-lg mt-8'>
       <p className='flex gap-2'><AiOutlineInstagram size={25}/> 20k followers</p>
       <p className='flex gap-2'><AiFillFacebook size={24}/> 20k followers</p>
       <p className='flex gap-2'><IoCall size={22}/> +00 123 456 789</p>
      </div>
      <div className='flex gap-2'>
        <img src={flag} alt="flag" />
        <select value={option} onChange={handleSelect} className='text-black text-lg font-semibold border-0 outline-none bg-transparent'>
        <option value="english" className='text-sm'>English</option>
        <option value="french" className='text-sm'>French</option>
        <option value="spanish" className='text-sm'>Spanish</option>
        </select>
      </div>
   </div> 
     )}
     
    </nav>
  )
}

export default Navbar