export interface IProductTable{
    id: string,
    name: string,
    image: string,
    description: string,
    isAvailable: boolean,
    category: string,
    manufacturer: string,
    price: number
}

export interface IUpdateProductTable{
    id: string,
    name?: string,
    image?: string,
    description?: string,
    isAvailable?: boolean,
    category?: string,
    manufacturer?: string,
    price?: number
}

export interface IAddNewProductTable{
    name?: string,
    image?: string,
    description?: string,
    isAvailable?: boolean,
    category?: string,
    manufacturer?: string,
    price?: number
}

export interface IShoppingInfo extends IProductTable{
    qty:number;
    cartId?:string;
}


