'use client'

import Image from "next/image";
import s from './styles.module.scss';

const HeroSection = () => {
    return (
        <section className={s.heroSection}>
            <Image 
                width={360} 
                height={698} 
                src='./images/mob/hero-left.jpg'
                className={s.heroImage}
            />
            <Image 
                width={360} 
                height={698} 
                src='./images/mob/hero-right.jpg'
                className={s.heroImage}
            />
        </section>
    );
}

export default HeroSection;