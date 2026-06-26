const url = process.env.WEBAPP_URL;

if (!url) {
    console.error('❌ Ошибка: переменная WEBAPP_URL не задана');
    process.exit(1);
}

console.log('✅ URL получен:', url);

// Дальше твой код, который использует url
// Например, отправка запроса:
// const response = await fetch(url, { ... });
