# 🎨 TNT Design System

A comprehensive design system documentation for the TNT Angular Template project, built as an Angular component with routing.

## 📍 Location

The design system is located at:

```
apps/tnt/src/app/design-system/
├── design-system.component.ts
├── design-system.component.html
└── design-system.component.scss
```

## 🚀 How to Access

### Via Browser

Once your development server is running (`yarn dev`), navigate to:

```
http://localhost:4200/design-system
```

The root path (`/`) automatically redirects to the design system.

### Via Code

The design system is a lazy-loaded Angular component defined in `app.routes.ts`:

```typescript
{
  path: 'design-system',
  loadComponent: () => import('./design-system/design-system.component').then(m => m.DesignSystemComponent)
}
```

## 📚 What's Included

### 1. **Color System** 🎨

- Primary, Secondary, Accent colors
- Semantic colors (Success, Warning, Error)
- Gray scale palette (50-900)
- Opacity variants for all colors (`/10`, `/30`, `/50`, `/70`, `/100`)
- Usage examples and code snippets

### 2. **Typography** 📝

- Complete font scale (xs to 4xl)
- Font weights (thin to extrabold)
- Text styles (italic, underline, uppercase, etc.)
- Live examples with pixel values

### 3. **Spacing System** 📏

- Consistent spacing scale (0, 1, 2, 4, 6, 8, 12, 16)
- Padding examples (p-_, px-_, py-_, pt-_, etc.)
- Margin utilities
- Gap utilities for flexbox/grid
- Visual representations

### 4. **Components** 🧩

- **Buttons**: Primary, secondary, outline, ghost, semantic, sizes
- **Cards**: Basic, shadow, colored variants
- **Form Inputs**: Text, textarea, select, checkbox, radio
- **Badges & Tags**: All color variants
- **Alerts**: Success, warning, error states with icons

### 5. **Layout Utilities** 📐

- Flexbox layouts with live examples
- Grid layouts (responsive)
- Common layout patterns

### 6. **Utility Classes** ⚡

- Border radius variants (rounded-none to rounded-full)
- Shadow elevations (shadow-sm to shadow-2xl)
- Opacity levels
- Transitions and hover states

## 🎯 Key Features

- ✅ **Sticky Navigation** - Easy access to all sections
- ✅ **Live Examples** - See components in action
- ✅ **Code Snippets** - Copy-paste ready code
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Professional Layout** - Clean, organized sections
- ✅ **Visual References** - Color swatches, spacing scales, etc.
- ✅ **Angular Integration** - Proper routing and component structure
- ✅ **Lazy Loading** - Optimized performance

## 💡 Usage Tips

### For Developers

1. **Reference Colors**: All theme colors are defined in `styles.scss` using CSS variables

   ```scss
   --color-primary: #ff0000;
   --color-secondary: #a855f7;
   ```

2. **Opacity Variants**: Use `/10`, `/30`, `/50`, `/70` for opacity

   ```html
   <div class="bg-primary/50">50% opacity</div>
   ```

3. **Consistent Spacing**: Stick to the spacing scale (2, 4, 6, 8, 12, 16)

   ```html
   <div class="p-4 m-8 gap-6">Consistent spacing</div>
   ```

4. **Component Patterns**: Copy component examples and adapt to your needs

### For Designers

1. Use this as a reference for design consistency
2. All colors, spacing, and typography follow a systematic approach
3. Components are designed to be composable and reusable

## 🔧 Customization

To customize the design system:

### 1. **Colors**

Edit `apps/tnt/src/styles.scss`:

```scss
@theme {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  --color-accent: #your-color;
  --color-success: #your-color;
  --color-warning: #your-color;
  --color-error: #your-color;
}
```

### 2. **Typography**

Extend in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontSize: {
      '5xl': '3rem',
      // Add custom sizes
    }
  }
}
```

### 3. **Spacing**

Extend in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    spacing: {
      '128': '32rem',
      // Add custom spacing
    }
  }
}
```

## 📖 Sections Overview

| Section             | Description                          | Anchor             |
| ------------------- | ------------------------------------ | ------------------ |
| **Getting Started** | Introduction and quick tips          | `#getting-started` |
| **Colors**          | Complete color palette with variants | `#colors`          |
| **Typography**      | Font scales, weights, and styles     | `#typography`      |
| **Spacing**         | Padding, margin, and gap utilities   | `#spacing`         |
| **Components**      | Reusable UI components               | `#components`      |
| **Layout**          | Flexbox and grid examples            | `#layout`          |
| **Utilities**       | Helper classes for common patterns   | `#utilities`       |

## 🎓 Best Practices

1. **Use Design Tokens**: Always use the defined colors, spacing, and typography
2. **Component Reusability**: Build components that can be reused across the app
3. **Consistency**: Follow the patterns shown in the design system
4. **Accessibility**: Ensure proper contrast ratios and semantic HTML
5. **Responsive**: Use responsive utilities (sm:, md:, lg:, xl:)

## 🚀 Quick Start Examples

### Button

```html
<button class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition">Click me</button>
```

### Card

```html
<div class="bg-white shadow-lg rounded-lg p-6">
  <h3 class="text-lg font-semibold mb-2">Card Title</h3>
  <p class="text-gray-600">Card content goes here</p>
</div>
```

### Alert

```html
<div class="bg-success/10 border-l-4 border-success p-4 rounded">
  <div class="flex items-start gap-3">
    <span class="text-success text-xl">✓</span>
    <div>
      <h4 class="font-semibold text-success mb-1">Success</h4>
      <p class="text-sm text-gray-700">Success message!</p>
    </div>
  </div>
</div>
```

## 🏗️ Component Structure

```
design-system/
├── design-system.component.ts      # Component logic
├── design-system.component.html    # Template with all sections
└── design-system.component.scss    # Component-specific styles
```

## 🔗 Navigation

The component includes smooth scroll navigation. Click any section in the sticky header to jump to that section:

- Colors
- Typography
- Spacing
- Components
- Layout
- Utilities

## 📞 Support

For questions or suggestions about the design system, please refer to this documentation or consult with the development team.

---

**Last Updated**: December 2025  
**Version**: 1.0.0  
**Built with**: Tailwind CSS + Angular + TypeScript
