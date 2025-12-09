# Kentucky V Website - Design System

## 🍎 Apple-Inspired Design Philosophy

Этот сайт следует принципам дизайна Apple: минимализм, элегантность, и внимание к деталям.

---

## 🎨 Color Palette

### Мягкие, премиальные цвета

```css
/* Primary Colors - Soft Red */
--primary-color: #ff6b6b;      /* Мягкий коралловый красный */
--primary-hover: #ff8787;      /* Светлый при наведении */
--primary-dark: #ee5a52;       /* Темный акцент */

/* Background Colors - Deep Blacks & Grays */
--bg-color: #000000;           /* Глубокий черный */
--bg-secondary: #1d1d1f;       /* Apple gray */
--bg-tertiary: #2d2d2f;        /* Lighter gray */
--bg-card: #161617;            /* Card background */

/* Text Colors - Soft Whites & Grays */
--text-color: #f5f5f7;         /* Мягкий белый */
--text-secondary: #a1a1a6;     /* Средний серый */
--text-tertiary: #86868b;      /* Светлый серый */

/* Accents */
--accent-gray: #6e6e73;        /* Accent gray */
--border-color: #424245;       /* Border color */
```

### Цветовая философия

**Красный (#ff6b6b)**
- Мягкий, не агрессивный
- Теплый и привлекательный
- Хорошо сочетается с темным фоном

**Серые тона**
- Многослойность (5 оттенков серого)
- Создают глубину без контраста
- Apple-стиль градиенты

**Черный (#000000)**
- Глубокий, не плоский
- Премиальное ощущение
- Подчеркивает контент

---

## ✍️ Typography

### SF Pro Display/Text (Apple System Font)

```css
font-family: -apple-system, BlinkMacSystemFont, 
             'SF Pro Display', 'SF Pro Text', 
             'Helvetica Neue', Arial, sans-serif;
```

### Иерархия шрифтов

```css
/* Заголовок H1 */
font-size: 80px;
line-height: 1.05;
font-weight: 600;
letter-spacing: -0.015em;

/* Заголовок H2 */
font-size: 56px;
line-height: 1.07;
font-weight: 600;
letter-spacing: -0.005em;

/* Заголовок H3 */
font-size: 40px;
line-height: 1.1;
font-weight: 600;
letter-spacing: 0;

/* Subheadline */
font-size: 28px;
line-height: 1.14;
font-weight: 400;
letter-spacing: 0.007em;

/* Body Text */
font-size: 17px;
line-height: 1.52;
font-weight: 400;
letter-spacing: -0.022em;
```

### Принципы типографики

✅ **Negative letter-spacing** для крупных заголовков  
✅ **Tight line-height** для заголовков (1.05-1.1)  
✅ **Comfortable line-height** для текста (1.47-1.52)  
✅ **Вес 600** для заголовков, **400** для текста  
✅ **Font smoothing** для четкости на всех экранах  

---

## 🎭 Design Elements

### Карточки (Cards)

```css
background: #161617;
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 18px;
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

**Особенности:**
- Мягкие закругления (18px)
- Тонкие границы (1px, 8% opacity)
- Плавные переходы (cubic-bezier)
- Subtle shadows при hover

### Кнопки (Buttons)

```css
border-radius: 980px;  /* Pill shape */
padding: 12px 24px;
font-size: 17px;
font-weight: 400;
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

**Типы:**
- **Primary**: Soft red background
- **Secondary**: Transparent с border
- **Tertiary**: Subtle gray background

### Backdrop Blur

```css
backdrop-filter: saturate(180%) blur(20px);
-webkit-backdrop-filter: saturate(180%) blur(20px);
```

**Используется для:**
- Навигационная панель
- Модальные окна
- Overlay elements

---

## 🎬 Animations

### Transitions

```css
/* Standard Transition */
--transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

/* Bounce Effect */
--transition-bounce: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Keyframe Animations

**Fade In Up**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Pulse**
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
```

---

## 📐 Spacing System

### Vertical Rhythm

```css
/* Section Padding */
padding: 100px 0;        /* Desktop */
padding: 80px 0;         /* Tablet */
padding: 60px 0;         /* Mobile */

/* Component Spacing */
margin-bottom: 60px;     /* Large gap */
margin-bottom: 32px;     /* Medium gap */
margin-bottom: 16px;     /* Small gap */
```

### Horizontal Rhythm

```css
gap: 60px;    /* Large */
gap: 32px;    /* Medium */
gap: 16px;    /* Small */
gap: 8px;     /* Tiny */
```

---

## 🎯 UI Components

### Navigation Bar

**Характеристики:**
- Высота: 48px
- Backdrop blur: 20px
- Saturation: 180%
- Border-bottom: 1px, 8% opacity
- Fixed position

### Hero Section

**Элементы:**
- Centered content
- Large typography (80px)
- Subtle gradient overlay
- Animated entrance
- Max-width: 980px

### Server Cards

**Дизайн:**
- Grid layout (auto-fit, minmax 320px)
- Dark card background (#161617)
- Green pulse indicator
- Monospace font для IP
- Hover lift effect

### FAQ Accordion

**Поведение:**
- Smooth expand/collapse
- Max-height transition
- Rotated toggle icon
- Border highlight on hover

---

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1069px) { }

/* Tablet */
@media (max-width: 1068px) {
  h1 { font-size: 56px; }
  h2 { font-size: 40px; }
}

/* Large Mobile */
@media (max-width: 734px) {
  h1 { font-size: 40px; }
  h2 { font-size: 32px; }
}

/* Small Mobile */
@media (max-width: 480px) {
  /* Full-width buttons */
  /* Stack everything */
}
```

---

## ✨ Key Principles

### 1. **Минимализм**
- Минимум декораций
- Фокус на контенте
- Белое пространство

### 2. **Типографика**
- Крупные заголовки
- Negative letter-spacing
- Hierarchy через размер

### 3. **Subtle Effects**
- Мягкие тени
- Плавные переходы
- Backdrop blur

### 4. **Consistency**
- Единая система spacing
- Consistent border-radius
- Predictable interactions

### 5. **Performance**
- CSS transitions (не JS)
- Transform вместо position
- Will-change для анимаций

---

## 🎨 Color Usage Guidelines

### Primary Red (#ff6b6b)
**Использовать для:**
- CTA кнопки
- Важные ссылки
- Акценты
- Hover states
- Progress indicators

**НЕ использовать для:**
- Большие блоки текста
- Background больших секций
- Borders везде

### Grays
**Background hierarchy:**
```
#000000 → #161617 → #1d1d1f → #2d2d2f
(Darkest)              (Lightest)
```

**Text hierarchy:**
```
#f5f5f7 → #a1a1a6 → #86868b → #6e6e73
(Brightest)           (Dimmest)
```

---

## 🔍 Accessibility

### Contrast Ratios

✅ **Text on Background**
- Large text (24px+): 3:1 minimum
- Body text (17px): 4.5:1 minimum
- Links: Underline or sufficient contrast

✅ **Interactive Elements**
- Focus states: Visible outline
- Hover states: Clear visual change
- Active states: Distinct from default

### Font Smoothing

```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

---

## 📊 Performance Metrics

### Loading Times
- **First Paint**: < 1s
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

### Asset Sizes
- **HTML**: ~22KB
- **CSS**: ~19KB
- **JavaScript**: ~6KB
- **Total (without images)**: ~47KB

---

## 🛠️ Implementation Notes

### Browser Support
```
✅ Chrome 90+
✅ Safari 14+
✅ Firefox 88+
✅ Edge 90+
⚠️  IE11 (degraded experience)
```

### CSS Features Used
- CSS Grid
- Flexbox
- CSS Variables
- Backdrop Filter
- Cubic-bezier transitions
- Transform animations

### JavaScript Dependencies
- **None!** Pure vanilla JS
- No jQuery
- No frameworks
- ~6KB total

---

## 🎯 Design Inspiration

### Primary Inspiration: Apple.com
- SF Pro typography
- Backdrop blur effects
- Minimal color palette
- Large hero typography
- Card-based layouts
- Smooth transitions

### Secondary Inspiration: GTA5RP Sites
- Gaming aesthetics
- Server statistics
- Live indicators
- Community features

---

## 📝 Usage Examples

### Creating a New Section

```html
<section class="new-section">
  <div class="container">
    <div class="section-header">
      <span class="section-label">// Label</span>
      <h2>Section <span class="highlight">Title</span></h2>
      <p class="section-subtitle">Description text</p>
    </div>
    <!-- Content -->
  </div>
</section>
```

```css
.new-section {
  padding: 100px 0;
  background: var(--bg-secondary);
}
```

### Creating a Card

```html
<div class="custom-card">
  <h3>Card Title</h3>
  <p>Card description</p>
</div>
```

```css
.custom-card {
  background: var(--bg-card);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 32px;
  transition: var(--transition);
}

.custom-card:hover {
  border-color: rgba(255, 107, 107, 0.2);
  transform: translateY(-4px);
}
```

---

## 🚀 Future Enhancements

### Planned Improvements
- [ ] Dark/Light mode toggle
- [ ] Custom cursor effects
- [ ] Parallax scrolling
- [ ] Micro-interactions
- [ ] Loading animations
- [ ] Scroll-triggered animations

---

**Создано с вдохновением от Apple.com и лучших практик современного веб-дизайна.**

*Last updated: December 9, 2025*