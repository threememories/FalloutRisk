See bottom for Change Log

# RobCo OS: Strategic Simulation (Fallout Risk)

Welcome to the RobCo OS Strategic Simulation. This is a completely free, browser-based tactical strategy game set in the Fallout universe. 

You play as a wasteland commander tasked with outmaneuvering rival factions, managing resources, and surviving environmental hazards to claim all 42 territories on the map. The game is 100% free to play, download, and modify.

---

## How to Play

If you are new to the wasteland, here is exactly how a standard turn works:

### 1. The Boot Sequence
When you load the game, you will be prompted to set up your simulation. You can choose your holographic map theme (Capital Wasteland or Mojave), input your Commander's name, and select a faction color. You can also toggle environmental hazards and adjust the AI difficulty.

### 2. Phase 1: Deploy
At the start of your turn, you will receive reserve troops based on the number of territories you control. 
* **To deploy:** Click on any territory you already own to add 1 troop to its garrison.
* **Shortcut:** Hold the `SHIFT` key while clicking to deploy your entire reserve pool into that territory all at once.

### 3. Phase 2: Combat (V.A.T.S.)
Once your reserves are placed, you enter the Battle Phase.
* **To attack:** Click one of your territories that has at least 2 troops in it (this highlights it). Then, click an adjacent enemy territory.
* **Using V.A.T.S.:** Before you attack, hover your mouse over the enemy territory. The Vault-Tec Assisted Targeting System will pop up, calculating your exact mathematical probability of winning the battle based on your army size and the difficulty setting.
* **Victory:** If you defeat the enemy, you will be prompted to type in exactly how many troops you want to move into the newly conquered land. (You must leave at least 1 troop behind to guard your staging area).

### 4. Phase 3: Maneuver
When you are finished attacking, you may make **one** tactical maneuver before ending your turn.
* **To maneuver:** Click a territory you own, then click another connected territory you own. You will be prompted to type in how many troops you want to shuffle between them to reinforce your borders.

### 5. Managing Bottle Caps
Every turn you successfully conquer at least one territory, you earn a Bottle Cap card. 
* Click "Open Stash" on the left panel to view your Caps. 
* If you collect 3 of the same kind, or 1 of each unique kind, the Stash button will glow. You can trade these Caps in for a massive influx of reserve troops.
* **Pro-Tip:** If you completely wipe an enemy faction off the map, you instantly steal their entire unspent Cap stash!

---

## Features & Mechanics

* **Authentic Terminal UI:** Dynamic CRT scanlines, glowing text, and an interactive Pip-Boy style navigation menu.
* **Radstorms:** Unpredictable radioactive weather fronts. You will get a warning before they touch down and wipe out 10-25% of troops caught in the blast zone.
* **Wild Ghouls:** Unclaimed territories are occupied by feral ghouls. They possess a defensive bonus and will dynamically multiply across the map on higher difficulty settings.
* **Pip-Boy Radio:** A built-in frequency scanner to play wasteland tracks while you strategize. *(Note: Requires local MP3 files to function).*
* **Version History:** An animated, pausing telemetry ticker logging all major patches and updates directly in the terminal menu.

---

## How It Was Made

This project was built entirely using standard web technologies: HTML, CSS, and JavaScript. It does not require a database, a backend server, or any complex installation—everything runs directly inside your web browser. 

The game started as a fork of the open-source HTML5 Canvas Risk Game originally developed by Vinayak Vedantam. 

To transform it into a robust Fallout-themed experience, I collaborated with an AI (Google Gemini) as a coding partner. Through guided prompt engineering, we overhauled the core engine to inject dynamic game loops, rewrite the combat math (implementing Gambler's Ruin algorithms for the V.A.T.S. targeting), design the CSS terminal aesthetics, and build out complex features like the roaming Radstorms and automated AI behavior. 

---

## Download & Installation

Because the game is completely self-contained, you don't need to install anything to play it. 

1. Open the `index.html` file in your browser.
2. To save the game to your computer for offline play, simply right-click the page and select **Save As...**, making sure to save it as a "Webpage, Single File" or `.html`.

*(If you want the Pip-Boy Radio to work locally, place the MP3 files in the same folder as the HTML file.*

---

## Support & Feedback

* **Submit Bug Reports:** Find a glitch in the code? Send an email to [threememories@yahoo.com](mailto:threememories@yahoo.com?subject=RobCo%20OS%20Bug%20Report).
* **Survival Field Manual:** If you enjoy surviving this digital wasteland, consider supporting the creator by checking out the real-world field manual: [SurvivalSOS: Fundamentals of Survival by Joseph Howard](https://www.amazon.com/SurvivalSOS-Fundamentals-Survival-Joseph-Howard/dp/B09TZ4WXZC).

---

**Disclaimer:** This is an independent, fan-made project. It is not affiliated with, endorsed by, or sponsored by Bethesda Softworks, Bethesda Game Studios, or any entities associated with the Fallout franchise.







CHANGE LOG

v1.6 [SECURITY & UI PROTOCOLS]
Anti-Hacking Patch: Implemented advanced input sanitization to block malicious code injection at the boot terminal.
OS Version History: Initialized scrolling telemetry window to track simulation patch notes.

v1.5 [SYSTEMS UPGRADE]
V.A.T.S. Upgrade: Hover targeting now utilizes Gambler's Ruin algorithms to calculate total victory probability (capped at 95%).
Customization: Faction color override matrix added to Boot Sequence.
Cap Economy: Reserve pool expanded to 50, featuring dynamic "Wasteland Salvage" forging.
UI Refinement: Overhauled the Survival Guide into a compact, tactical layout.

v1.4 [COMBAT & LOOT PROTOCOLS]
Tactical Routing: Commanders may now dictate exact troop garrison sizes post-victory.
Wasteland Justice: Eradicating a rival faction now instantly transfers their entire Cap stash to your inventory.
Neutral Threat: Feral Ghouls now dynamically multiply based on active simulation difficulty.
Logistics: "Fixed Reinforcements" (Always 3) trade rule added to boot options.

v1.3 [ENVIRONMENTAL HAZARDS]
Meteorology: Radstorms added to the simulation.
Fauna: Wild Ghouls (Neutral Threat) optional hazard integrated into the map.
Comms: Pip-Boy Wasteland Radio frequency scanner initialized.

v1.2 [HOLOTAPE INTERFACE]
Telemetry: Vault-Tec Action Log implemented for real-time combat and event tracking.
Immersion: Randomized wasteland encounter logs integrated into the turn cycle.
System Clock: Holiday protocol initialized to trigger date-specific wasteland encounters.
UI: Dynamic HP (Territorial Health) and AP (Action Point) tracking gauges added to the Commander's dashboard.
Performance: Turbo Mode toggle added to bypass V.A.T.S. rendering for accelerated AI processing.

v1.1 [PIP-BOY SCREEN AND UI]
Themes: Capital Wasteland and Mojave holographic overlays loaded.
