'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function User() {
    const params = useParams();
  return (
    <div>Welcome <span></span>{params.userid}</div>
  )
}

export default User;