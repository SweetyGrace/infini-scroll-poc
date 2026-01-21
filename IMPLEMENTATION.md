# Rolex-Style Perpendicular Carousel Implementation

## Overview
This project implements a sophisticated perpendicular carousel inspired by the Rolex homepage, featuring vertical scrolling with horizontal video/image cards.

## Features Implemented

### 1. Scroll Management ✅
- **Scroll Snap**: Y-axis mandatory scroll snap for smooth transitions between slides
- **Intersection Observer**: Tracks which slide is currently active
- **Hardware Acceleration**: Uses `translateZ(0)` and `will-change` for optimal performance
- **Smooth Scrolling**: Native CSS scroll-behavior with GSAP enhancements

### 2. GSAP Animations ✅
- **Fade In/Out**: Content fades in as slides enter viewport
- **Scale Effects**: Media scales subtly for depth perception
- **Parallax Scrolling**: Background media moves at different speed using ScrollTrigger
- **Smooth Transitions**: Power3.out easing for natural motion

### 3. Video Autoplay ✅
- **Intersection-Based Playback**: Videos play/pause based on visibility
- **Lazy Loading**: Videos load only when needed
- **Muted Autoplay**: Follows browser autoplay policies
- **Playback Indicators**: Visual feedback for playing state

### 4. Responsive Design ✅
- **Fluid Typography**: clamp() for responsive font sizing
- **Mobile Optimized**: Touch-friendly scrolling with `-webkit-overflow-scrolling`
- **Dynamic Viewport**: Uses `100dvh` for accurate mobile height
- **Adaptive Layout**: Breakpoints at 768px for mobile devices

### 5. Premium Styling ✅
- **Dark Theme**: Black and dark grey color palette
- **Elegant Typography**: Lightweight fonts (300-400 weight)
- **Subtle Shadows**: Text shadows for readability over media
- **Glassmorphism**: Backdrop-filter effects on UI elements
- **Minimal UI**: Clean navigation dots and progress indicator

## File Structure

```
src/
├── app/
│   ├── page.tsx              # Main page component
│   └── globals.scss          # Global styles
├── components/
│   ├── carousel/
│   │   ├── PerpendicularCarousel.tsx    # Main carousel container
│   │   ├── CarouselSlide.tsx            # Individual slide component
│   │   ├── CarouselNavigation.tsx       # Navigation dots & arrows
│   │   ├── CarouselProgress.tsx         # Progress bar & counter
│   │   └── *.scss                       # Component styles
│   ├── background/
│   │   └── FixedBackground.tsx          # Static background layer
│   └── video/
│       └── AutoPlayVideo.tsx            # Auto-playing video component
├── hooks/
│   ├── useScrollSnap.ts                 # Scroll snap detection
│   ├── useIntersectionObserver.ts       # Visibility tracking
│   └── useVideoPlayback.ts              # Video state management
└── lib/
    └── carouselConfig.ts                # Carousel configuration
```

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS (Sass)
- **Animations**: GSAP 3.x with ScrollTrigger
- **React**: 18.3.x

## Media Assets Used

1. **cup.mp4** - Motor sports video
2. **homepage-welcome-datejust-book-push_rolex_datejust_hero_v2.avif** - Datejust image
3. **playing.mp4** - Performance video
4. **homepage-motor-sports-endurance-cover.avif** - Motor sports image
5. **watch-video.mp4** - Craftsmanship video

## Key CSS Techniques

### Scroll Snap
```scss
scroll-snap-type: y mandatory;
scroll-snap-align: start;
scroll-snap-stop: always;
```

### Hardware Acceleration
```scss
transform: translateZ(0);
will-change: transform, scroll-position;
```

### Glassmorphism
```scss
backdrop-filter: blur(10px);
background: rgba(0, 0, 0, 0.4);
```

### Responsive Typography
```scss
font-size: clamp(36px, 6vw, 72px);
```

## Performance Optimizations

1. **Lazy Loading**: Images use `loading="lazy"` attribute
2. **Transform-based Animations**: GPU-accelerated transforms instead of position changes
3. **Debounced Scroll**: 150ms timeout on scroll event handling
4. **Hidden Scrollbar**: Custom scrollbar hiding for cleaner UI
5. **Will-Change Property**: Hints browser about upcoming animations

## Browser Compatibility

- **Chrome/Edge**: Full support
- **Safari**: Full support (including iOS)
- **Firefox**: Full support
- **Mobile**: Touch scrolling optimized

## Usage

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
npm start
```

## Customization

### Adding New Slides
Edit `/src/lib/carouselConfig.ts`:

```typescript
{
  id: '6',
  title: 'Your Title',
  description: 'Your description',
  backgroundColor: '#000000',
  videoUrl: '/path/to/video.mp4', // or imageUrl
}
```

### Adjusting Animation Timings
Modify GSAP settings in `CarouselSlide.tsx`:

```typescript
gsap.to(element, {
  duration: 1.2,  // Animation duration
  ease: 'power3.out',  // Easing function
  delay: 0.2,  // Delay before animation
});
```

### Changing Scroll Snap Behavior
Modify in `PerpendicularCarousel.scss`:

```scss
scroll-snap-type: y proximity; // or y mandatory
```

## Known Limitations

1. **Video Formats**: Uses MP4 format (consider WebM for better compression)
2. **Autoplay Restrictions**: Some browsers block autoplay with sound
3. **Memory Usage**: Multiple videos can consume significant memory

## Future Enhancements

- [ ] Add keyboard navigation (arrow keys)
- [ ] Implement touch swipe gestures
- [ ] Add preloading for smoother transitions
- [ ] Support for WebM video format
- [ ] Accessibility improvements (ARIA labels)
- [ ] Virtual scrolling for 10+ slides
