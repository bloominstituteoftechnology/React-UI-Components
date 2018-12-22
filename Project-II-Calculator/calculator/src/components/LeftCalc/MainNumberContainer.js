import React from 'react';
import ButtonRow from '../ButtonComponents/ButtonRow'

const MainNumberContainer = _ => (
<div className="main-number-cont">
  <ButtonRow range={[7,8,9]} className='num-row' />
  <ButtonRow range={[4,5,6]} className='num-row middle-row' />
  <ButtonRow range={[1,2,3]} className='num-row' />
</div>
)

export default MainNumberContainer;