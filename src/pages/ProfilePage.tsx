import { useLayoutEffect } from "react"
import { UserProfileProps } from "../types"
import Profile from "./Profile"
import { User } from "../models/User"
import { Button } from "../components/Button/Button"
import { useNavigate } from "react-router-dom"

function ProfilePage() {
  const navigate = useNavigate();
  const mockUser = new User(1, 'Vladyslav', 'vladrealgmail.com', { theme: 'light;'})


  return (
    <>
      <h2>Users Dashboard</h2>
      <Profile user={mockUser}/>
      <Button onClick={() => navigate('/', {replace: false})}>Back home</Button>
    </>
  )

}
export default ProfilePage

