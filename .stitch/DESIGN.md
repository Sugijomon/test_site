Digidactics Design System
> Portable design system for use with Stitch, Claude Code, and other AI coding agents.
---
Brand Identity
Company: Digidactics  
Logo mark: Three overlapping rounded diamonds in Primary Blue, Primary Magenta, and Primary Green  
Logo text: "Digidactics" in Primary Blue, bold rounded sans-serif  
Personality: Professional, modern, accessible, educational
---
Color System
Core Brand Triangle
Name	Hex	RGB	Usage
Primary Blue	`#00A1DA`	rgb(0, 161, 218)	Main accent, CTAs, logo text
Primary Magenta	`#CC1E6D`	rgb(204, 30, 109)	Secondary accent, highlights
Primary Green	`#93C942`	rgb(147, 201, 66)	Tertiary accent, success
Accent Palette (A-series)
Token	Name	Hex	Usage
A1	Primary Blue	`#00A1DA`	Main accent, buttons, links
A2	Primary Hover	`#007AA9`	Hover states, dark variant
A3	Light Info Blue	`#7DD6F0`	Light backgrounds, info tags
A4	Primary Magenta	`#CC1E6D`	Secondary 1, badges
A5	Primary Green	`#93C942`	Secondary 2, success states
A6	UI Blue-Grey	`#6993AA`	Calm/neutral accents, icons
A7	Soft Background	`#F7FAFC`	Primary page background
Neutral System (B-series)
Token	Name	Hex	Usage
B1	Headings/Dark	`#222222`	H1–H4 text
B2	Body Text	`#4A4A4A`	Paragraphs, body copy
B3	Muted/Icons	`#9B9B9B`	Placeholders, muted labels
B4	Borders/Lines	`#E1E1E1`	Dividers, card borders
B5	Soft Divider	`#F5F5F5`	Subtle section breaks
B6	Alternate BG	`#EEF2EE`	Alternate section background
B7	Pure White	`#FFFFFF`	Cards, modals, clean surfaces
---
Typography
Font Pairing
Manrope — headings, hero titles, card titles (geometric, slightly futuristic, approachable)  
Inter — body copy, navigation, labels, buttons, all UI text (legible, grounded, consistent)
```html
<!-- Google Fonts import -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@500;600;700&display=swap" rel="stylesheet">
```
> **Kadence note:** Enable "Local Google Fonts" so fonts are hosted on your server (better performance + China-friendly).
Font Stack
```css
--font-heading: 'Manrope', system-ui, sans-serif;
--font-body:    'Inter', system-ui, sans-serif;
```
Scale
Element	Font	Size	Weight	Color	Line Height
H1	Manrope	2.875rem (46px)	700	`#222222`	1.15
H2	Manrope	2rem (32px)	600	`#222222`	1.2
H3	Manrope	1.5rem (24px)	600	`#222222`	1.25
H4	Manrope	1.25rem (20px)	500	`#222222`	1.3
Body L	Inter	1.125rem (18px)	400	`#222222`	1.6
Body	Inter	1rem (16px)	400	`#4A4A4A`	1.6
Label	Inter	0.875rem (14px)	500	`#9B9B9B`	1.4
Caption	Inter	0.8125rem (13px)	400	`#9B9B9B`	1.4
H3	1.5rem	600	`#222222`	1.3	
H4	1.25rem	600	`#222222`	1.35	
Body	1rem	400	`#4A4A4A`	1.6	
Small	0.875rem	400	`#9B9B9B`	1.5	
Caption	0.75rem	500	`#9B9B9B`	1.4	
---
Spacing & Layout
```css
--space-xs:  0.25rem;   /*  4px */
--space-sm:  0.5rem;    /*  8px */
--space-md:  1rem;      /* 16px */
--space-lg:  1.5rem;    /* 24px */
--space-xl:  2rem;      /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */

--container-max: 1200px;
--container-padding: 1.5rem;
--section-padding: 4rem 1.5rem;
```
---
Border Radius
```css
--radius-sm:   4px;   /* inputs, tags */
--radius-md:   8px;   /* cards, modals */
--radius-lg:   12px;  /* hero cards */
--radius-xl:   16px;  /* feature panels */
--radius-full: 9999px; /* pills, badges, logo diamonds */
```
---
Shadows
```css
--shadow-sm:  0 1px 3px rgba(0,0,0,0.08);
--shadow-md:  0 4px 12px rgba(0,0,0,0.10);
--shadow-lg:  0 8px 24px rgba(0,0,0,0.12);
--shadow-blue: 0 4px 16px rgba(0,161,218,0.25);
```
---
Components
Buttons
```css
/* Primary */
background: #00A1DA;
color: #FFFFFF;
border-radius: 8px;
padding: 0.75rem 1.75rem;
font-weight: 600;
transition: background 0.2s;

/* Primary Hover */
background: #007AA9;

/* Secondary (outline) */
background: transparent;
border: 2px solid #00A1DA;
color: #00A1DA;

/* Destructive / Alert */
background: #CC1E6D;
color: #FFFFFF;
```
Cards
```css
background: #FFFFFF;
border: 1px solid #E1E1E1;
border-radius: 12px;
padding: 1.5rem;
box-shadow: 0 4px 12px rgba(0,0,0,0.10);
```
Badges / Tags
```css
/* Info */
background: #7DD6F0;
color: #00A1DA;
border-radius: 9999px;
padding: 0.25rem 0.75rem;
font-size: 0.75rem;
font-weight: 500;

/* Success */
background: #93C942;
color: #FFFFFF;

/* Alert */
background: #CC1E6D;
color: #FFFFFF;
```
Navigation
```css
background: #FFFFFF;
border-bottom: 1px solid #E1E1E1;
height: 64px;
/* Logo left, nav links right */
/* Active link: color #00A1DA, font-weight 600 */
```
Hero Section
```css
background: linear-gradient(135deg, #F7FAFC 0%, #EEF2EE 100%);
/* Or: background: #00A1DA with white text for high-impact hero */
padding: 5rem 1.5rem;
text-align: center;
```
Section Alternation
```
White (#FFFFFF) → Soft BG (#F7FAFC) → Alternate BG (#EEF2EE) → repeat
```
---
Iconography
Style: Outlined, 2px stroke, rounded caps
Size: 20px (inline), 24px (standalone), 40px (feature icons)
Color: Matches context — A1 for primary, A6 for neutral, B3 for muted
---
Logo Usage
On white/light: Full color logo (blue text + three-color diamonds)
On dark/colored BG: White text + three-color diamonds
Minimum size: 120px wide
Clear space: Equal to the height of the diamond mark on all sides
Never: Recolor, stretch, or remove the diamond mark from the wordmark
---
Product Sub-brands
Product	Subdomain	Accent Color
Shadow AI Scan	sai.digidactics.nl	Primary Blue A1
AISA	aisa.digidactics.nl	Primary Magenta A4
RouteAI	rai.digidactics.nl	Primary Green A5
> All three products share this base design system. Per-product accent color is used for CTAs, active states, and hero backgrounds only.
---
Accessibility
Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text
`#00A1DA` on white: passes AA for large text only — use `#007AA9` (A2) for small body text on white
`#CC1E6D` on white: passes AA large text — use dark variant for small text
Focus states: 2px solid `#00A1DA`, 2px offset
