import Person from "./person.ts";
import Sword from './sword.ts';

const person = new Person();
person.setWeapon(new Sword());
person.useWeapon().swing();