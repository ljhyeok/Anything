class Weapon {
    name = "";
    
    constructor(name) {
        this.name = name;
    }

    swing() {
        console.log(`${this.name}을 휘둘렀습니다.`);
    }
    
}

export default Weapon;