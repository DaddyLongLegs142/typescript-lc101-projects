import { Payload } from "./Payload";

export class Astronaut implements Payload {
    name: string;
    constructor(massKg: number, name: string) {
        this.name = name;
        this.massKg = massKg;
    }
    massKg: number;
}