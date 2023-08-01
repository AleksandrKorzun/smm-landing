'use client'

import Image from "next/image";
import Burger from "../burger";
import s from './styles.module.scss';
import { useState } from "react";

const Header = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    return (
        <header className={s.header}>
            <a href="#">
                <Image width={90} height={55} src='./images/mob/logo.png'/>
            </a>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
        </header>
    );
}

export default Header;