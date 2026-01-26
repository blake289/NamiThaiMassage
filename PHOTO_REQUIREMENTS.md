# Photo Requirements for Info Pages

## Overview
16 info pages need relevant, professional massage therapy photos. All images should be placed in `/public/images/info/`

## Recommended Stock Photo Sources
1. **Pexels** (https://www.pexels.com) - Free, high-quality
2. **Unsplash** (https://unsplash.com) - Free, professional
3. **Pixabay** (https://pixabay.com) - Free, commercial use
4. **Adobe Stock** (https://stock.adobe.com) - Premium option

## Image Specifications
- **Format**: JPG or WebP
- **Size**: 1200px wide minimum
- **Aspect Ratio**: 16:9 or 4:3
- **Quality**: High resolution, professional
- **Style**: Warm lighting, spa-like atmosphere, professional setting

---

## Massage Types (6 photos needed)

### 1. Thai Massage Benefits
- **File**: `/public/images/info/thai-massage.jpg`
- **Search Terms**: "thai massage stretching", "traditional thai massage", "thai massage therapy"
- **What to show**: Traditional Thai massage with stretching/pressure techniques, preferably on mat

### 2. Deep Tissue Massage
- **File**: `/public/images/info/deep-tissue-massage.jpg`
- **Search Terms**: "deep tissue massage", "massage therapy back", "therapeutic massage"
- **What to show**: Therapist working on back/shoulders with focused pressure

### 3. Swedish Massage
- **File**: `/public/images/info/swedish-massage.jpg`
- **Search Terms**: "swedish massage", "relaxing massage", "spa massage therapy"
- **What to show**: Gentle, flowing massage strokes on back, relaxing atmosphere

### 4. Sports Massage
- **File**: `/public/images/info/sports-massage.jpg`
- **Search Terms**: "sports massage", "athletic massage therapy", "muscle recovery massage"
- **What to show**: Massage on legs/arms, athletic/recovery context

### 5. Hot Stone Massage
- **File**: `/public/images/info/hot-stone-massage.jpg`
- **Search Terms**: "hot stone massage", "stone therapy", "spa hot stones"
- **What to show**: Hot stones placed on back, spa setting

### 6. Prenatal Massage
- **File**: `/public/images/info/prenatal-massage.jpg`
- **Search Terms**: "prenatal massage", "pregnancy massage", "maternity massage therapy"
- **What to show**: Side-lying prenatal massage position with proper support

---

## Who We Help (5 photos needed)

### 7. Office Workers & Desk Jobs
- **File**: `/public/images/info/office-workers-massage.jpg`
- **Search Terms**: "neck massage office", "shoulder massage desk worker", "upper back massage"
- **What to show**: Neck/shoulder massage, person in business casual clothing

### 8. Athletes & Active Lifestyle
- **File**: `/public/images/info/athletes-massage.jpg`
- **Search Terms**: "athlete massage", "sports recovery massage", "fitness massage therapy"
- **What to show**: Athletic person receiving massage, recovery/performance context

### 9. Chronic Pain Relief
- **File**: `/public/images/info/chronic-pain-massage.jpg`
- **Search Terms**: "pain relief massage", "therapeutic massage", "medical massage therapy"
- **What to show**: Focused therapeutic work on specific problem area (back, neck, shoulders)

### 10. Stress & Anxiety Relief
- **File**: `/public/images/info/stress-relief-massage.jpg`
- **Search Terms**: "relaxation massage", "stress relief massage", "calming massage therapy"
- **What to show**: Head, neck, or shoulder massage, peaceful/relaxed expression

### 11. Seniors & Elderly
- **File**: `/public/images/info/seniors-massage.jpg`
- **Search Terms**: "senior massage", "elderly massage therapy", "gentle massage older adults"
- **What to show**: Gentle massage on senior client, professional and respectful setting

---

## Locations We Serve (5 photos - can reuse 2-3 general massage photos)

### 12. North Park
- **File**: `/public/images/info/north-park-massage.jpg`
- **Search Terms**: "massage therapy studio", "professional massage room", "spa interior"
- **What to show**: Clean, professional massage room or studio exterior (Option: photo of actual studio location)

### 13-16. Hillcrest, University Heights, Normal Heights, Balboa Park
- **Files**:
  - `/public/images/info/hillcrest-massage.jpg`
  - `/public/images/info/university-heights-massage.jpg`
  - `/public/images/info/normal-heights-massage.jpg`
  - `/public/images/info/balboa-park-massage.jpg`
- **Search Terms**: "massage therapy session", "spa treatment", "professional massage"
- **What to show**: General professional massage therapy scenes (can reuse 2-3 photos across these pages)

---

## Quick Action Steps

1. **Create the directory**:
   ```bash
   mkdir -p public/images/info
   ```

2. **Download photos** from Pexels/Unsplash using the search terms above

3. **Rename and save** files to exact paths listed above

4. **Optimize images** (optional but recommended):
   ```bash
   # Install image optimizer
   npm install -g sharp-cli

   # Optimize all images
   sharp -i public/images/info/*.jpg -o public/images/info/ -q 85
   ```

5. **Images will automatically appear** on the info pages once files are in place

---

## Alternative: AI-Generated Images

If you prefer custom images, you can use:
- **Midjourney** (https://midjourney.com)
- **DALL-E** (https://openai.com/dall-e)
- **Stable Diffusion** (https://stability.ai)

Use prompts like: "Professional massage therapy session, spa setting, warm lighting, serene atmosphere, high quality photography"

---

## Notes
- Ensure all images are licensed for commercial use
- Maintain consistent style across all photos (similar lighting, tone, professionalism)
- Images should represent diversity and inclusivity
- Avoid overly clinical or medical-looking photos
- Focus on relaxation, professionalism, and healing
