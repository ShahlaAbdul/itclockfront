import React from 'react'
import "./managedid.scss"
import ManagedidCard from '../managedIdCard/ManagedidCard'


function ManagedId() {
  return (
    <div className=' managed_card'>
        <ManagedidCard icon={"fa-solid fa-house"} ptext={"Industries & Manufacturing"}></ManagedidCard>
        <ManagedidCard icon={"fa-solid fa-cart-shopping"} ptext={"Industries & Manufacturing"}></ManagedidCard>
        <ManagedidCard icon={"fa-solid fa-plane"}  ptext={"Industries & Manufacturing"}></ManagedidCard>
        <ManagedidCard icon={"fa-solid fa-hat-cowboy"}  ptext={"Industries & Manufacturing"}></ManagedidCard>
    </div>
  )
}

export default ManagedId