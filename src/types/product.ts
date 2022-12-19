import { Entity } from "./common";

export interface Product extends Entity {
    /* complete Product interface with some chosen properties */
    title: string;
    price: number;
    description: string;
    image: string[];
    available: boolean;
}

export interface Category{
    id: number;
    name: string;
    keyLoremSpace?: string;
    image: string
}
