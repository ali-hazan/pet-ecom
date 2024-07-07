export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
}
export interface ICartItem extends IProduct {
  qty: number;
}

export interface IDiscount {
  code: string;
  value: number;
  isPercentage: boolean;
}
