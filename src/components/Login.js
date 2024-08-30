import Header from "./Header";
import background from "../images/background.jpg"
import { useState, useRef } from "react";
import { checkValidateData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { updateProfile } from "firebase/auth";
const Login = () => {

    const [signIn, setSignIn] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [message, setMessage] = useState(null);


    const handleButtonClick = () => {
        const msg = checkValidateData(email.current.value, password.current.value);
        setMessage(msg);
        if (message) return;
        if (!signIn)
        {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed up
                  const user = userCredential.user;
                  updateProfile(user, {
                      displayName: name.current.value,
                    photoURL: "https://example.com/jane-q-user/profile.jpg",
                  })
                    .then(() => {
                        // Profile updated!
                    })
                    .catch((error) => {
                      // An error occurred
                        setMessage(error.message);
                    });
                  
              })
              .catch((error) => {
                const errorCode = error.code;
                  const errorMessage = error.message;
                  setMessage(errorCode + errorMessage);
              });

        }
        else
        {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                  const user = userCredential.user;
                  console.log(user);
              })
              .catch((error) => {
                const errorCode = error.code;
                  const errorMessage = error.message;
                  setMessage(errorCode +"-"+ errorMessage);
              });
        }

    }



    const handleClick = () => {
        setSignIn(!signIn);
    }

    return (
      <div>
        <Header />
        <div className="absolute">
          <img
            src={background}
            alt="background-image"
            className="h-screen object-cover md:w-screen"
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-6 my-44 absolute bg-black  text-white rounded-lg bg-opacity-75 md:w-4/12 px-12 py-10 my-36 mx-auto right-0 left-0"
        >
          <h1 className="font-bold text-3xl px-2 py-4">
            {signIn ? "Sign In" : "Sign Up"}
          </h1>
          {!signIn && (
            <input
              ref={name}
              type="Text"
              placeholder="Full Name"
              className="p-2 m-2 w-full bg-gray-700"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 m-2 w-full bg-gray-700"
          ></input>
          <input
            ref={password}
            type="text"
            placeholder="Password"
            className="p-2 m-2 w-full bg-gray-700"
          ></input>
          <p className="text-red-600 p-2">{message}</p>
          <button
            className="p-3 mx-2 my-5 bg-red-700 w-full"
            onClick={handleButtonClick}
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="cursor-pointer" onClick={handleClick}>
            {signIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registered Sign in now"}{" "}
          </p>
        </form>
      </div>
    );
}
export default Login;