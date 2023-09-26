"use client"; // This is a client component
import {IoLogoWhatsapp} from 'react-icons/io'
import Link from "next/link";

import style from '../All.module.css'
export default function Whatsapp() {

    
    return (
        <div className={style.whatsapp}>
            <Link href='https://wa.me/919454531891' target="_blank" rel="noopener noreferrer"
              
            >
                {/* <div  onClick={()=>{
                    window.open('wa.me/919454531891', '_blank');
                }}> */}
                <IoLogoWhatsapp />
            {/* </div> */}
            </Link>
        </div>
    )
}