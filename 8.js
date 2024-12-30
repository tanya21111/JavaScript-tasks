// 1. Ссылки для меню сайта с переходом на товары
function createLinkGenerator(category) {
    const baseUrl = "http://myshop.ru/";
    return function (productId) {
        return `${baseUrl}${category}/${productId}`;
    };
}

const createPCLink = createLinkGenerator("PC");
const createNotebooksLink = createLinkGenerator("Notebooks");
const createMonitorLink = createLinkGenerator("Monitors");

console.log(createPCLink(1001));
console.log(createNotebooksLink(4004));
console.log(createMonitorLink(345));

// 2. Информация о заказе с использованием call
let orders = [
    { fio: "Ivan", tovar: "phone", price: 10000, quantity: 2 },
    { fio: "Peter", tovar: "usb", price: 2300, quantity: 5 },
    { fio: "Mary", tovar: "connector", price: 100, quantity: 100 },
];

function printOrderSummary() {
    this.orders.forEach(order => {
        const total = order.price * order.quantity;
        console.log(`Заказ покупателя ${order.fio} составил: ${total}`);
    });
}

printOrderSummary.call({ orders });

// 3. Добавление скидки с использованием call
function printOrderSummaryWithDiscount(discountPercent) {
    this.orders.forEach(order => {
        const total = order.price * order.quantity;
        const discountedTotal = total * (1 - discountPercent / 100);
        console.log(`Заказ покупателя ${order.fio} составил: ${discountedTotal.toFixed(2)} (со скидкой ${discountPercent}%)`);
    });
}

printOrderSummaryWithDiscount.call({ orders }, 10);

// 4. Модификация wrapperA
function Menu(...navList) {
    this.navList = navList;
    this.wrapperA = function (anchorTexts) {
        return this.navList.map((elem, index) => {
            const anchorText = anchorTexts[index] || "item";
            return `<a href='${elem}'>${anchorText}</a>`;
        });
    };
}

let mainMenu = new Menu("home.html", "services.html", "price.html", "about.html");
console.log(mainMenu.wrapperA(["Home", "Services", "Pricing", "About"]));

let footerMenu = new Menu("newPage.html", "checkPage.html", "seoPage.html");
console.log(footerMenu.wrapperA(["New Page", "Check Page", "SEO Page"]));
