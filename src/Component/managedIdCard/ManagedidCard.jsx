import React from 'react'
import "./managedIdcard.scss"

function ManagedidCard({ ptext, icon }) {
  return (
    <div className='managedidCard'>
      <ul className='managedidCard_content' >
        <li  className={`${icon} icon`  }>
        </li>
        <li className='ptext'>
          {ptext}
        </li>
      </ul>

    </div>
  )
}

export default ManagedidCard