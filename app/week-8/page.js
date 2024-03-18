"use client";

import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";


const LandingPage = () => {
  // Use the useUserAuth hook to get user authentication status and functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Function to handle signing out
  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  // Render the landing page content based on user authentication status
  return (
    <div>
        <h1 className="text-4xl font-bold border-b pb-5 pl-2 pt-5 fixed top-0 w-full bg-black shadow-md">Shopping List App 🛒</h1>
      {user ? ( // If user is logged in
        <>
          <p className="pt-20">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Logout</button>
          <br />
          <Link href="/week-8/shopping-list">Go to Shopping List</Link>
        </>
      ) : ( // If user is not logged in
        <button className="pt-20" onClick={gitHubSignIn}>Login with GitHub</button>
      )}
    </div>
  );
};

// Export the LandingPage component as the default export
export default LandingPage; 
