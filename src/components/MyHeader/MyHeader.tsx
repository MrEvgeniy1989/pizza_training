import style from './myHeader.module.css'
import {NavBar} from "./NavBar/NavBar.tsx";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";

export const MyHeader = () => {
    const total = useSelector<AppRootStateType, number>(state => state.app.total)

    return (
        <div className={style.header}>
            <NavBar/>
            <div className={style.logo}>
                <div className={style.logoBlock}>
                    <img src="src/assets/imgs/logo/logo.png" alt="logo" className={style.logoImg}/>
                    <div className={style.logoText}>
                        Доставка пиццы <span style={{color: '#FF6900'}}>Смоленск</span>
                    </div>
                </div>
                <div>
                    {total
                        ? <Button variant={'contained'} className={style.buttonBasketWithTotal}>
                            <div>Корзина</div>
                            <div className={style.lineInButton}></div>
                            <div>{total}</div>
                        </Button>
                        : <Button variant={'contained'} className={style.buttonBasket}>Корзина</Button>
                    }

                </div>
            </div>
        </div>
    )
}