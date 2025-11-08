# Strata Digital V2 - Component Guide

## Component File Paths

All components are located in: `/Users/stephanie/strata-digital-v2/src/components/`

### 1. Header Component
**File:** `/Users/stephanie/strata-digital-v2/src/components/Header.jsx`

**Features:**
- Fixed/sticky navigation bar
- White background with shadow
- Logo: "strata digital" (left)
- Nav links: Services, How it works, Portfolio, Contact Us
- CTA button: "Learn More" (sage-light, rounded pill)
- Responsive (hidden nav on mobile <768px)

**Props:** None

---

### 2. Hero Component
**File:** `/Users/stephanie/strata-digital-v2/src/components/Hero.jsx`

**Features:**
- Main headline: "Digital presence built for rural NZ reality"
- Hero image with dark frame effect (black border/padding)
- Subheading and body text (centered)
- 4-column feature grid (responsive: 4→2→1)
- Features: Mobile-First Design, Local SEO, Content/Social, Ongoing Management

**Props:** None
**Image:** Uses `/hero-nz-bush.jpg` from public folder

---

### 3. SeeTheBigPicture Component
**File:** `/Users/stephanie/strata-digital-v2/src/components/SeeTheBigPicture.jsx`

**Features:**
- 2-column layout (text left, image right)
- Left column has olive-dark left border (4px)
- Heading: "See the Big Picture"
- Body text about digital ecosystem
- 4 numbered points (01-04) with titles and descriptions
- CTA button: "Discover More" (sage-light)
- Right column: gradient placeholder for geometric image

**Props:** None
**Responsive:** Stacks to single column on mobile

---

### 4. Testimonial Component
**File:** `/Users/stephanie/strata-digital-v2/src/components/Testimonial.jsx`

**Features:**
- 2-column layout (image left, quote right)
- Left: gradient placeholder for geometric spheres image
- Right: testimonial quote (italic, 20-24px)
- Attribution: John Smith, Head of Sales
- Light gray background (bg-gray-50)

**Props:** None
**Responsive:** Stacks to single column on mobile

---

### 5. Process Component
**File:** `/Users/stephanie/strata-digital-v2/src/components/Process.jsx`

**Features:**
- Centered heading: "how we build your digital presence"
- 3-column grid of process cards
- Each card has: Large number (01-03), title, description
- Numbers are 80-100px, light gray (text-gray-200)
- Process steps: Discovery & Strategy, Build & Launch, Optimize & Grow
- CTA button: "Discover More" (left-aligned, sage-light)

**Props:** None
**Responsive:** 3 columns → single column on mobile

---

### 6. LargeImage Component
**File:** `/Users/stephanie/strata-digital-v2/src/components/LargeImage.jsx`

**Features:**
- Full-width image container
- Rounded corners (16-20px)
- Shadow and subtle border
- Gradient placeholder for aerial/landscape photo
- Aspect ratio: 16:9 (aspect-video)

**Props:** None
**Note:** Replace gradient with actual aerial photography image

---

### 7. FinalCTA Component
**File:** `/Users/stephanie/strata-digital-v2/src/components/FinalCTA.jsx`

**Features:**
- Centered content, generous padding
- Heading: "ready to dominate local search"
- Body text about digital presence
- Large prominent CTA button
- Button: "Learn More" (olive-dark bg, white text, pill shape)
- Button size: px-12 py-5 (larger than other CTAs)

**Props:** None

---

### 8. Footer Component
**File:** `/Users/stephanie/strata-digital-v2/src/components/Footer.jsx`

**Features:**
- Sage-light background
- 3-column grid (logo, links, contact)
- Logo: "strata digital"
- Quick links: Services, How it works, Portfolio, Contact
- Copyright notice with dynamic year
- Border-top separator for copyright section

**Props:** None
**Responsive:** 3 columns → single column on mobile

---

## App Component
**File:** `/Users/stephanie/strata-digital-v2/src/App.jsx`

Assembles all components in order:
1. Header (sticky)
2. Hero
3. SeeTheBigPicture
4. Testimonial
5. Process
6. LargeImage
7. FinalCTA
8. Footer

---

## Styling Guidelines

### Custom Tailwind Colors
- `bg-olive-dark` - #556B4D
- `bg-olive-medium` - #8B9E7F
- `bg-sage-light` - #D4E4C1
- `bg-tan-cream` - #C9B8A3

### Font Classes
- `font-playfair` - Playfair Display (headings)
- `font-inter` - Inter (body text, default)

### Common Patterns
- Pill buttons: `rounded-full px-8 py-3`
- Image rounded corners: `rounded-2xl` or `rounded-3xl`
- Section padding: `py-20 px-6`
- Max-width containers: `max-w-7xl mx-auto`
- Responsive grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## Customization Tips

### Updating Colors
Edit: `/Users/stephanie/strata-digital-v2/tailwind.config.js`
```javascript
colors: {
  'olive-dark': '#556B4D',
  'olive-medium': '#8B9E7F',
  'sage-light': '#D4E4C1',
  'tan-cream': '#C9B8A3',
}
```

### Updating Fonts
Edit: `/Users/stephanie/strata-digital-v2/src/index.css`
```css
@import url('https://fonts.googleapis.com/css2?family=...');
```

### Adding Images
Place in: `/Users/stephanie/strata-digital-v2/public/`
Reference as: `/image-name.jpg`

### Responsive Breakpoints (Tailwind)
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

---

## Component Reusability

All components are self-contained with no props, making them easy to:
- Reorder in App.jsx
- Duplicate if needed
- Modify independently
- Style without affecting others

For dynamic content, components can be easily refactored to accept props:
```javascript
<Hero title="Custom Title" image="/custom-image.jpg" />
```
