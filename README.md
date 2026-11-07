# Family Feast 🍽️

Our fortnight of meals, recipes and one cheap payday shop, as an app for iPhone (and Android, iPad or a computer).

- A homepage with tonight's dinner and the fortnight's budget
- 14 days of breakfast, lunch and dinner, with full recipes and tips for Dexter
- Swap any meal, and the shopping list and store prices update straight away
- A trolley checklist that remembers what you've ticked
- Works offline once it's been opened, which helps in the supermarket
- Lofi music and soft sounds in the menu (tap to turn off)

---

## 1. Put it on GitHub (one time, about 5 minutes)

1. Sign in at **github.com** (or create a free account).
2. Click **+** (top right) → **New repository**.
   - Name: `family-feast`
   - Choose **Public** (needed for free hosting)
   - Click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Unzip `family-feast.zip` on your computer. Open the `family-feast` folder, select **everything inside it** (`index.html`, `sw.js`, `manifest.webmanifest`, `README.md` and the `data`, `icons` and `js` folders), and drag it all onto the GitHub page.
   - The folders must upload as folders. Dragging in Chrome or Safari on a computer does this.
   - The upload also includes a hidden `.nojekyll` file. If you don't see it, that's fine.
5. Click **Commit changes**.
6. Go to **Settings** → **Pages** (left menu).
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**.
   - Set the branch to **main** and the folder to **/ (root)**, then click **Save**.
7. Wait a minute or two, then refresh that page. It shows your app's address, something like:

   **`https://YOUR-USERNAME.github.io/family-feast/`**

## 2. Install it on an iPhone

Send that link to your partner (by text or email), then on the iPhone:

1. Open the link in **Safari**. It must be Safari for this step.
2. Tap the **Share** button (the square with an arrow pointing up).
3. Scroll down and tap **Add to Home Screen**, then **Add**.

Feast now sits on the home screen with its own icon and opens full screen like a normal app.

## Good to know

- **Each phone keeps its own swaps and ticks.** If one of you swaps a meal, the other phone won't see it. To make a swap everyone's plan, open **Trolley checklist**, tap **Copy plan** and send the code to Claude.
- **No sound?** iPhones mute app sounds when the side switch is on silent. Flip it to ring, or use the 🎵 / 🔔 buttons in the menu to turn the sounds off.
- **Privacy:** a public repository means anyone who has the link can see the meal plan and Dexter's name. It doesn't contain anything else personal.

## Each new fortnight

Ask Claude for the next fortnight's plan. You'll get three new files: `prices.json`, `recipes.json` and `plan.json`. On GitHub, open the `data` folder, click **Add file** → **Upload files**, drop the three new files in and click **Commit changes**. Both phones pick up the new plan the next time the app is opened with internet.

## What's inside

| File | What it does |
|---|---|
| `index.html` | The app's screens and styling |
| `js/app.js` | Meal swaps, the shopping-list maths and moving between screens |
| `js/draw.js`, `js/draw2.js` | Draw the meals, recipes, checklist, prices and leaderboard |
| `js/audio.js` | Makes the lofi music and sounds live (no audio files) |
| `js/persist.js` | Saves swaps, ticks and sound settings on the phone |
| `js/shim.js` | Loads the data files |
| `data/*.json` | This fortnight's prices, recipes and plan |
| `sw.js`, `manifest.webmanifest`, `icons/` | Make it installable and work offline |

Prices are from ShopSaver (ALDI, Woolworths and Coles), checked 7 November 2026. The budget is $350 a fortnight.
