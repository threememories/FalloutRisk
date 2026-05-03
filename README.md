# Wasteland Conquest

Wasteland Conquest is a free, browser-based strategy game inspired by Risk and the Fallout universe. 

**Note on Naming:** This project was formerly titled "RobCo OS: Strategic Simulation." We have officially rebranded to **Wasteland Conquest** as of the latest version. This game is an independent project and has no affiliation with the "Wasteland Conquest" mod or any other software sharing the same name.

Play right now in your browser: https://linology.tech/risk/

(Linology is the official host, chosen for its safety and reliability. While other websites are free to host the game, this is the only link guaranteed to be secure and fully updated.)


### Downloading and Offline Play
You can download the game to play offline by simply saving the `index.html` file from this repository or the live site. Please note that the game's music tracks are not included in the standalone HTML download and require an active internet connection to stream if playing from thhe main site.

### Source Code and Support
The source code is hosted at https://github.com/threememories/FalloutRisk/. 
If you find a bug, have a feature request, or want to suggest a balance change, please submit them via the **GitHub Issues** page.

---

## Features

### Combat and V.A.T.S.
The game uses a V.A.T.S. interface to handle battles. Before you attack, the system shows your win probability based on troop counts and your chosen difficulty (Easy, Normal, or Hard).

### Game Modes
You can play with standard Risk rules or use presets to change how the game works:

*   Classic Conquest: Normal Risk rules. No special hazards or heroes. Uses simple card-trading for extra troops.
*   Wasteland Survival: Adds Fog of War, radstorms, and feral ghouls. You'll need to manage Bottle Caps to buy reinforcements.
*   Heroes of the Wasteland: Enables unique Faction Perks and Commander units. If your Commander dies, you lose.
*   Apocalypse Now: A high-difficulty mode with frequent hazards and nuclear weapons enabled.
*   Alliance Warfare: You start with a permanent ally. You win or lose together by coordinating attacks and defense.
*   Covert Warfare: Focuses on stealth. Maximum Fog of War and faction perks that help you move unseen.
*   Nuclear Option: A race to find launch codes and take control of silos to wipe out enemy garrisons.
*   Custom Rules: Mix and match any of the above settings.

### Economy
Instead of just trading cards, most modes use a Bottle Cap economy. You earn caps from your territories each turn and spend them to recruit troops, hire mercenaries, or bribe other factions.

### Commander units
Assign a Commander to your army. They have their own HP and AP (Action Points) and provide combat bonuses. Keep them alive—losing your leader ends your game.

### Nukes (Scorched Earth)
Control Nuclear Silos and find 4 hidden launch codes to gain access to nukes. You can use them to clear out enemy territories or take out rival Commanders.

### Hazards and Random Events
The map isn't static. 
*   Radstorms: Radioactive clouds that move across the map and kill a percentage of troops.
*   Wild Ghouls: Neutral territories can spawn ghouls that multiply if you don't clear them out.
*   Encounters: Randomly discover abandoned Vaults or radio signals that give you items like Bobbleheads or Stimpaks.

---

## Factions and Perks
There are 18 factions available (including custom options), each with a unique gameplay bonus:

*   **Brotherhood of Steel**: Power Armor Infantry (+5% win chance in all combat).
*   **The Enclave**: Vertibird Assault (Move troops between any two owned territories during Maneuver).
*   **Vault 87 Mutants**: F.E.V. Infection (25% of defeated enemies convert to your troops on conquest).
*   **Wasteland Raiders**: Chem Frenzy (Sacrifice troops for a massive combat bonus).
*   **BOS Outcasts**: Technology Overdrive (Spend Caps to grant all attacking armies +10% win chance).
*   **Reilly's Rangers**: Ranger Network (Defensive bonus for connected friendly territories).
*   **New California Republic**: Logistical Superiority (+50% troop bonus for holding continents).
*   **Caesar's Legion**: Scourge of the East (Move all surviving troops after conquest, no 1-troop minimum).
*   **New Vegas Securitrons**: Predictive Simulation (Undo failed attacks and restore all lost troops).
*   **Mojave Brotherhood**: Elder's Edict (Lock down a territory from all actions/attacks for 3 turns).
*   **Great Khans**: Guerrilla Tactics (Pass through one enemy territory during Maneuver, inflicting damage).
*   **The Fiends**: Chem-Fueled Raids (30% chance to steal caps/items or enslave survivors on conquest).
*   **The Minutemen**: Mercenary Contracts (Spend caps to instantly deploy bonus troops to reserves).
*   **The Institute**: Synth Replacements (Lost troops have a chance to respawn in your reserves).
*   **The Railroad**: Rapid Relocation (Receive 5 separate troop movements during Maneuver).
*   **The Gunners**: Mercenary Contracts (Fast-cooldown version of the Minutemen perk).
*   **Nuka-World Raiders**: Tribute Chest (Bonus Bottle Caps for every continent controlled).
*   **Custom Faction**: Mysterious Stranger (Occasional automatic re-rolls or enemy negation in losing battles).

---

## Saving and Loading
Strategic progress can be saved at any time using the **Save Holotape**, which downloads your current game state as a JSON file. To resume your conquest, use the **Load Holotape** option to upload your saved file back into the terminal.

---

## Mobile Support
The simulation is not yet fully mobile-friendly, but responsive layout updates are currently in progress. It is currently best played on a desktop or in Landscape Mode on larger mobile devices.

---

## Credits
*   **Developer**: threememories
*   **Inspiration**: Fallout (Bethesda) and Risk (Hasbro).
*   **ORIGINAL ENGINE ARCHITECTURE**: This simulation was heavily modified from the original Risk framework created by Vinayak Vedantam (https://github.com/vvedanta).
*   **License**: Open Source. Feel free to host or modify the code.

War... War never changes.
