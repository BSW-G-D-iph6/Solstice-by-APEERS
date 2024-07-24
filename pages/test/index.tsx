// import React from "react";
// import { useAppSelector } from "../store";

// const AuthViewer = () => {
//     const authState = useAppSelector((state) => state.auth.authState);
//     return (
//         <div className="flex gap border border-1 border-black p-20">
//             You are now {authState ? "Logged  In" : "Logged Out"}
//         </div>
//     );
// };
// export default AuthViewer;


import React from "react";
import { setAuthState, removefrombasket, addtobasket, removelast } from "../../store/authslice";
import { useAppDispatch, useAppSelector } from "../../store";
const AuthUpdater = () => {


    const authState = useAppSelector((state) => state.auth.authState);

    const dispatch = useAppDispatch();
    return (
        <div>
            <button onClick={() => dispatch(addtobasket({ id: '100d' }))}>Log in</button>
            <button onClick={() => dispatch(removelast())}>Log out</button>

            {authState.map((i) => `${i.id}`)}
        </div>
    );
};
export default AuthUpdater;