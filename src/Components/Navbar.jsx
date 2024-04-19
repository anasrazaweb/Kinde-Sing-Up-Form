import React from 'react'
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => {
    return (
        <div className=' flex justify-center items-center bg-black text-white p-4 gap-10'>
            <LoginLink>Sign in</LoginLink>
            <RegisterLink>Sign up</RegisterLink>
            <LogoutLink>Log out</LogoutLink>
        </div>
    )
}

export default Navbar