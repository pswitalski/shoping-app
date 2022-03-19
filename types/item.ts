import { User } from './user';

export interface Item {
    _id?: string;
    name: string;
    quantity: number;
    unit: string;
    author?: User;
}