import React from 'react';

import './spinner.scss';

type Props = {
  positionClass: string,
  appearanceClass: string,
  sizeClass: string
}

const spinner = ({positionClass = 'centered', appearanceClass='spinner--main', sizeClass = 'spinner--medium'}: Props & any) => {
  return (
    <div className={`spinner ${positionClass} ${appearanceClass} ${sizeClass}`}>
      <div className='spinner__circle' />
    </div>
  );
};

export default spinner;