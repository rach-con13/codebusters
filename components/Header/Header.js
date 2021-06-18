
import React, { useState,useEffect } from "react";
import Firebase from "../../firebase/firebase.config"

import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  // set up basic example that shows different header when user is logged in
  const [user,setUser] = useState(null);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        setUser(user.email);
      } else {
        setUser(null);
      }
    })
  },[user])

  const logoutUser = () => {
    Firebase.auth().signOut().then(() => {
      console.log('signed out');
    }).catch((error) => {
      console.log('error');
    })
  }

    return (
        <header className="w-10/12 mx-auto lg:w-9/12">
          <div  className={styles.headerInner}>
            <h1 className={styles.headerTitle}>Codebusters</h1>
            <nav className={styles.nav}>
        {user ? 
          (
            <>
            <p>{user}</p>
            <p onClick={logoutUser} className="ml-4">Logout</p>
            </>
          ) : (
            <>
            <Link href="/login">
              <p className={` ${styles.navItem} `}>Login</p>
              </Link>
            <Link href='/signup'>
              <p className={` ${styles.navItem}`}>Sign Up</p>
            </Link>
            </>
          )
        }
            </nav>
          </div>
        </header>
    )
}