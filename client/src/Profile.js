import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from "react";
import { update } from './reduxComponents/me/meSlice'

function Profile() {
    const me = useSelector((state) => state.me.value)
    const dispatch = useDispatch()

  return (
  <div>
    <p>Profile id: {me.id?me.id:"logged out"}</p>
    <p>Username: {me.username?me.username:"logged out"}</p>
  </div>
  )
}

export default Profile;