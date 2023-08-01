'use client'

import s from './styles.module.scss';

const Burger = ({ isOpen, setIsOpen }) => {
    console.log(isOpen);
    return (
        <button 
            type="button" 
            className={s.burger} 
            open={isOpen} 
            onClick={() => setIsOpen(!isOpen)}
        > 
            <div className={isOpen ? s.open : s.close}/>
            <div className={isOpen ? s.open : s.close}/>
            <div className={isOpen ? s.open : s.close}/>
        </button>
    );
}

export default Burger;