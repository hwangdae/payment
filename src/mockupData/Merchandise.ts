import shortid from "shortid";

interface MerchandiseType {
    id: string;
    name:string;
    quantity:number;
    price:number
}

export const merchandise = [{
    id:shortid.generate(),
    image:"BIGTshirt.jpg",
    name:"BIG 티셔츠",
    quantity:1,
    price:22900,
}]