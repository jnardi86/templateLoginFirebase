import React from 'react'
import { useAuth } from '../../../auth/hooks/useAuth'

const UserProfile = () => {

  const { logout, user } = useAuth()

  const handleLogout = () => logout();

  return (
    <>
      <div>{`Bienvenido ${user?.email}`}</div>
      <button onClick={handleLogout} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Logout
      </button>
    </>


  )
}

export default UserProfile