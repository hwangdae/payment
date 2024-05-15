import { atom } from "recoil";

export const categoryState = atom({
    key : 'categoryState',
    default : 'all'
})

export const merchandisesState = atom({
    key: 'merchandisesState',
    default : []
})