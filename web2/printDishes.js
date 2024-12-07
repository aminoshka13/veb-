import dishes from './menuData.js';

// Элементы для отображения заказа
const orderSection = document.getElementById('order-summary');

// Шаблон для отображения "Ничего не выбрано"
const emptyMessage = {
    soup: "Суп не выбран",
    main: "Главное блюдо не выбрано",
    drink: "Напиток не выбран",
    salad: "Салат не выбран",
    dessert: "Десерт не выбран"
};

// Текущее состояние заказа
const selectedDishes = {
    soup: null,
    main: null,
    drink: null,
    salad: null,
    dessert: null
};

// Соответствие текстовых фильтров значениям kind в данных
const kindMap = {
    'рыбный': 'fish',
    'рыбное': 'fish',
    'мясной': 'meat',
    'мясное': 'meat',
    'вегетарианский': 'veg',
    'вегетарианское': 'veg',
    'холодный': 'cold',
    'горячий': 'hot',
    'маленькая порция': 'small',
    'средняя порция': 'medium',
    'большая порция': 'large'
};

// Объект для хранения текущих фильтров для каждой категории
const activeFilters = {
    soup: null,
    main: null,
    drink: null,
    salad: null,
    dessert: null
};

// Функция для сортировки блюд по имени
function sortDishes(dishes) {
    return dishes.sort((a, b) => a.name.localeCompare(b.name));
}

// Функция для отображения блока заказа
function renderOrder() {
    const anyDishSelected = Object.values(selectedDishes).some(dish => dish !== null);

    const orderContent = anyDishSelected
        ? ` 
            ${renderCategory('soup', 'Суп')}
            ${renderCategory('main', 'Главное блюдо')}
            ${renderCategory('drink', 'Напиток')}
            ${renderCategory('salad', 'Салат')}
            ${renderCategory('dessert', 'Десерт')}
            ${renderTotalPrice()}
        `
        : `<p>Ничего не выбрано</p>`;

    orderSection.innerHTML = orderContent;
    orderSection.style.display = 'block';
}

// Функция для отображения категории
function renderCategory(category, categoryTitle) {
    const dish = selectedDishes[category];
    return `
        <div>
            <h4>${categoryTitle}</h4>
            <p>${dish ? `${dish.name} - ${dish.price}₽` : emptyMessage[category]}</p>
        </div>
    `;
}

// Функция для подсчета общей стоимости
function renderTotalPrice() {
    const totalPrice = Object.values(selectedDishes)
        .filter(dish => dish !== null)
        .reduce((sum, dish) => sum + dish.price, 0);

    return totalPrice > 0
        ? `<h4>Стоимость заказа</h4><p>${totalPrice}₽</p>`
        : '';
}

// Функция для отображения блюд
function renderDishes() {
    const categories = {
        soup: document.getElementById('soup-grid'),
        main: document.getElementById('main-grid'),
        drink: document.getElementById('drink-grid'),
        salad: document.getElementById('salad-grid'),
        dessert: document.getElementById('dessert-grid'),
    };

    // Очищаем все категории
    Object.values(categories).forEach(grid => (grid.innerHTML = ''));

    const sortedDishes = sortDishes(dishes);

    Object.keys(categories).forEach(category => {
        const categoryFilter = activeFilters[category];
        const filteredDishes = sortedDishes.filter(dish => 
            dish.category === category &&
            (!categoryFilter || dish.kind === categoryFilter)
        );

        filteredDishes.forEach(dish => {
            const dishElement = document.createElement('div');
            dishElement.classList.add('dish');
            dishElement.setAttribute('data-dish', dish.keyword);

            dishElement.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}">
                <h3>${dish.name}</h3>
                <p>${dish.count}</p>
                <p>${dish.price} ₽</p>
                <button>Добавить</button>
            `;

            // Обработчик клика для добавления блюда в заказ
            dishElement.querySelector('button').addEventListener('click', () => {
                selectedDishes[category] = dish;
                renderOrder();
            });

            categories[category].appendChild(dishElement);
        });
    });
}

// Функция для настройки фильтров
function setupFilters() {
    const filters = {
        soup: ['рыбный', 'мясной', 'вегетарианский'],
        main: ['рыбное', 'мясное', 'вегетарианское'],
        drink: ['холодный', 'горячий'],
        salad: ['рыбный', 'мясной', 'вегетарианский'],
        dessert: ['маленькая порция', 'средняя порция', 'большая порция']
    };

    Object.keys(filters).forEach(category => {
        const filterContainer = document.getElementById(`${category}-filters`);
        filters[category].forEach(kind => {
            const filterButton = document.createElement('button');
            filterButton.textContent = kind.charAt(0).toUpperCase() + kind.slice(1);
            filterButton.classList.add('filter-button');
            filterButton.setAttribute('data-kind', kind);

            // Привязываем обработчик события
            filterButton.addEventListener('click', () => {
                const isActive = filterButton.classList.contains('active');
                document
                    .querySelectorAll(`#${category}-filters .filter-button`)
                    .forEach(button => button.classList.remove('active'));

                if (isActive) {
                    // Убираем активный фильтр
                    filterButton.classList.remove('active');
                    activeFilters[category] = null;
                } else {
                    // Устанавливаем новый активный фильтр
                    filterButton.classList.add('active');
                    activeFilters[category] = kindMap[kind];
                }
                renderDishes();
            });

            filterContainer.appendChild(filterButton);
        });
    });
}

// Запускаем отрисовку блюд и настройку фильтров при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
    renderDishes(); // Отображаем все блюда при загрузке
    renderOrder();
});

// Сброс выбранных блюд и формы
const resetButton = document.getElementById('reset-order');
const orderForm = document.getElementById('order-form');

// Сброс состояния заказа
function resetOrder() {
    // Сбрасываем выбранные блюда
    Object.keys(selectedDishes).forEach(key => {
        selectedDishes[key] = null;
    });

    // Сбрасываем активные фильтры
    Object.keys(activeFilters).forEach(key => {
        activeFilters[key] = null;
    });

    // Сбрасываем содержимое формы
    orderForm.reset();

    // Перерисовываем заказ и блюда
    renderDishes();
    renderOrder();
}

// Привязываем обработчик к кнопке сброса
resetButton.addEventListener('click', resetOrder);
