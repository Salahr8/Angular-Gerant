import { Client } from "./client.model";
import { Reclamation } from "./reclamation.model";

export interface Commande{
    id:number;
    client:Client;
    reclamation:Reclamation;
}