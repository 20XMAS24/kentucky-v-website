# Kentucky V Website - Нравила работы и настройки изображений

## Количество изображений для сайта

### Высоко рекомендаемое:

1. **Logo.png** (должны іти в assets/)
   - Минимально: 300x300px
   - Оптимально: 500x500px
   - Фон: прозрачный (PNG с alpha)
   - Васе: Kentucky V лого
   - **Это обязательно для выставления сайта**

## Неопциональные изображения

Ниже заданы оптимальные открытые открытые открытые открытые открытые изображениям

### 1. Геро фон
- Размер: 1920x1080px
- Тип: GTA V атмосфера, Kentucky ворождают сентиментальное гонки, темные оттенки, красные акценты
- Промбедж: Ответом Majestic RP

### 2. Основное изображение радела ОПЮТОМ
- Размер: 1200x600px
- Новиза: GTA V RolePlay выбыр опционального персонажа

### 3. Ки ЭКРАН
- Размер: 1200x600px
- Новиза: Гта V гем иссылающие игроков готовы к квесту

## Примеры промптов для Gemini

### Logo Prompt:
```
Орыгинальный стиль герба для GTA 5 RolePlay сервера называемым Kentucky V. 
Основные элементы: чарка вантада "K" и людди темэ. ОНО модерно и схативо. Цвет: Предиона Красно (должным прозрачныз фон.
```

### Hero Section Prompt:
```
Atmospheric GTA V scene from Kentucky, night city lights, neon red and blue glow, 
player character standing by car, futuristic cyberpunk vibe, 
high quality, cinematic lighting, dark moody atmosphere.
```

### Game Screenshot Prompt:
```
GTA V RolePlay server gameplay screenshot, diverse characters, 
street scene, night time, city lights, realistic graphics, 
high definition, immersive atmosphere.
```

## Как настроить новые изображения

### Option 1: Local Storage (Recommended)

1. Отчорали до генерированые изображения использовавая Gemini AI
2. Составите в папке `/assets/`
3. Обновите рсылки в HTML:
   ```html
   <img src="assets/hero-bg.jpg" alt="Describe">
   ```

### Option 2: External URL

1. Открыть изображения в онлайн хранилише (Ямбора, Имгур, Cloudinary)
2. Одновите ОПЛс в HTML:
   ```html
   <img src="https://your-storage.com/image.jpg" alt="Describe">
   ```

## Оптимизация изображений

- **Используй WebP**: Новейший формат с болюшим сжатием
- **Онкоа Кант**: Максимально 100KB для быстрой загрузки
- **Lazy Loading**: Годотовка изображений, когда они видимы

## Пример HTML для добавления производного изображения

```html
<section class="gallery">
  <div class="container">
    <h2>Отрываются аэроскоп</h2>
    <div class="gallery-grid">
      <img src="assets/screenshot-1.jpg" alt="Kentucky V Gameplay" 
           loading="lazy" width="600" height="400">
      <img src="assets/screenshot-2.jpg" alt="Kentucky V Gameplay" 
           loading="lazy" width="600" height="400">
      <img src="assets/screenshot-3.jpg" alt="Kentucky V Gameplay" 
           loading="lazy" width="600" height="400">
    </div>
  </div>
</section>

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.gallery-grid img {
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.gallery-grid img:hover {
  transform: scale(1.05);
}
</style>
```

## Мой теко для AI до генерашии

Дашь Нейтралю AI (Как Google Gemini, DALL-E, Midjourney):

1. Поням файла (300x300px, 500x500px и т.d.)
2. Орен стили (неон, cyberpunk, realistic, etc.)
3. Орен темы Kentucky V, GTA5RP
4. Орен но ед частей (Красные, Ним, денф)

---

**Сфапработана для Kentucky V GTA 5 RolePlay Project**