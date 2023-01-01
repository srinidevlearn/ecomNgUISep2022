export interface ICartDetails {
    quantity?:   number;
    created_at?: Date;
    updated_at?: Date;
    product?:    Product;
    id?:         string;
}

export interface Product {
    id?:          string;
    name?:        string;
    image?:       string;
    description?: string;
    price?:       number;
}
