# Kentucky V Website - Быстрый старт

## Файлы проекта

```
kentucky-v-website/
├── index.html              # Основная страница
├── styles.css              # Все стили
├── script.js               # JavaScript все функций
├── assets/
│   ├── logo.png            # Поместите васо лого здесь
│   └── logo-setup.md       # Ки добавить лого
├── README.md              # Полная документация
├── DEPLOYMENT.md          # Как деплойтить
└── QUICK_START.md         # Ныешние старт (этот файл)
```

## Шаг 1: Зата Логотипа

### Option A: Локальный файл

1. Отвыйте васо лого Kentucky.png в грачиковном редакторе
2. Обновите до размера 300x300px в тривялюга
3. Сохраните как `logo.png` в папке `assets/`

### Option B: URL источник

Оторедактируйте `index.html` на строке 57:

```html
<!-- ОТ -->
<img src="assets/logo.png" alt="Kentucky V Logo" class="logo-image">

<!-- К -->
<img src="https://your-domain.com/logo.png" alt="Kentucky V Logo" class="logo-image">
```

## Шаг 2: Вночит Локально

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/20XMAS24/kentucky-v-website.git
   cd kentucky-v-website
   ```

2. Открыте `index.html` в браузере (Double click или правым кнопког ж Open with Browser)

3. (Но за таким) Используйте Live Server в VS Code:
   - Установите расширение Live Server
   - Пк на index.html и выберите "Open with Live Server"

## Шаг 3: Нукиллизация

### Кастомизация текста

Оторедактируйте `index.html`:

```html
<h1>Kentucky V</h1>
<p class="subtitle">Создай свою историю в виртуальном мире</p>
```

### Изменение Цветов

Оторедактируйте `styles.css` долонина 15:

```css
:root {
  --primary-color: #ff4444;      /* Утюжница цвет */
  --primary-hover: #ff6666;
  --primary-dark: #cc0000;
  --bg-color: #0a0a0a;           /* Фон */
  --bg-secondary: #1a1a1a;
  --text-color: #ffffff;
  --text-secondary: #cccccc;
}
```

**Некоторые шикарные варианты цветов:**

- **Красные**: `#ff4444`, `#ff0000`, `#cc0000`
- **Луые**: `#0066ff`, `#0099ff`, `#00ccff`
- **Зелёные**: `#00ff00`, `#00cc00`, `#009900`
- **Белые**: `#ffffff`, `#f0f0f0`, `#e0e0e0`
- **Пурпурные**: `#8b00ff`, `#aa00ff`, `#9933ff`

## Шаг 4: Деплоймент

### GitHub Pages (БЕСПЛАТНО)

1. Пейди на страница Settings репозитория
2. Установите GitHub Pages на ветку `main`
3. Ваш сайт будет на: `https://20XMAS24.github.io/kentucky-v-website/`

### Не Vercel/Netlify

1. Поавы на https://vercel.com или https://netlify.com
2. Подключите васо репозиторий
3. Утверждание сайт деплойтится автоматически

## ЦВЕТОВОЙ ПАЛИТРА

### Kentucky Red Theme (Current)
```
Первая: #ff4444
При ховер: #ff6666
Темные: #cc0000
BG: #0a0a0a
Secondary BG: #1a1a1a
Text: #ffffff
```

### Optional: Neon Purple
```
--primary-color: #aa00ff;
--primary-hover: #cc00ff;
--primary-dark: #8800cc;
```

### Optional: Cyberpunk Blue
```
--primary-color: #00ffff;
--primary-hover: #33ffff;
--primary-dark: #0099cc;
```

## Frequently Asked Questions

**Q: Сайт файлы не покажутся**

A: Проверьте расширения файлов и структуру папок. Ливсервер рекомендуются для локальном воспноизводства.

**Q: Как адаптировать для мобила?**

A: Сайт делают припиленным ю реквизи успеха. Отправьте при помощи телефоном.

---

**Требуются дополнительные рассюлки? См. **README.md** и **DEPLOYMENT.md**