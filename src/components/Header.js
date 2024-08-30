import { useSelector } from "react-redux";
import logo from "../images/logo.png";
import userLogo from "../images/userLogo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";
import { clicked } from "../utils/gptSlice";



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.toggleButton);

  const [show, setShow] = useState(false);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        // An error happened.
        navigate("/err");
      });
  }

  const toggle = () => {
    setShow(!show);
  }

  const handleGPTSearch = () => {
    dispatch(clicked());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        console.log("user logged in");
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return (() => unsubscribe());
  }, []);

  return (
    <div className="absolute w-screen px-10 py-3 bg-gradient-to-b from-black z-10 flex flex-row justify-center md:flex-row justify-between ">
      <img src={logo} alt="logo" className=" w-32 md:w-44" />
      {user && (
        <div className="flex p-2">
          <button
            className="bg-purple-600 rounded-lg py-1 px-2 m-3 text-white"
            onClick={handleGPTSearch}
          >
            {showGptSearch ? "Home Page" : "Search"}
          </button>
          <div className="relative">
            <button onClick={toggle}>
              <img src={userLogo} alt="user" className="w-10 pt-2" />
            </button>
            {show && (
              <div className="absolute p-1 border bg-red-700 rounded w-20 -ml-5">
                <button onClick={handleSignOut} className="text-white">
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
