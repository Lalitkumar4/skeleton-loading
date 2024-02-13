import { useState, useEffect } from "react"
import SkeletonProfile from "./skeletons/SkeletonProfile"

const User = () => {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("http://jsonplaceholder.typicode.com/users/1")
      const data = await res.json()
      setProfile(data)
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="user">
      <h2>User Details</h2>

      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && loading && <SkeletonProfile theme="light" />}
    </div>
  )
}

export default User
