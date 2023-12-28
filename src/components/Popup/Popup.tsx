import {useDispatch} from "react-redux";
import {setPopup} from "../../store/reducers/app-reducer.ts";
import style from './popup.module.css'
import {changePizzaDoughAC, changePizzaSizeAC, PizzaType} from "../../store/reducers/pizza_reducer.ts";
import {FC} from "react";
import Button from "@mui/material/Button";
import {ButtonGroup} from "@mui/material";

type PropsType = {
    pizza: PizzaType
}

export const Popup: FC<PropsType> = ({pizza}) => {
    const dispatch = useDispatch()

    const onClickSetPopupHandler = () => dispatch(setPopup(false))

    const onClickChangePizzaSizeSmall = () => {dispatch(changePizzaSizeAC(pizza.id, 'small'))};
    const onClickChangePizzaSizeMedium = () => {dispatch(changePizzaSizeAC(pizza.id, 'medium'))};
    const onClickChangePizzaSizeLarge = () => {dispatch(changePizzaSizeAC(pizza.id, 'large'))};
    return (
        <div>
            <div onClick={onClickSetPopupHandler} className={style.modalBackdrop}></div>
            <div className={style.modal}>
                <div className={style.img}>
                    <img src={pizza.imgUrl} alt={pizza.title}/>
                </div>
                <div className={style.info}>
                    <div>
                        <div className={style.title}>{pizza.title}</div>
                        <div className={style.totalInfo}>
                            {`${pizza.sizes === 'small'
                                ? 25
                                : pizza.sizes === 'medium'
                                    ? 30
                                    : 35} см, ${pizza.dough === 'traditional'
                                ? 'традиционное'
                                : 'тонкое'} тесто, ${pizza.sizes === 'small'
                                ? pizza.weight[0]
                                : pizza.sizes === 'medium'
                                    ? pizza.weight[1]
                                    : pizza.weight[2]} г`
                            }
                        </div>

                        <div className={style.description}>{pizza.description}</div>
                        <ButtonGroup variant={"contained"} color={'inherit'} className={style.buttonGroupSize}>
                            <Button
                                className={pizza.sizes === 'small' ? `${style.MuiButton} ${style.ActiveButton}` : `${style.MuiButton}`}
                                onClick={onClickChangePizzaSizeSmall}>Маленькая</Button>
                            <Button
                                className={pizza.sizes === 'medium' ? `${style.MuiButton} ${style.ActiveButton}` : `${style.MuiButton}`}
                                onClick={onClickChangePizzaSizeMedium}>Средняя</Button>
                            <Button
                                className={pizza.sizes === 'large' ? `${style.MuiButton} ${style.ActiveButton}` : `${style.MuiButton}`}
                                onClick={onClickChangePizzaSizeLarge}>Большая</Button>
                        </ButtonGroup>
                        <ButtonGroup variant={"contained"} color={'inherit'} className={style.buttonGroupDough}>
                            <Button
                                className={pizza.dough === 'traditional' ? `${style.ActiveButton}` : ``}
                                onClick={() => {dispatch(changePizzaDoughAC(pizza.id, 'traditional'))}}
                            >Традиционное</Button>
                            <Button
                                className={pizza.dough === 'thin' ? `${style.ActiveButton}` : ``}
                                onClick={() => {dispatch(changePizzaDoughAC(pizza.id, 'thin'))}}
                            >Тонкое</Button>
                        </ButtonGroup>
                    </div>
                    <div className={style.addItemToCartDiv}>
                        <Button variant={'contained'} className={style.addItemToCart}>Добавить в корзину за {pizza.price} ₽</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}