import { Categorie } from "./categorie";

export interface ComponentCar{
    id:number;
    name:string;
    description:string;
    price:number;
    type:string;
    picture:string;
    discount:number;
    quantity:number;
    numberPersonRate:number;
    numberRate:number;
    Componentname:string;
    categories:Categorie[];
}