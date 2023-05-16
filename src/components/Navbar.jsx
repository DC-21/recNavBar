import React from 'react'

const Navbar = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"Blog",link:"/"},
        {name:"Services",link:"/"},
        {name:"About",link:"/"},
    ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-900">
            <span className="text-2xl text-black-600 mr-1 pt-2 "><ion-icon name="play-circle-outline"></ion-icon></span>
        DiCE
        </div>
        <ul className="md:flex md:items-center">
            {
                Links.map((link)=>(
                    <li>
                        <a href={link.link} className="text-gray-900 text-lg font-semibold px-4 py-2 hover:bg-gray-200 rounded-md">{link.name}</a>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
