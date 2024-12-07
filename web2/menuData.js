const dishes = [
    {
      category: "soup",
      count: "350 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/gazpacho",
      kind: "veg",
      name: "Гаспачо",
      price: 195
    },
    {
      category: "soup",
      count: "330 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/mushroom_soup",
      kind: "veg",
      name: "Грибной суп-пюре",
      price: 185
    },
    {
      category: "soup",
      count: "330 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/norwegian_soup",
      kind: "fish",
      name: "Норвежский суп",
      price: 270
    },
    {
      category: "soup",
      count: "425 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/ramen",
      kind: "meat",
      name: "Рамен",
      price: 375
    },
    {
      category: "soup",
      count: "500 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/tomyum",
      kind: "fish",
      name: "Том ям с креветками",
      price: 650
    },
    {
      category: "soup",
      count: "350 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/chicken",
      kind: "meat",
      name: "Куриный суп",
      price: 330
    },
    {
      category: "main",
      count: "250 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/friedpotatoeswithmushrooms1",
      kind: "veg",
      name: "Жареная картошка с грибами",
      price: 150
    },
    {
      category: "main",
      count: "310 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/lasagna",
      kind: "meat",
      name: "Лазанья",
      price: 385
    },
    {
      category: "main",
      count: "280 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/chickencutletsandmashedpotatoes",
      kind: "meat",
      name: "Котлеты из курицы с картофельным пюре",
      price: 225
    },
    {
      category: "main",
      count: "270 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/fishrice",
      "keyword": "fishrice",
      kind: "fish",
      name: "Рыбная котлета с рисом и спаржей",
      price: 320
    },
    {
      category: "main",
      count: "470 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/pizza",
      kind: "veg",
      name: "Пицца Маргарита",
      price: 450
    },
    {
      category: "main",
      count: "280 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main_course/shrimppasta",
      kind: "fish",
      name: "Паста с креветками",
      price: 340
    },
    {
      category: "salad",
      count: "250 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/saladwithegg",
      kind: "veg",
      name: "Корейский салат с овощами и яйцом",
      price: 330
    },
    {
      category: "salad",
      count: "220 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/caesar",
      kind: "meat",
      name: "Цезарь с цыпленком",
      price: 370
    },
    {
      category: "salad",
      count: "235 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/caprese",
      kind: "veg",
      name: "Капрезе с моцареллой",
      price: 350
    },
    {
      category: "salad",
      count: "250 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/tunasalad",
      kind: "fish",
      name: "Салат с тунцом",
      price: 480
    },
    {
      category: "salad",
      count: "235 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/frenchfries1",
      kind: "veg",
      name: "Картофель фри с соусом Цезарь",
      price: 280
    },
    {
      category: "salad",
      count: "235 г",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salads_starters/frenchfries2",
      kind: "veg",
      name: "Картофель фри с кетчупом",
      price: 260
    },
    {
      category: "drink",
      count: "300 мл",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/orangejuice",
      kind: "cold",
      name: "Апельсиновый сок",
      price: 120
    },
    {
      category: "drink",
      count: "300 мл",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/applejuice",
      kind: "cold",
      name: "Яблочный сок",
      price: 90
    },
    {
      category: "drink",
      count: "300 мл",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/carrotjuice",
      kind: "cold",
      name: "Морковный сок",
      price: 110
    },
    {
      category: "drink",
      count: "300 мл",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/cappuccino",
      kind: "hot",
      name: "Капучино",
      price: 180
    },
    {
      category: "drink",
      count: "300 мл",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/greentea",
      kind: "hot",
      name: "Зеленый чай",
      price: 100
    },
    {
      category: "drink",
      count: "300 мл",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/tea",
      kind: "hot",
      name: "Черный чай",
      price: 90
    },
    {
      category: "dessert",
      count: "300 гр",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/baklava",
      kind: "medium",
      name: "Пахлава",
      price: 220
    },
    {
      category: "dessert",
      count: "125 гр",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/checheesecake",
      kind: "small",
      name: "Чизкейк",
      price: 240
    },
    {
      category: "dessert",
      count: "125 гр",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/chocolatecheesecake",
      kind: "small",
      name: "Шоколадный чизкейк",
      price: 260
    },
    {
      category: "dessert",
      count: "140 гр",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/chocolatecake",
      kind: "small",
      name: "Шоколадный торт",
      price: 270
    },
    {
      category: "dessert",
      count: "350 гр",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/donuts2",
      kind: "medium",
      name: "Пончики (3 штуки)",
      price: 410
    },
    {
      category: "dessert",
      count: "700 гр",
      image: "https://edu.std-900.ist.mospolytech.ru/labs/api/images/desserts/donuts",
      kind: "large",
      name: "Пончики (6 штук)",
      price: 650
    }
];
export default dishes;
