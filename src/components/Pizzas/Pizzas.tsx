import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {PizzaType} from "../../store/reducers/pizza_reducer.ts";
import {Pizza} from "./Pizza/Pizza.tsx";
import style from './pizzas.module.css'
import Grid from "@mui/material/Grid";


export const Pizzas = () => {
    const pizzas = useSelector<AppRootStateType, PizzaType[]>(state => state.pizzas)
    return (
        <div className={style.pizzas}>

                <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {pizzas.map(pizza => {
                        return (
                            <Pizza key={pizza.id} pizza={pizza}/>
                        )
                    })}
                </Grid>

        </div>
    )
}