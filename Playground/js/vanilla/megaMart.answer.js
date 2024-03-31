/**
 * 쇼핑몰 기능 중 장바구니 기능 구현
 * 
 * 구매 합계가 20달러 이상이면 무료 배송, 따라서 장바구니에 물품 금액의 합계가 20달러면 상품 옆에 무료 배송 아이콘을 표시
 */

var shopping_cart = [];
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function update_shipping_icons() {
  var buttons = get_buy_buttons_dom();
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var item = button.item;
    if (gets_free_shipping(shopping_cart_total, item.price))
      button.show_free_shipping_icon();
    else
      button.hide_free_shipping_icon();
  }
}

function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total));
}

function add_item(cart, name, price) {
  var new_cart = cart.slice();
  new_cart.push({
    name,
    price
  });
  return new_cart;
}

function calc_total(cart) {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}

function gets_free_shipping(total, item_price) {
  return item_price + total >= 20;
}

function calc_tax(amount) {
  return amount * 0.10;
}