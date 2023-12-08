"use client";

import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "@/lib/firebase-config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { signOut } from "firebase/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";


export default function SignInButton() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        return;
      }

      fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          console.log(response);
          setIsLogged(true);
        }
      });
    });
  }, []);

  function signIn() {
    signInWithRedirect(auth, provider);
  }
  async function signOutUser() {
    await signOut(auth);
    const response = await fetch("/api/signOut", {
      method: "POST",
    });
    if (response.status === 200) {
      setIsLogged(false);
    }
  }
  const user = auth.currentUser || "";
  return (
    <>
      {isLogged ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none select-none">
            <Avatar>
              <AvatarImage src={user.photoURL} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-10 mt-1">
            <DropdownMenuLabel>
              {user.displayName}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={signOutUser}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button onClick={signIn}>Sign In</Button>
      )}
    </>
  );
}