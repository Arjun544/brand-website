import React from 'react'
import Dec3 from '../assets/Dec3';
import CreateAccImage from '../assets/create-acc.png';
import SearchServicesImage from '../assets/search-services.png';
import SitEnjoyImage from '../assets/sit-enjoy.png';

const Work = () => {
    return (
      <div id='work' className="relative flex flex-col h-auto gap-0">
        <Dec3 />
        <span className="text-2xl font-medium text-center">How it works</span>
        <span className="text-xs font-medium text-center text-slate-400 tracking-wider">
          It’s about you and your family, having a comfortable payment,<br></br>
          exceptional service and a lender.
        </span>
        <div className="flex flex-col">
          {/* Create acc */}
          <div className="flex items-center justify-evenly mt-10">
            <img className="h-52" src={CreateAccImage} alt="create-acc" />
            <div className="flex flex-col gap-3">
              <span className="text-md">Create Account</span>
              <span className="text-xs font-medium text-slate-400 tracking-wider">
                we know your home is more than just a<br></br> place to live,
                that’s why we’re committed to<br></br> providing the best home
                loan
              </span>
            </div>
          </div>
          {/* Create acc */}
          <div className="flex items-center justify-evenly mt-10">
            <div className="flex flex-col gap-3">
              <span className="text-md">Search for services</span>
              <span className="text-xs font-medium text-slate-400 tracking-wider">
                It’s the fast, easy way to apply for your <br></br> mortgage and
                access your application <br></br> anytime, anywhere. With our
                mortgage <br></br> access center
              </span>
            </div>

            <img className="h-40" src={SearchServicesImage} alt="create-acc" />
          </div>
          {/* Sit and Enjoy */}
          <div className="flex items-center justify-evenly mt-10">
            <img className="h-40" src={SitEnjoyImage} alt="create-acc" />
            <div className="flex flex-col gap-3">
              <span className="text-md">Sit back and Enjoy</span>
              <span className="text-xs font-medium text-slate-400 tracking-wider">
                It’s about you and your family, having a <br></br> comfortable payment,
                exceptional service <br></br> and a lender.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Work
