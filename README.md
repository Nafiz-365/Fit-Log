# FitLog — Workout Library

> **"TRAIN WITH INTENT. LOG EVERY SET."**  
> FitLog is a dark, high-performance gym companion web application built to help lifters browse workouts, lock exercises into today's training plan, track active metrics, and organize saved exercises.

---

## 🚀 Live Demo & Repository

- **Live Demo Reference:** [Fit-Log]('https://b14-fit-log.netlify.app/')
- **Built with:** Next.js (App Router), React 19, TypeScript, and Tailwind CSS.

---

## 🛠️ Technologies Used

| Technology                     | Purpose                                                                                               |
| :----------------------------- | :---------------------------------------------------------------------------------------------------- |
| **Next.js (v16 App Router)**   | Fast server/client component architecture, dynamic routes (`/exercise/[id]`), and static optimization |
| **React 19**                   | Component state management, custom contexts, and hooks                                                |
| **TypeScript**                 | Strict type safety for API models, workouts, and context actions                                      |
| **Tailwind CSS (v4)**          | Custom dark theme (`#0f1115`), neon lime accents (`#CCFF00`), and responsive layouts                  |
| **Lucide React**               | Sleek, modern icons for fitness stats, navigation, and badges                                         |
| **Next Font (Oswald & Inter)** | Bold athletic uppercase display typography paired with clean legible sans-serif                       |

---

## 🌟 Key Features

### 1. 🏋️ The Library (Interactive Exercise Grid)

- Displays 12 essential lifts across all major muscle groups (Chest, Arms, Back, Legs, Shoulders, Core, Full Body).
- Clean **3x4 responsive grid** on desktop screen sizes collapsing smoothly down to tablet and mobile.
- **Card metadata:** High-definition demonstration imagery, category tag pills, workout title, equipment line, and quick stats row (duration, calories burned, star rating).
- **Instant Search & Category Filter:** Search workouts on the fly by name, target muscle group, or equipment.
- **Skeleton Loading State:** Smooth pulse animation while exercise data is fetched from the Cloudflare Worker API.

### 2. 📋 Two-Column Workout Details (`/exercise/[id]`)

- **Left Column:** Large, high-resolution demonstration visual with rounded corners and subtle shadow.
- **Right Column:**
    - Bold uppercase workout title with detailed training description.
    - Category muscle tags.
    - **Key Specs Panel:** Tabular breakdown of Equipment, Difficulty, Sets, Reps, Duration, Calories, and Rating.
    - **Step-by-Step Instructions:** Ordered numbered list outlining proper form, setup, execution, and cues.
    - **Action Controls:** Primary _"Add to today's plan"_ button and secondary _"Save for later"_ button with active toast feedback.

### 3. 📊 Live Training Metrics Dashboard (`/my-plan`)

- Three live stat cards updating in real-time as lifts are added or removed:
    - **Exercises:** Total count of active lifts in today's plan (highlighted in electric lime).
    - **Minutes:** Cumulative estimated workout duration.
    - **Calories:** Cumulative calorie burn for today's session.
- Both starting at 0 and updating instantaneously.

### 4. 🗂️ Dual Tab Management: "Today's Plan" & "Saved"

- Dedicated tab switcher to toggle between today's active session and bookmarks.
- **5-Lift Cap Guard:** Enforces a maximum limit of 5 exercises for today's plan (_"Cap of five lifts for today. Finish them, then load more."_).
- **Empty State:** Clean dashed container displaying _"NOTHING HERE YET"_, motivational copy, and a direct _"Go to workouts"_ CTA button.

### 5. 🎯 Challenge Tasks: Smart Sorting & Completion

- **C1. Multi-Criteria Sort Dropdown:** Instant re-sorting of the current active list by **Duration**, **Calories**, or **Rating** with custom dropdown menu and chevron indicator.
- **C3. "Mark as Done":** Toggle complete status with a checkmark badge, strike-through styling, and completion toast notification.
- **C3. Removal (X):** Instantly remove any planned or saved workout with live metric recalculation and confirmation toast.

### 6. 💾 LocalStorage Persistence & Offline Resilience

- All planned workouts, saved items, and completed states are safely synchronized to browser `localStorage` (`fitlog_today_plan_v1`, `fitlog_saved_plan_v1`).
- Survives page reloads without hydration mismatch or data loss.
- Includes a resilient fallback dataset to guarantee zero UI interruption if the API server experiences downtime.

### 7. 🔝 Sticky Navbar & Status Badges

- Brand dumbbell logo + **FITLOG** branding linking directly home.
- Center navigation pills with active page indicator.
- Right-side status counters linking directly to `/my-plan`:
    - **Plan Badge:** Filled electric lime pill with bold black count.
    - **Saved Badge:** Refined outlined pill with live count.
- Mobile drawer navigation for small screens.

### 8. 🛡️ Custom 404 & Loading States

- Dedicated `not-found.tsx` for unknown routes with a clean _"Back to Workouts"_ navigation option.
- Dedicated `loading.tsx` for route transitions with an animated spinner.

---

## 📡 API Endpoints Used

- **All Workouts:** `https://api.abcz.workers.dev/api/fitlog`
- **Single Workout Detail:** `https://api.abcz.workers.dev/api/fitlog/:id`

---

## 💻 Getting Started Locally

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd fit-log

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

© 2026 FitLog — Workout Library. Train hard, log honest.
