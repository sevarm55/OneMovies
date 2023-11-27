import s from "./BurgerBox.module.css";
const BurgerBox = ({ getBurgerMenu, setIsBurgerActive }) => {
    document.body.onclick = () => {
        setIsBurgerActive(false);
    };
    
    return (
        <div className={s.burgerBox}>
            <div
                className={s.burgerSpan}
                onClick={(e) => {
                    e.stopPropagation();
                    getBurgerMenu();
                }}
            >
                <span className={`${s.line} ${s.line1}`}></span>
                <span className={`${s.line} ${s.line2}`}></span>
                <span className={`${s.line} ${s.line3}`}></span>
            </div>
        </div>
    );
};

export default BurgerBox;
