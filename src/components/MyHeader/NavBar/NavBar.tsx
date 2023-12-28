import style from './navBar.module.css'
import Button from "@mui/material/Button";
export const NavBar = () => {
    return (
        <div className={style.navBar}>
            <div className={style.links}>
                <a href="">О нас</a>
                <a href="">Контакты</a>
            </div>
            <div>
                <Button variant={'contained'} color={'inherit'} className={style.loginButton}>Войти</Button>
            </div>
        </div>
    )
}