import {BiHomeAlt} from "react-icons/bi"
import {GoDatabase} from "react-icons/go"
import {GrTransaction} from "react-icons/gr"
import {CiBank} from "react-icons/ci"
import {FiPercent} from "react-icons/fi"
import {IoMdBook} from "react-icons/io"
import {AiOutlineClockCircle} from 'react-icons/ai'

const Items = [
    {
      title: "Home",
      icon: BiHomeAlt ,
    },
    {
      title: "Master data",
      icon: GoDatabase ,
    },
    {
      title: "Transaction",
      icon: GrTransaction ,
    },
    {
      title: "Cash & Bank",
      icon: CiBank ,
    },
    {
      title: "GST Return",
      icon: FiPercent ,
    },
    {
      title: "TDS & TCS",
      icon: FiPercent ,
    },
    {
        title: "REPORT",
        icon: IoMdBook ,
      },
      {
        title: "Financial report",
        icon: IoMdBook ,
      },
      {
        title:"DAY END",
        icon:AiOutlineClockCircle
      }
  ];
  
  export default Items;
  