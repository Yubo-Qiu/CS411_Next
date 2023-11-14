import React from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

const Userbar = () => {
    const { user, googleSignIn, logOut } = UserAuth();

    const handleSignIn = async () => {
        try {
          await googleSignIn();
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <div>Userbar</div>
    )
}