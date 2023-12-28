import './App.css'
import {Pizzas} from "./components/Pizzas/Pizzas.tsx";
import {MyHeader} from "./components/MyHeader/MyHeader.tsx";
import {MyFooter} from "./components/MyFooter/MyFooter.tsx";
import Container from "@mui/material/Container";

export const App = () => {
    // const popup = useSelector<AppRootStateType, boolean>(state => state.app.popup)

    return (
        <div className={'App'}>
            {/*{popup && <Popup/>}*/}
            <Container fixed>
                <MyHeader/>
                <Pizzas/>
                <MyFooter/>
            </Container>
        </div>
    )
}