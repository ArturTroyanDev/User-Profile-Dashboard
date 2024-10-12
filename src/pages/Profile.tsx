import { useLayoutEffect, useMemo } from "react";
import { UserProfileProps } from "../types";

function Profile({user}: UserProfileProps) {
    useLayoutEffect(() => {
    // Perform some layout effect after rendering
        console.log('User Profile Rendered')
    }, [])

    const userInfo = useMemo(() => ({
      id: user.id,
      name: user.name,
      email: user.email
    }), [user])

      return (
        <div>
          <p>ID: {userInfo.id}</p>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
        </div>
      );
    }
    
  export default Profile;