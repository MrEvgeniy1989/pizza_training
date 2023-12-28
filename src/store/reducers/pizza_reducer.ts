import {v1} from "uuid";

type ActionType =
    | AddPizzaACType
    | ChangePizzaSizeACType
    | ChangePizzaPriceACType
    | ChangePizzaDoughACType

type AddPizzaACType = ReturnType<typeof addPizzaAC>
type ChangePizzaSizeACType = ReturnType<typeof changePizzaSizeAC>
type ChangePizzaPriceACType = ReturnType<typeof changePizzaPriceAC>
type ChangePizzaDoughACType = ReturnType<typeof changePizzaDoughAC>

export type PizzaSizeType = 'small' | 'medium' | 'large'
export type PizzaDoughType = 'traditional' | 'thin'
export type PizzaType = {
    id: string
    imgUrl: string
    title: string
    description: string
    ingredients: string[]
    sizes: PizzaSizeType
    dough: PizzaDoughType
    weight: number[]
    price: number
}

const InitialState: PizzaType[] = [
    {
        id: v1(),
        imgUrl: 'src/assets/imgs/pizzas/сырная.webp',
        title: 'Сырная',
        description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
        ingredients: ['моцарелла', 'чеддер', 'пармезан', 'соус альфредо'],
        sizes: 'small',
        dough: 'traditional',
        weight: [310, 470, 640],
        price: 289
    },
    {
        id: v1(),
        imgUrl: 'src/assets/imgs/pizzas/пепперони.webp',
        title: 'Пепперони',
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
        ingredients: ['пепперони', 'моцарелла', 'томаты', 'томатный соус'],
        sizes: 'small',
        dough: 'traditional',
        weight: [380, 590, 790],
        price: 299
    },
    {
        id: v1(),
        imgUrl: 'src/assets/imgs/pizzas/сырная.webp',
        title: 'Сырная',
        description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
        ingredients: ['моцарелла', 'чеддер', 'пармезан', 'соус альфредо'],
        sizes: 'small',
        dough: 'traditional',
        weight: [310, 470, 640],
        price: 289
    },
    {
        id: v1(),
        imgUrl: 'src/assets/imgs/pizzas/пепперони.webp',
        title: 'Пепперони',
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
        ingredients: ['пепперони', 'моцарелла', 'томаты', 'томатный соус'],
        sizes: 'small',
        dough: 'traditional',
        weight: [310, 470, 640],
        price: 299
    },
    {
        id: v1(),
        imgUrl: 'src/assets/imgs/pizzas/сырная.webp',
        title: 'Сырная',
        description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
        ingredients: ['моцарелла', 'чеддер', 'пармезан', 'соус альфредо'],
        sizes: 'small',
        dough: 'traditional',
        weight: [310, 470, 640],
        price: 289
    },
    {
        id: v1(),
        imgUrl: 'src/assets/imgs/pizzas/пепперони.webp',
        title: 'Пепперони',
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
        ingredients: ['пепперони', 'моцарелла', 'томаты', 'томатный соус'],
        sizes: 'small',
        dough: 'traditional',
        weight: [310, 470, 640],
        price: 299
    },
    {
        id: v1(),
        imgUrl: 'src/assets/imgs/pizzas/сырная.webp',
        title: 'Сырная',
        description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
        ingredients: ['моцарелла', 'чеддер', 'пармезан', 'соус альфредо'],
        sizes: 'small',
        dough: 'traditional',
        weight: [310, 470, 640],
        price: 289
    },
    {
        id: v1(),
        imgUrl: 'src/assets/imgs/pizzas/пепперони.webp',
        title: 'Пепперони',
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
        ingredients: ['пепперони', 'моцарелла', 'томаты', 'томатный соус'],
        sizes: 'small',
        dough: 'traditional',
        weight: [310, 470, 640],
        price: 299
    },
    {
        id: v1(),
        imgUrl: 'src/assets/imgs/pizzas/сырная.webp',
        title: 'Сырная',
        description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
        ingredients: ['моцарелла', 'чеддер', 'пармезан', 'соус альфредо'],
        sizes: 'small',
        dough: 'traditional',
        weight: [310, 470, 640],
        price: 289
    },
]

export const pizza_reducer = (state: PizzaType[] = InitialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-PIZZA': {
            return state
        }
        case "CHANGE-PIZZA-SIZE": {
            return state.map(pizza => pizza.id === action.id ? {...pizza, sizes: action.newSize} : pizza)
        }
        case "CHANGE-PIZZA-DOUGH": {
            return state.map(pizza => pizza.id === action.id ? {...pizza, dough: action.dough} : pizza)
        }
        case "CHANGE-PIZZA-PRICE": {
            return state.map(pizza => pizza.id === action.id ? {...pizza, price: action.price} : pizza)
        }
        default: {
            return state
        }
    }
}

export const addPizzaAC = () => ({type: 'ADD-PIZZA'} as const)
export const changePizzaSizeAC = (id: string, newSize: PizzaSizeType) => ({type: 'CHANGE-PIZZA-SIZE', id, newSize} as const)
export const changePizzaDoughAC = (id: string, dough: PizzaDoughType) => ({type: 'CHANGE-PIZZA-DOUGH', id, dough} as const)
export const changePizzaPriceAC = (id: string, price: number) => ({type: 'CHANGE-PIZZA-PRICE', id, price} as const)