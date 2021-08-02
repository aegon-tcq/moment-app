import React from 'react';
import MicIcon from '../../assets/icons/Mic.svg';
import CelebrationIcon from '../../assets/icons/Hat.svg';
import ExhibitionIcon from '../../assets/icons/Pencil.svg';
import PartyIcon from '../../assets/icons/Glass.svg';
import NetworkingIcon from '../../assets/icons/Handshake.svg';
import WorkshopIcon from '../../assets/icons/Workshop.svg';

export const _iconsData = (index = 0, style = {}) => {
  switch (index) {
    case 0:
      return <MicIcon style={style} />;
    case 1:
      return <CelebrationIcon style={style} />;
    case 2:
      return <ExhibitionIcon style={style} />;
    case 3:
      return <PartyIcon style={style} />;
    case 4:
      return <NetworkingIcon style={style} />;
    case 5:
      return <WorkshopIcon style={style} />;
    default:
      return <MicIcon style={style} />;
  }
};
