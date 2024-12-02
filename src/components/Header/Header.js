import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
import Profile from "./Profile";
const Header = ()=>{
    return (
    <div className="flex flex-row justify-between bg-gray-600 p-4">
       <Logo/>
       <div className="flex flex-row justify-between gap-3">
       <Search/>
       <Cart/>
       <Profile/>  
       </div>
    </div>
    )
}

export default Header;