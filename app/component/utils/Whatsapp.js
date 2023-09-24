import {IoLogoWhatsapp} from 'react-icons/io'
import Link from "next/link";
import style from '../All.module.css'
export default function Whatsapp() {
    return (
        <div className={style.whatsapp}>
            <Link href={'#'}>
            <IoLogoWhatsapp />
            </Link>
        </div>
    )
}