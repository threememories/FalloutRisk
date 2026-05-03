# Update History: Wasteland Conquest Changes

This log covers the major changes of Wasteland Conquest (index.html).

---

### v2.0 [WASTELAND CONQUEST UPDATE]
This was a major overhaul of the game's mechanics and interface.
- Bottle Cap Economy: Territories now produce Bottle Caps each turn. You can use these to buy troops from the recruitment terminal instead of relying only on card trades.
- Game Mode Presets: Added several new ways to play, like Survival, Apocalypse, and Alliance Warfare. Each mode toggles different rules automatically.
- Random Encounters: Territories can now trigger events like finding loot caches, radio transmissions, or creature attacks.
- Faction Perks: Every faction now has a unique gameplay bonus (e.g., the Institute's synth respawns or the Enclave's vertibird moves).
- Improved Commanders: Commanders now have HP and AP stats. You can use Stimpaks to heal them. If they die in battle, your game is over.
- Nukes: Players can now capture Nuclear Silos and find launch codes to destroy enemy territories.
- Visibility: Added Fog of War and a Perception system. You'll need items like the Perception Bobblehead to see through the fog.
- Save/Load System: You can now save your game as a JSON file and load it back up later.
- Map Icons: Replaced the old text symbols with custom SVG icons for each faction.
- Terminal Overhaul: The help system was rewritten as a multi-page terminal with detailed info on all mechanics.
- Mobile Layout: Added better support for mobile browsers with a landscape-specific UI.
- Turbo Mode: Added a toggle to speed up AI turns.

---

## Legacy v1.9 [MOBILE PORT & HOTFIXES]

- Commander Combat Adjustments: Assassinations are much harder. Troop damage to Commanders is reduced, ambushes are limited to once per turn, and entrenched Commanders require taking the territory first.
- Advanced AI Tactics: AI commanders now retreat at 50% HP, avoid crowded territories, hold defensive chokepoints, and navigate home intelligently if stranded.
- Turbo Mode Auto-Skip: The game now automatically advances the phase when your AP depletes.
- Smart UI & Map Upgrades: The map perfectly renders multiple VIP stars and adds V.A.T.S. hover warnings for entrenched targets.
- New Holotape Loaded: Added Fallout 4 (The Commonwealth) to the theme selector.

---

## Legacy v1.8 [MOBILE PORT & HOTFIXES]

- Hardware Port: RobCo OS now natively supports handheld (mobile) terminals. Device must be rotated to Landscape mode to initialize.
- Threat Patch: Resolved a logic error preventing the Wild Ghouls subsystem from properly infesting unclaimed sectors at boot.
- The Status and Directive terminal readouts have been completely overhauled.
- Commanders now receive heavy home-turf damage resistance and can flip enemy territories after a ten-phase siege.
- When a faction's Commander is killed, their entire empire completely collapses into unowned, neutral wasteland.
- Wasteland diplomacy dynamically scales Ceasefire negotiations, trading exact Bottle Cap amounts for equal rounds of peace.
- The interface and map graphics have been optimized to provide a more stable, readable, and streamlined visual experience during gameplay.
- Shout-out to Alex for helping me debug.

---

## Legacy v1.7 [SCORCHED EARTH & COMMANDERS]

- Scorched Earth: Optional Nuke Protocol. Secure Launch Codes and hold highly-defensible Command Silos to unleash permanent radiation.
- Commander Protocol: Each faction is led by a VIP (100 HP). If they die, you lose. Manage AP, Stimpaks, and map movement to survive.
- Wasteland Diplomacy: Implemented the ability to offer Caps to rivals for a 3-Round Ceasefire.
- Wasteland Karma: Breaking a truce now incurs a permanent "Betrayal Tax" and triggers retaliatory AI Spite Alliances.

---

## Legacy v1.6 [SECURITY & UI PROTOCOLS]

- Anti-Hacking Patch: Implemented advanced input sanitization to block malicious code injection at the boot terminal.
- OS Version History: Initialized scrolling telemetry window to track simulation patch notes.

---

## Legacy v1.5 [SYSTEMS UPGRADE]

- V.A.T.S. Upgrade: Hover targeting now utilizes Gambler's Ruin algorithms to calculate total victory probability (capped at 95%).
- Customization: Faction color override matrix added to Boot Sequence.
- Cap Economy: Reserve pool expanded to 50, featuring dynamic "Wasteland Salvage" forging.
- UI Refinement: Overhauled the Survival Guide into a compact, tactical layout.

---

## Legacy v1.4 [COMBAT & LOOT PROTOCOLS]

- Tactical Routing: Commanders may now dictate exact troop garrison sizes post-victory.
- Wasteland Justice: Eradicating a rival faction now instantly transfers their entire Cap stash to your inventory.
- Neutral Threat: Feral Ghouls now dynamically multiply based on active simulation difficulty.
- Logistics: "Fixed Reinforcements" (Always 3) trade rule added to boot options.

---

## Legacy v1.3 [ENVIRONMENTAL HAZARDS]

- Meteorology: Radstorms added to the simulation.
- Fauna: Wild Ghouls (Neutral Threat) optional hazard integrated into the map.
- Comms: Pip-Boy Wasteland Radio frequency scanner initialized.

---

## Legacy v1.2 [HOLOTAPE INTERFACE]

- Telemetry: Vault-Tec Action Log implemented for real-time combat and event tracking.
- Immersion: Randomized wasteland encounter logs integrated into the turn cycle.
- System Clock: Holiday protocol initialized to trigger date-specific wasteland encounters.
- UI: Dynamic HP (Territorial Health) and AP (Action Point) tracking gauges added to the Commander's dashboard.
- Performance: Turbo Mode toggle added to bypass V.A.T.S. rendering for accelerated AI processing.

---

## Legacy v1.1 [PIP-BOY SCREEN AND UI]

- Themes: Capital Wasteland and Mojave holographic overlays loaded.
