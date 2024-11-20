import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import styles from './Totop.module.css';


const Totop = () => {
    const [scrY, setScrY] = useState(0);
    const [totopBtn, setTotoBtn] = useState(false);

    const scrTotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const btnFade = () => {
        setScrY(window.scrollY);
        scrY > 100 ? setTotoBtn(true) : setTotoBtn(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', btnFade);
        return () => {
            window.removeEventListener('scroll', btnFade);
        }
    }, [scrY])
    return (
        <div onClick={scrTotop} className={`icon ${styles.icon} ${totopBtn ? 'on' : ''}`}>
            <BsArrowUpShort />
        </div>
    )
}

export default Totop;