import React from 'react'
import './Header.css'

const HeaderTitle = () => {
  return (
    <div className={'HeaderTitle'}>
      <span>
        {' '}
        <strong>Lambda School</strong>
      </span>
      <span className='username'>@LambdaSchool · 26 Jan </span>
    </div>
  )
}

export default HeaderTitle
