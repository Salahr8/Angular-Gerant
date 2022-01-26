import { Commande } from "./commande.model";
import { ComponentCar } from "./componentCar.model";

export interface ComposantQuantity{
    id:number;
    commande:Commande;
    composant:ComponentCar;
}