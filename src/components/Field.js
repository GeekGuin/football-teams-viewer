import React from 'react';
import css from './css/Field.css';
import fieldImg from '../images/field.png';

import PlayerTooltip from './PlayerTooltip';

const Field = () => {
  return (
    <div className={css.default}>
      <img src={fieldImg} alt="Field" className={css.image}/>
      <PlayerTooltip number='10' name='Sadio Mane' position={{top: '300px', left: '100px'}} />
      <PlayerTooltip number='11' name='Mohamed Salah' position={{top: '66px', left: '100px'}} />
      <PlayerTooltip number='9' name='Roberto Firmino' position={{top: '186px', left: '45px'}} />
      <PlayerTooltip number='8' name='Naby Keita' position={{top: '186px', left: '231px'}} />
      <PlayerTooltip number='14' name='Jordan Henderson' position={{top: '66px', left: '203px'}} />
      <PlayerTooltip number='7' name='James Milner' position={{top: '300px', left: '203px'}} />
      <PlayerTooltip number='26' name='Andy Robertson' position={{top: '330px', left: '353px'}} />
      <PlayerTooltip number='66' name='Treant Alexander-Arnold' position={{top: '30px', left: '353px'}} />
      <PlayerTooltip number='4' name='Virgil van Dijk' position={{top: '130px', left: '353px'}} />
      <PlayerTooltip number='12' name='Joe Gomez' position={{top: '250px', left: '353px'}} />
      <PlayerTooltip number='13' name='Alisson Becker' position={{top: '186px', left: '440px'}} />
    </div>
  );
}
export default Field;