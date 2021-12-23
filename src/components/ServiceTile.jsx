import React from 'react'

const ServiceTile = ({service}) => {
    return (
      <div className="flex flex-col items-center justify-evenly h-60 w-auto mr-4 bg-white hover:shadow-md hover:cursor-pointer hover:rounded-md">
        <img className="h-12 w-12" src={service.icon} alt="icon" />
        <span className="">{service.title}</span>
        <div className="w-72">
          <p className="text-xs text-slate-400 tracking-wider text-center align-text-top">{service.desc}</p>
        </div>
      </div>
    );
}

export default ServiceTile
