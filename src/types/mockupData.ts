export interface MerchandiseType {
    id: string;
    category: string;
    image:string;
    maker:string;
    description:string;
    quantity: number | undefined;
    price: number;
  }