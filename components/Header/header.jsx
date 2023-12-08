"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { auth } from "@/lib/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SignInButton from "../Signin/signin";

const Header = () => {
        return (
            <header className="flex justify-between m-6 mb-0">
                <div>
                    <Link href={"/"}>
                        <h2 className="font-bold text-4xl select-none cursor-pointer ">
                            S<span className="text-violet-500">.</span>
                        </h2>
                    </Link>
                </div>
                <div>
                    <SignInButton/>
                </div>
            </header>
        )
    };

    export default Header;