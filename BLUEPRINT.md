# Master Project Blueprint: Premium Travel Agency HTML Template ("WanderLuxe")

**Target Platform:** ThemeForest / Envato Market (HTML5 Category)  
**Architecture:** Static HTML5 / Multi-Page Application (MPA)  
**Core Frameworks:** Bootstrap 5.3.x, Vanilla JavaScript (ES6+), Font Awesome 6.x, Swiper.js, AOS (Animate On Scroll)  
**Strict Mandate:** Pure browser execution via `index.html`. Zero Node.js dependencies, zero build steps, zero frontend bundlers.

---

## 1. Complete Sitemap & Relationship Network

The template follows a classic conversion-optimized multi-page hierarchy designed for high commercial value and organic search crawlability.

```
[Home (index.html)]
  │
  ├──► [About Us (about.html)]
  │      └──► [Testimonials (testimonials.html)]
  │      └──► [FAQ (faq.html)]
  │
  ├──► [Destinations Hub (destinations.html)]
  │      └──► [Destination Details (destination-details.html)]
  │             └──► Filtered Tours Linkage
  │
  ├──► [Tour Packages Hub (tours.html)]
  │      └──► [Package Details (package-details.html)]
  │             ├──► [Booking Checkout Modal / Anchor]
  │             └──► [Terms & Conditions (terms.html)]
  │
  ├──► [Gallery (gallery.html)]
  │
  ├──► [Blog Hub (blog.html)]
  │      └──► [Single Blog Post (blog-single.html)]
  │
  ├──► [Contact Us (contact.html)]
  │
  ├──► Utility & Legal Pages
  │      ├──► [Privacy Policy (privacy.html)]
  │      ├──► [Terms & Conditions (terms.html)]
  │      └──► [404 Error Page (404.html)]
```

### Primary Navigation Menu Hierarchy
* **Home** (`index.html`)
* **About** (`about.html`)
* **Destinations** (`destinations.html`)
* **Tours** (`tours.html`)
* **Gallery** (`gallery.html`)
* **Blog** (`blog.html`)
* **Testimonials** (`testimonials.html`)
* **Contact** (`contact.html`)

### Footer Navigation Hierarchy
* **Quick Links:** Home | About | Destinations | Tours | Gallery | Blog | FAQ | Testimonials | Contact
* **Legal & Support:** Privacy Policy | Terms & Conditions | Support FAQ

---

## 2. Complete Page Hierarchy & Directory Structure

To ensure ThemeForest compliance and effortless customer customization, the repository structure strictly organizes assets by responsibility.

```text
wanderluxe-travel-html-template/
│
├── index.html                     # Homepage (Primary Entry Point)
├── about.html                     # About Us Page
├── destinations.html              # Destinations Listing Grid
├── destination-details.html       # Destination Single View
├── tours.html                     # Tour Packages Listing (Grid & List View)
├── package-details.html           # Tour Package Single View & Itinerary
├── gallery.html                   # Photo & Video Masonry Grid
├── blog.html                      # Blog Posts Archive
├── blog-single.html               # Blog Post Reader View
├── faq.html                       # Frequently Asked Questions Accordion
├── testimonials.html              # Client Reviews & Case Studies
├── contact.html                   # Contact Form & Interactive Map
├── privacy.html                   # Privacy Policy Legal Document
├── terms.html                     # Terms & Conditions Legal Document
├── 404.html                       # Missing Page Redirect
│
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css      # Bootstrap 5.3 Core Framework
│   │   ├── fontawesome.min.css    # Font Awesome Icon Library
│   │   ├── swiper-bundle.min.css  # Swiper Carousel Styles
│   │   ├── aos.css                # Animate on Scroll Styles
│   │   ├── style.css              # Master Custom Theme Stylesheet
│   │   └── responsive.css         # Breakpoint Overrides & Mobile Tweaks
│   │
│   ├── js/
│   │   ├── bootstrap.bundle.min.js # Bootstrap Core + Popper.js
│   │   ├── swiper-bundle.min.js   # Swiper Carousel Engine
│   │   ├── aos.js                 # AOS Scroll Engine
│   │   └── main.js                # Custom Initialization & UI Logic
│   │
│   ├── images/
│   │   ├── brand/                 # Logos, Favicons, App Banners
│   │   ├── hero/                  # Full-screen Hero Sliders & Overlays
│   │   ├── destinations/          # Destination Thumbnails & Banners
│   │   ├── tours/                 # Tour Package Featured Artwork
│   │   ├── testimonials/          # Customer Avatars
│   │   ├── blog/                  # Article Featured Images
│   │   └── patterns/              # SVG Decorative Wave/Dot Backgrounds
│   │
│   └── fonts/                     # Local Icon & Web Font Files
```

---

## 3. Section Planning for Every Page (Exhaustive Architecture)

### Page 1: Home (`index.html`)
1. **Top Bar Header:** Emergency phone number, support email, language switcher, currency selector (USD/EUR/GBP), social links.
2. **Main Sticky Navbar:** Brand logo, primary menu links, "Book Now" CTA pill button.
3. **Hero Cinematic Slider:** Full-viewport Swiper carousel with floating dark overlay, animated H1 display title ("Explore the World's Hidden Wonders"), subtext, and quick search booking bar.
4. **Quick Search Filter Bar (Floating Card):** Tabbed search (Tours / Hotels / Flights) featuring Destination dropdown, Date Picker, Guests counter, and "Find Tour" submit button.
5. **Popular Destinations Grid:** 6-item bento grid showcasing top destinations with hover card zoom, tour count badges, and starting price tags.
6. **Featured Tour Packages:** 4-column Swiper carousel showcasing top tours with rating stars, duration badge (e.g., "5 Days / 4 Nights"), group size badge, pricing, and "View Details" button.
7. **Value Proposition (Why Choose Us):** 4-column feature highlights (Handpicked Hotels, Best Price Guarantee, 24/7 Dedicated Support, Certified Local Guides) with illustrated icons.
8. **Promotional Banner / Video Parallax:** High-impact background image with play icon modal triggering promotional video, counter statistics (15k+ Happy Travelers, 250+ Tours, 50+ Countries).
9. **Testimonials Carousel:** Centered quote cards highlighting guest experiences, 5-star rating visualizer, traveler name, and tour taken.
10. **Latest Blog Insights:** 3-column article grid previewing travel guides and tips.
11. **Newsletter Call-to-Action:** Wide colored horizontal card capturing visitor emails for exclusive deals.
12. **Master Footer:** 4-column layout (Brand bio, Quick links, Popular tours list, Contact info), payment gateway badge list, copyright line.

### Page 2: About Us (`about.html`)
1. **Global Header & Navbar**
2. **Page Hero Banner:** Centered H1 ("Our Journey & Passion"), breadcrumb trail (`Home / About Us`).
3. **Company Story & Mission:** 2-column split section with editorial copy on left and staggered image collage with floating experience badge (e.g., "12+ Years Experience") on right.
4. **Our Core Values:** 3-column clean card grid (Sustainable Tourism, Integrity & Trust, Luxury Uncompromised).
5. **Team Members Grid:** 4-column display of Founders and Head Tour Guides with social links overlay on hover.
6. **Milestone Counter Bar:** Full-width accent strip showing cumulative statistics.
7. **Partner & Airline Brand Logos:** grayscale logo carousel showing trusted travel partners.
8. **Master Footer**

### Page 3: Destinations (`destinations.html`)
1. **Global Header & Navbar**
2. **Page Hero Banner:** H1 ("Explore Destinations"), breadcrumb trail.
3. **Destination Search & Filter Controls:** Search input, region pills (All / Europe / Asia / Americas / Africa / Oceania).
4. **Main Destination Grid:** 9-item responsive card grid (3x3) with image overlay, country name, city count, starting price, and direct link.
5. **Pagination Bar:** Bootstrap styled pagination (`Previous | 1 | 2 | 3 | Next`).
6. **Lead Generation Banner:** "Can't find your dream spot? Let our travel scouts build a custom trip."
7. **Master Footer**

### Page 4: Destination Details (`destination-details.html`)
1. **Global Header & Navbar**
2. **Destination Hero Showcase:** Wide parallax hero displaying iconic city landmarks, climate widget, visa requirement badge.
3. **Overview & Geography:** Descriptive rich text overview, best time to visit guide, local culture highlights.
4. **Available Tours in Destination:** Filtered 3-column grid showing all tour packages operating specifically in this destination.
5. **Interactive Location Map:** Embedded Google Maps iframe highlighting key attractions and route hubs.
6. **Photo Gallery:** 6-item lightbox masonry grid.
7. **Master Footer**

### Page 5: Tour Packages (`tours.html`)
1. **Global Header & Navbar**
2. **Page Hero Banner:** H1 ("Exclusive Tour Packages"), breadcrumb trail.
3. **Sidebar Filter + Content Layout:**
   * **Left Sidebar (Width 3/12):** Search by keyword, Price Range dual slider, Duration filter checkboxes (1-3 Days, 4-7 Days, 8+ Days), Tour Category checkboxes (Adventure, Honeymoon, Wildlife, Cultural), Star Rating filter.
   * **Right Content Area (Width 9/12):** View switcher (Grid vs. List view icons), sorting dropdown (Price: Low to High, Popularity, Rating), 6-item tour cards with full pricing metadata.
4. **Pagination Controls**
5. **Master Footer**

### Page 6: Package Details (`package-details.html`)
1. **Global Header & Navbar**
2. **Package Header Strip:** Tour Title, Badge list (Featured, Free Cancellation), Rating stars, Location summary.
3. **Main Content Split Layout:**
   * **Left Area (8/12):**
     * **Hero Gallery:** Main large image with 4 thumbnail triggers below.
     * **Quick Specifications Bar:** Duration, Max People, Min Age, Pickup Location, English Guide.
     * **Tour Overview:** Detailed textual summary.
     * **Day-by-Day Itinerary:** Bootstrap Accordion structure detailing Day 1 to Day N activities, meals included, and accommodation specs.
     * **Included vs. Excluded Table:** 2-column list with green checkmarks and red cross icons.
     * **Tour Location Map & Route**
     * **Customer Reviews & Rating Breakdown:** Progress bars for Cleanliness, Guide, Value, and Service.
     * **Leave a Review Form**
   * **Right Sticky Booking Card (4/12):**
     * **Price Display:** Starting from `$1,499` / per person.
     * **Interactive Price Calculator:** Date selection, Adults counter, Kids counter, Extra Add-ons checkboxes (Airport Transfer +$50, Travel Insurance +$85), Total Price dynamic summary.
     * **Instant Booking Button**
     * **Inquire Now Button (Triggers Modal)**
     * **Support Contact Box:** Direct agent phone line.
4. **Related Tour Packages Carousel**
5. **Master Footer**

### Page 7: Gallery (`gallery.html`)
1. **Global Header & Navbar**
2. **Page Hero Banner:** H1 ("Traveler Visual Stories"), breadcrumb.
3. **Category Filter Tabs:** All | Wildlife | Landscapes | Architectural | Aerial | Portraits
4. **Masonry Lightbox Grid:** 12-item responsive masonry layout with hover zoom and caption reveal.
5. **Instagram Live Feed Strip:** Horizontal scrolling grid with `@wanderluxe_travel` follow CTA.
6. **Master Footer**

### Page 8: Blog (`blog.html`)
1. **Global Header & Navbar**
2. **Page Hero Banner:** H1 ("Travel Magazine & Guides"), breadcrumb.
3. **Featured Editorial Post:** Full-width horizontal hero card highlighting the top article of the week.
4. **Main Blog Feed Layout:**
   * **Main Content Area (8/12):** 6 standard blog post preview cards with author avatar, publish date, read time, category tag, excerpt, and "Read More" button.
   * **Right Sidebar (4/12):** Author Bio box, Search widget, Popular Posts list, Categories list with post counts, Popular Tags cloud, Ad/Promo banner.
5. **Pagination Controls**
6. **Master Footer**

### Page 9: Single Blog (`blog-single.html`)
1. **Global Header & Navbar**
2. **Article Hero Header:** Category pill, Article Title (H1), Author info, publish date, social share bar.
3. **Article Main Body:**
   * **Main Content Area (8/12):** Featured image, styled lead paragraph, H2/H3 subheadings, blockquote callout card, inline destination image grid, bulleted summary list, author bio signature block.
   * **Article Sidebar (4/12):** Sticky table of contents, newsletter signup, related tours widget.
4. **Post Navigation Bar:** Previous Post vs. Next Post preview links.
5. **Comments Section:** Existing comments list with nested reply structure + Add Comment form.
6. **Master Footer**

### Page 10: FAQ (`faq.html`)
1. **Global Header & Navbar**
2. **Page Hero Banner:** H1 ("Frequently Asked Questions"), search box for instant filtering.
3. **FAQ Category Navigation:** Sticky horizontal pill tabs (Booking & Payments | Cancellation Policy | Travel Insurance | On-Tour Logistics).
4. **Accordion Sections:** Clean Bootstrap accordion groups with plus/minus icon transition state.
5. **Still Have Questions Callout Card:** Direct contact form button and live chat trigger.
6. **Master Footer**

### Page 11: Testimonials (`testimonials.html`)
1. **Global Header & Navbar**
2. **Page Hero Banner:** H1 ("Traveler Stories & Feedback")
3. **Aggregate Rating Summary Scoreboard:** Overall 4.9/5.0 rating displayed alongside TripAdvisor and Trustpilot trust badges.
4. **Testimonial Masonry Grid:** 9 client review cards displaying full quote, verified traveler badge, trip photographs, and rating stars.
5. **Video Testimonial Showcase:** 3 embedded video thumbnail cards with play modals.
6. **Submit Your Review CTA Card**
7. **Master Footer**

### Page 12: Contact Us (`contact.html`)
1. **Global Header & Navbar**
2. **Page Hero Banner:** H1 ("Get in Touch With Our Scouts")
3. **Contact Info Card Row:** 3 floating cards (Headquarters Address, Direct Phone Lines, Support Email Channels).
4. **Main Interactive Area:**
   * **Left Side (6/12):** Send us a message form (Name, Email, Phone, Subject, Interested Destination, Message, Privacy checkbox, Submit button).
   * **Right Side (6/12):** Full-height embedded Google Maps interactive iframe pin.
5. **Regional Office Locations:** Accordion listing branch offices in New York, London, and Tokyo.
6. **Master Footer**

### Page 13: Privacy Policy (`privacy.html`)
1. **Global Header & Navbar**
2. **Page Hero Banner:** H1 ("Privacy Policy"), effective date.
3. **Legal Content Reader Layout:** Left sticky table of contents navigation (4/12) + Right legal typography body (8/12) detailing data collection, cookies, and user rights.
4. **Master Footer**

### Page 14: Terms & Conditions (`terms.html`)
1. **Global Header & Navbar**
2. **Page Hero Banner:** H1 ("Terms & Conditions of Booking")
3. **Legal Content Reader Layout:** Structured numbered sections detailing liability limits, payment schedules, and cancellation penalties.
4. **Master Footer**

### Page 15: 404 Page (`404.html`)
1. **Global Header & Navbar**
2. **Centered Full-Height Canvas:** Custom illustrated graphic (e.g., lost traveler with compass), H1 ("Oops! You've drifted off the map"), explanation text.
3. **Recovery Navigation:** Large "Back to Homepage" button + quick search bar + links to Top Destinations.
4. **Master Footer**

---

## 4. Reusable Component Inventory

To maintain strict consistency across all 15 pages, template developers must assemble these reusable HTML/CSS building blocks:

1. **`navbar-sticky`:** Transparent-to-solid transition header with brand alignment and mobile toggler.
2. **`hero-slide`:** Swiper slide wrapper with image overlay tinting and caption entrance animations.
3. **`card-destination`:** Aspect ratio container featuring bottom gradient overlay, hover scale trigger, and location metadata.
4. **`card-tour`:** White box layout featuring top thumbnail badge anchor, content padding, rating stars, icon-feature row, and footer price-button split.
5. **`filter-search-box`:** Floating or static tabbed search container with custom Bootstrap form control overrides.
6. **`badge-meta`:** Soft-tinted colored pill badges (e.g., `bg-primary-soft text-primary`) for categories and durations.
7. **`accordion-itinerary`:** Custom styled Bootstrap accordion with numerical day circle indicators and left vertical connecting line.
8. **`breadcrumb-hero`:** White translucent navigation breadcrumb trail placed inside header banners.
9. **`modal-booking`:** Quick inquiry popup modal with hidden tour-ID injection field.
10. **`btn-pill`:** Fully rounded primary/secondary action buttons with smooth hover glow.
11. **`rating-stars`:** Reusable font-awesome star generator (`fa-solid fa-star text-warning`).
12. **`pagination-clean`:** Minimalist bordered pagination buttons.
13. **`newsletter-box`:** Horizontal capture box with side-by-side input and submit button.
14. **`widget-sidebar`:** Clean bordered sidebar card container with distinctive header underline.
15. **`table-specs`:** Alternating row table for itinerary inclusions/exclusions.

---

## 5. Comprehensive Color Palette (Theme: "Editorial Aesthetic")

The WanderLuxe visual architecture adopts a high-end **Editorial Aesthetic ("Voyager")** characterized by rich heritage navy tones, warm cream canvas backgrounds, and gilded gold accents.

| Token Name | Hex Value | RGB Value | Role & Usage Mandate |
| :--- | :--- | :--- | :--- |
| **Navy (Dominant Primary)** | `#141B2D` | `20, 27, 45` | Primary display titles (H1-H6), navigation links, main CTA button backgrounds, dark card gradients. |
| **Navy Gradient Secondary**| `#2A3B5F` | `42, 59, 95` | Secondary stop for destination thumbnail overlays and depth shading. |
| **Gold (Editorial Accent)** | `#C5A059` | `197, 160, 89` | Brand logo highlight ("VOYAGER"), collection labels, price highlights, quote borders. |
| **Gold Gradient Deep** | `#8E6E32` | `142, 110, 50` | Premium hover gradient stop for luxury VIP tour packages. |
| **Warm Canvas (Main Body)**| `#FAF9F6` | `250, 249, 246` | Master page background off-white cream providing a soft, eye-safe magazine feel. |
| **Sand (Secondary Surface)**| `#F0EEE9` | `240, 238, 233` | Alternate showcase section background, sidebar cards, bento grid compartments. |
| **Pure White** | `#FFFFFF` | `255, 255, 255` | Search widget containers, floating booking cards, dropdown menus. |
| **Muted Editorial Gray** | `#9CA3AF` | `156, 163, 175` | Form input micro-labels, subtle vertical watermarks, disabled states. |
| **Minimalist Divider** | `rgba(20,27,45,0.2)`| `20, 27, 45 (20%)`| Minimalist bottom borders for search input fields and sleek vertical section separators. |

---

## 6. Typography System (Editorial Serif & Clean Sans)

The typography pairs classic literary authority with ultra-clean technical precision.

**Primary Web Fonts:**
* **Editorial Display & Headings:** `Georgia, serif` (or `Playfair Display`) — Used for H1, H2, romantic quotes, and storytelling.
* **UI, Navigation, & Form Controls:** `'Helvetica Neue', Arial, sans-serif` — Used for menus, input labels, buttons, and micro-copy.

### Type Scale & Editorial Styling Rules
* **Display H1 Hero Heading:** `4.5rem` (72px / `text-7xl`) | Weight: `300` (Light) | Line Height: `1.1` | Color: `#141B2D`  
  * *Mandate:* Wrap emotional or experiential keywords in `<span class="italic font-normal">...</span>` for signature editorial romanticism.
* **Collection Subtitle:** `0.75rem` (12px) | Family: `var(--f-sans)` | Weight: `700` | Case: `Uppercase` | Tracking: `0.2em` (`tracking-widest`) | Color: `#C5A059`
* **Navigation Links (`.nav-link`):** `11px` | Family: `var(--f-sans)` | Weight: `600` | Case: `Uppercase` | Tracking: `0.15em` | Color: `#141B2D` | Opacity: `0.8`
* **Search Input Fields (`.search-input`):** `13px` | Family: `var(--f-sans)` | Border: `none`, border-bottom `1px solid rgba(20, 27, 45, 0.2)` | Padding: `10px 0`
* **Form Micro-Labels:** `9px` | Family: `var(--f-sans)` | Weight: `700` | Case: `Uppercase` | Tracking: `0.1em` | Color: `#9CA3AF`
* **Vertical Watermark Text (`.vertical-text`):** `10px` | Writing Mode: `vertical-rl` | Transform: `rotate(180deg)` | Tracking: `0.4em` | Opacity: `0.4`

---

## 7. Spacing System & Grid Tokens

The spatial architecture balances wide magazine whitespace with structured column split containers.

### Editorial Container Tokens
* **Split Hero Proportion:** Left Editorial Content (`55%`) + Right Interactive Tide Grid (`45%`).
* **Section Padding:** Generous `64px` (`p-16`) on primary hero sections; `48px` (`p-12`) on side compartments.
* **Vertical Watermark Rail:** Fixed `48px` (`w-12`) left border rail with centered rotated typography.

---

## 8. Button Styles & Sleek Geometry

Buttons abandon rounded pills in favor of sharp, high-end editorial geometry (`2px` border radius).

```css
/* Master Editorial CTA Button */
.cta-button {
  background-color: var(--c-navy); /* #141B2D */
  color: #FFFFFF;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 25px -5px rgba(20, 27, 45, 0.3);
}

.cta-button:hover {
  background-color: var(--c-gold); /* #C5A059 */
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 15px 30px -5px rgba(197, 160, 89, 0.4);
}

/* Secondary Editorial Outline Button */
.btn-editorial-outline {
  background: transparent;
  color: var(--c-navy);
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
  padding: 10px 24px;
  border: 1px solid var(--c-navy);
  border-radius: 2px;
  transition: all 0.25s ease;
}

.btn-editorial-outline:hover {
  background-color: var(--c-navy);
  color: #FFFFFF;
}
```

---

## 9. Hover Effects & Card Art Direction

1. **Destination Lightbox Cards (`.dest-card`):**
   * *Base:* `border-radius: 4px; overflow: hidden; position: relative; cursor: pointer;`
   * *Background Overlays:* Deep gradient tinting `linear-gradient(135deg, #141B2D 0%, #2A3B5F 100%)` or VIP Gold `linear-gradient(135deg, #c5a059 0%, #8e6e32 100%)`.
   * *Image Transition (`.dest-card-img`):* `transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);`
   * *Hover State:* `.dest-card:hover .dest-card-img { transform: scale(1.06); }`
2. **Search Widget Gold Accent:**
   * Search cards feature a distinguished `4px` solid gold left border (`border-left: 4px solid #C5A059;`).
3. **Advanced Search Underline Trigger:**
   * Text triggers feature subtle `underline underline-offset-4 text-xs text-gray-500 hover:text-navy-900`.

---

## 10. Animation Strategy (AOS & Swiper)

**Scroll Entrance Engine:** `AOS (Animate On Scroll)` CDN initialized in `main.js`.
* **Global AOS Defaults:** `duration: 800`, `easing: 'ease-out-cubic'`, `once: true`, `offset: 120`.

### Standardized Section Triggers
* **Section Titles:** `data-aos="fade-up"`
* **Card Grids (Staggered):**
  * Column 1: `data-aos="fade-up" data-aos-delay="0"`
  * Column 2: `data-aos="fade-up" data-aos-delay="150"`
  * Column 3: `data-aos="fade-up" data-aos-delay="300"`
* **Split Content Layouts:**
  * Editorial Copy: `data-aos="fade-right"`
  * Feature Artwork: `data-aos="fade-left"`

### Swiper.js Transitions
* **Hero Carousel:** `effect: 'fade'`, `fadeEffect: { crossFade: true }`, `autoplay: { delay: 6000, disableOnInteraction: false }`, `speed: 1000`.
* **Tour Cards Carousel:** `slidesPerView: 'auto'`, `spaceBetween: 24`, `freeMode: false`, `navigation: { nextEl: '.swiper-btn-next', prevEl: '.swiper-btn-prev' }`.

---

## 11. Responsive Layout & Breakpoint Strategy

Adheres to Bootstrap 5 responsive utility prefixes to guarantee mobile fluidity.

| Breakpoint Prefix | Viewport Width | Architectural Layout Rules |
| :--- | :--- | :--- |
| **`xs` (Default)** | `< 576px` | 1-column cards, hidden top-bar, mobile drawer navigation, sticky bottom booking bar on details pages. |
| **`sm`** | `≥ 576px` | 2-column small destination grids, form inputs stack vertically. |
| **`md`** | `≥ 768px` | 2-column tour cards, filter sidebar collapses into modal button. |
| **`lg`** | `≥ 992px` | Main desktop navbar reveals, 3-column tour grids, split screen 6/6 layouts activate. |
| **`xl`** | `≥ 1200px` | 4-column destination grids, full spacing tokens (`py-section-lg`) applied. |
| **`xxl`**| `≥ 1400px` | Max container width boxed layout, high-definition background parallax. |

---

## 12. Art Direction & Image Style Guidelines

High commercial appeal relies on consistent visual asset standards.

1. **Aspect Ratios (Enforced via CSS `.ratio` or `object-fit: cover`):**
   * Destination Cards: `4:3` (`aspect-ratio: 4/3`)
   * Tour Package Cards: `16:9` (`aspect-ratio: 16/9`)
   * Hero Banners: `21:9` or Full Viewport Height (`100vh`)
   * Traveler Avatars: `1:1` (`border-radius: 50%`)
2. **Color Grading & Overlays:**
   * Text-on-Image Overlays: Linear gradient `to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.2) 60%, transparent 100%`.
3. **Performance Attributes:**
   * All images below the fold MUST include `loading="lazy" decoding="async"`.
   * Hero banner images MUST include `fetchpriority="high"`.

---

## 13. Conversion Architecture & CTA Strategy

Every page guides visitors toward booking funnels or lead inquiry capture.

1. **Primary Conversion Goal:** Direct Package Booking (`checkout.html` or Sticky Details Widget).
2. **Secondary Conversion Goal:** Custom Trip Inquiry (Lead form modal).
3. **Micro-Conversions:** Newsletter subscription, brochure PDF download.
4. **Friction-Reduction Tactics:**
   * Sticky booking bar on mobile viewports keeping price and "Book" button visible during scrolling.
   * Trust badges placed immediately beneath CTA buttons ("No hidden fees • Instant Confirmation").

---

## 14. SEO Structure Plan & Semantic HTML

* **Semantic Shell:** Strict usage of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
* **Heading Hierarchy:** One `<h1>` per page. Sequential descending structure (`<h2>` for sections, `<h3>` for cards). Never skip heading levels.
* **OpenGraph Meta Tags:** Standardized OG title, description, image, and url tags in all `<head>` blocks.
* **Structured Data (Schema.org JSON-LD):**
  * Homepage includes `TravelAgency` organization schema.
  * Package single pages include `TouristTrip` and `Product` schema with aggregate ratings and price offers.

---

## 15. WCAG 2.1 AA Accessibility Plan

1. **Keyboard Navigation:** All interactive elements (`<a>`, `<button>`, `<input>`) maintain visible focus outlines (`:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }`).
2. **Color Contrast:** All body text meets minimum `4.5:1` contrast ratio against backgrounds. Muted text on dark overlays verified at `≥ 4.5:1`.
3. **Screen Readers:**
   * Icon-only buttons (search toggles, social links) contain `aria-label="Description"`.
   * Decorative background patterns contain `aria-hidden="true"`.
4. **Form Labels:** Every form input strictly linked to a `<label>` via matching `for` and `id` attributes.

---
*End of Blueprint Specification. Built for ThemeForest Excellence.*
