import {PizzaType} from "../../../store/reducers/pizza_reducer.ts";
import {FC} from "react";
import style from './pizza.module.css'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setPopup} from "../../../store/reducers/app-reducer.ts";
import {AppRootStateType} from "../../../store/store.ts";
import {Popup} from "../../Popup/Popup.tsx";

type PropsType = {
    pizza: PizzaType
}

export const Pizza: FC<PropsType> = ({pizza}) => {
    const popup = useSelector<AppRootStateType, boolean>(state => state.app.popup)
    const dispatch = useDispatch()

    const onClickSetPopupHandler = () => dispatch(setPopup(true))

    return (
        <Grid item key={pizza.id} className={style.pizza} xs={6} sm={4} md={3}>
            {popup && <Popup pizza={pizza}/>}
            <Paper elevation={24} className={style.paperPizza}>
                <div>
                    <img src={pizza.imgUrl} alt={pizza.title} className={style.img}/>
                </div>
                <div className={style.title}>{pizza.title}</div>
                <div className={style.description}>{pizza.description}</div>
                <footer className={style.footer}>
                    <div className={style.price}>от {pizza.price} ₽</div>
                    <Button variant={'contained'} className={style.button} onClick={onClickSetPopupHandler}>Выбрать</Button>
                </footer>
            </Paper>
        </Grid>
    )
}