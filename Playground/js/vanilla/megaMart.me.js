/**
 * 쇼핑몰 기능 중 장바구니 기능 구현
 * 
 * 구매 합계가 20달러 이상이면 무료 배송, 따라서 장바구니에 물품 금액의 합계가 20달러면 상품 옆에 무료 배송 아이콘을 표시
 * 
 * 배운 것들
 * 1. Proxy 객체를 이용해서 AOP 구현
 * 2. Object.defineProperty을 이용한 observable 패턴 구현
 * 3. 순수함수 구현 중요성 (내가 구현한 건 부수효과 및 상태 값 의존)
 */
const sampleItems = Array.from(Array(5)).map((_, index) => ({
  id: index,
  name: `상품 ${index + 1}`,
  price: Math.floor(Math.random() * 10) + 1
}))
const cart = ShoppingCart();
cart.add(sampleItems[2]);
cart.add(sampleItems[4]);
cart.add(sampleItems[1]);
cart.add(sampleItems[1]);
cart.add(sampleItems[3]);
cart.substract(sampleItems[2]);

function ShoppingCart() {
  let totalPrice = 0;
  let isFreeShipping = false;
  const itemList = [];
  const setFreeShippingIcon = () => {
    isFreeShipping = totalPrice >= 20;
    console.log(`배송::${isFreeShipping ? '무료' : '유료'}`);
    // TODO: 무료배송 일때만, dom update
    return isFreeShipping;
  }
  const handler = {
    apply(target, thisArg, argumentsList) {
      console.log(itemList);
      console.log(`총 금액::${totalPrice}`);
      setFreeShippingIcon();
      return Reflect.apply(target, thisArg, argumentsList);
    }
  }
  const updateCartProxy = new Proxy(() => {}, handler);
  return {
    add(target) {
      totalPrice += target.price;
      itemList.push(target);
      return updateCartProxy();
    },
    substract(target) {
      totalPrice -= target.price;
      const targetIndex = itemList.findIndex(item => target.id === item.id);
      if (targetIndex !== -1) itemList.splice(targetIndex, 1);
      return updateCartProxy();
    }
  }
}