import React from 'react'

const AuthLayout = ({childern , authentication = true}) => {
  return (
    <div>
      {childern}
    </div>
  )
}

export default AuthLayout
