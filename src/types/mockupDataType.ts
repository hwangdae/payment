export interface MerchandiseType {
    id: string;
    category: string;
    image:string;
    maker:string;
    description?:string;
    quantity: number;
    size:string;
    price: number;
  }

  export interface CouponType {
      id: string;
      label: string;
      disCount: number | undefined;
      disCountType: string | undefined;
  }