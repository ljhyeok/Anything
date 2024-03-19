import Weapon from "./weapon.ts";

class Sword extends Weapon {
    constructor() {
        super("검")
    }
    
    stab() {
        console.log(`${this.name}으로 찔렀습니다.`);
    }
}

export default Sword;