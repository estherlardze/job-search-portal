import React from 'react'
import { dribble, facebook, pinterest, webflow, linkedin } from "../../../assets/index";
import { Link } from 'react-router-dom';
import './slider.css'

const Slider = () => {
  return (
    <div className="slider">
        <div className="slide-track">
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={facebook} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={dribble} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={linkedin} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={webflow} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={pinterest} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={facebook} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={dribble} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={linkedin} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={webflow} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={pinterest} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={facebook} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={linkedin} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={webflow} height="100" width="100" alt="" />
            </Link>
        </div>
        <div className="slide mx-10 grid place-content-center">
            <Link>
            <img src={dribble} height="100" width="100" alt="" />
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Slider