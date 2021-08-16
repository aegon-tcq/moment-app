import React from 'react';
import Pencil from "../../assets/icons/Pencil.svg"
import TicketBig from "../../assets/icons/TicketBig.svg";
import DressCode from "../../assets/icons/DressCode.svg";
import Vendor from "../../assets/icons/Vendor.svg";


export const _iconsData = (index = 0, style = {}) => {
  switch (index) {
    case 0:
      return <Pencil style={style} />;
    case 1:
      return <TicketBig style={style} />;
    case 2:
      return <Vendor style={style} />;
    case 3:
      return <DressCode style={style} />;
    default:
      return <Pencil style={style} />;
  }
};
