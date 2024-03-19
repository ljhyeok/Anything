import Hand from "./hand.ts";

class Person {
    weapon = new Hand();
    
    setWeapon(weapon) {
        this.weapon = weapon;
    }
    useWeapon() {
        console.log(`${this.weapon.name}를 사용했습니다.`);
        return this.weapon;
    }
}

export default Person;