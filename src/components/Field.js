import React from 'react';
import css from './css/Field.css';
import fieldImg from '../images/field.png';

import PlayerTooltip from './PlayerTooltip';

const Field = () => {
  return (
    <div className={css.default}>
      <img src={fieldImg} alt="Field" className={css.image}/>
      <PlayerTooltip number='10' name='Sadio Mane' img={'mane'} position={{top: '300px', left: '100px'}} />
      <PlayerTooltip number='11' name='Mohamed Salah' img={'salah'} position={{top: '66px', left: '100px'}} />
      <PlayerTooltip number='9' name='Roberto Firmino' img={'firmino'} position={{top: '186px', left: '45px'}} />
      <PlayerTooltip number='8' name='Naby Keita' img={'keita'} position={{top: '186px', left: '231px'}} />
      <PlayerTooltip number='14' name='Jordan Henderson' img={'henderson'} position={{top: '66px', left: '203px'}} />
      <PlayerTooltip number='7' name='James Milner' img={'milner'} position={{top: '300px', left: '203px'}} />
      <PlayerTooltip number='26' name='Andy Robertson' img={'robertson'} position={{top: '330px', left: '353px'}} />
      <PlayerTooltip number='66' name='Treant Alexander-Arnold' img={'taa'} position={{top: '30px', left: '353px'}} />
      <PlayerTooltip number='4' name='Virgil van Dijk' img={'vvd'} position={{top: '130px', left: '353px'}} />
      <PlayerTooltip number='12' name='Joe Gomez' img={'gomez'} position={{top: '250px', left: '353px'}} />
      <PlayerTooltip number='13' name='Alisson Becker' img={'alisson'} position={{top: '186px', left: '440px'}} />
    </div>
  );
}
export default Field;
