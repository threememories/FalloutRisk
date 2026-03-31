/*===============================
          ROBCO RISK             
===============================*/

// --- DYNAMIC HAZARD CSS INJECTION ---
if (!document.getElementById('radstorm-styles')) {
    let style = document.createElement('style');
    style.id = 'radstorm-styles';
    style.innerHTML = `
        @keyframes radstormWarn { 0% { fill: #ffcc00; filter: drop-shadow(0 0 5px #ffcc00); } 100% { fill: #ff8800; filter: drop-shadow(0 0 15px #ff8800); } }
        @keyframes radstormAct { 0% { fill: #39ff14; filter: drop-shadow(0 0 10px #39ff14); } 100% { fill: #00ff00; filter: drop-shadow(0 0 25px #00ff00); } }
        .radstorm-warning { animation: radstormWarn 1s infinite alternate !important; opacity: 0.85; }
        .radstorm-active { animation: radstormAct 0.4s infinite alternate !important; opacity: 0.95; }
    `;
    document.head.appendChild(style);
}

const continents = [
    { areas: ["indonesia", "new_guinea", "eastern_australia", "western_australia"], name: "The Southern Wastes", bonus: 2 },
    { areas: ["brazil", "peru", "venezuela", "argentina"], name: "Amazonian Wastes", bonus: 2 },
    { areas: ["egypt", "north_africa", "east_africa", "congo", "south_africa", "madagascar"], name: "Saharan Wastes", bonus: 3 },
    { areas: ["iceland", "uk", "scandinavia", "northern_europe", "western_europe", "ukraine", "southern_europe"], name: "European Commonwealth", bonus: 5 },
    { areas: ["central_america", "eastern_us", "western_us", "quebec", "ontario", "alberta", "northwest_territory", "alaska", "greenland"], name: "Capital Wasteland", bonus: 5 },
    { areas: ["middle_east", "afghanistan", "ural", "siberia", "irkutsk", "yakutsk", "kamchatka", "mongolia", "japan", "china", "siam", "india"], name: "The Great Wastes", bonus: 7 }
];

const countries = [
    {name: "indonesia", continent: "The Southern Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["siam", "western_australia", "new_guinea"]},
    {name: "new_guinea", continent: "The Southern Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["indonesia", "eastern_australia", "western_australia"]},
    {name: "eastern_australia", continent: "The Southern Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["western_australia", "new_guinea"]},
    {name: "western_australia", continent: "The Southern Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["eastern_australia", "new_guinea", "indonesia"]},
    {name: "ural", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["ukraine", "siberia", "afghanistan", "china"]},
    {name: "siberia", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["ural", "mongolia", "yakutsk", "irkutsk", "china"]},
    {name: "afghanistan", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["ukraine", "ural", "middle_east", "china", "india"]},
    {name: "irkutsk", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["yakutsk", "siberia", "kamchatka", "mongolia"]},
    {name: "yakutsk", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["irkutsk", "siberia", "kamchatka"]},
    {name: "kamchatka", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["alaska", "yakutsk", "japan", "irkutsk", "mongolia"]},
    {name: "middle_east", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["ukraine", "afghanistan", "india", "egypt", "east_africa", "southern_europe"]},
    {name: "india", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["middle_east", "siam", "afghanistan", "china"]},
    {name: "siam", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["indonesia", "india", "china"]},
    {name: "china", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["ural", "siberia", "afghanistan", "mongolia", "siam", "india"]},
    {name: "mongolia", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["irkutsk", "siberia", "kamchatka", "china", "japan"]},
    {name: "japan", continent: "The Great Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["kamchatka", "mongolia"]},
    {name: "egypt", continent: "Saharan Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["middle_east", "southern_europe", "north_africa", "east_africa"]},
    {name: "north_africa", continent: "Saharan Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["egypt", "southern_europe", "western_europe", "east_africa", "congo", "brazil"]},
    {name: "east_africa", continent: "Saharan Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["middle_east", "egypt", "north_africa", "congo", "madagascar", "south_africa"]},
    {name: "congo", continent: "Saharan Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["south_africa", "north_africa", "east_africa"]},
    {name: "south_africa", continent: "Saharan Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["congo", "madagascar", "east_africa"]},
    {name: "madagascar", continent: "Saharan Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["south_africa", "east_africa"]},
    {name: "brazil", continent: "Amazonian Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["peru", "argentina", "north_africa", "venezuela"]},
    {name: "peru", continent: "Amazonian Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["brazil", "argentina", "venezuela"]},
    {name: "argentina", continent: "Amazonian Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["brazil", "peru"]},
    {name: "venezuela", continent: "Amazonian Wastes", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["brazil", "peru", "central_america"]},
    {name: "iceland", continent: "European Commonwealth", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["greenland", "uk", "scandinavia"]},
    {name: "scandinavia", continent: "European Commonwealth", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["iceland", "uk", "ukraine", "northern_europe"]},
    {name: "northern_europe", continent: "European Commonwealth", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["ukraine", "uk", "scandinavia", "southern_europe", "western_europe"]},
    {name: "western_europe", continent: "European Commonwealth", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["north_africa", "uk", "northern_europe", "southern_europe"]},
    {name: "southern_europe", continent: "European Commonwealth", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["north_africa", "egypt", "northern_europe", "western_europe", "middle_east", "ukraine"]},
    {name: "uk", continent: "European Commonwealth", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["western_europe", "iceland", "northern_europe", "scandinavia"]},
    {name: "ukraine", continent: "European Commonwealth", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["scandinavia", "ural", "northern_europe", "southern_europe", "afghanistan", "middle_east"]},
    {name: "greenland", continent: "Capital Wasteland", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["iceland", "quebec", "ontario", "northwest_territory"]},
    {name: "central_america", continent: "Capital Wasteland", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["venezuela", "eastern_us", "western_us"]},
    {name: "eastern_us", continent: "Capital Wasteland", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["central_america", "western_us", "ontario", "quebec"]},
    {name: "western_us", continent: "Capital Wasteland", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["central_america", "eastern_us", "ontario", "alberta"]},
    {name: "quebec", continent: "Capital Wasteland", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["eastern_us", "ontario", "greenland"]},
    {name: "ontario", continent: "Capital Wasteland", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["eastern_us", "western_us", "quebec", "alberta", "northwest_territory", "greenland"]},
    {name: "alberta", continent: "Capital Wasteland", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["western_us", "ontario", "northwest_territory", "alaska"]},
    {name: "northwest_territory", continent: "Capital Wasteland", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["alberta", "ontario", "greenland", "alaska"]},
    {name: "alaska", continent: "Capital Wasteland", owner: "none", color:"#1a1a1a", "army": 0, neighbours: ["alberta", "northwest_territory", "kamchatka"]}
];

const wastelandEncounters = [
    "Spotted a Vertibird flying low over the wastes.",
    "Radio picked up a strange distress signal. Probably a raider trap.",
    "Caravan guards chased off a pack of wild Mongrels.",
    "Another settlement needs our help. Marking it on the global map.",
    "Traded a handful of mutfruit for some polished 5.56 rounds.",
    "Super Mutants spotted dragging captives into a metro tunnel.",
    "Avoided a Radscorpion nest near the old irradiated crater.",
    "Brahmin stampede delayed supply lines by three hours.",
    "A wandering Eyebot is blasting patriotic music nearby.",
    "Dust storm rolling in. Visibility dropping to near zero.",
    "Picked up a HAM radio broadcast from KQ4JZM... Static approaching.",
    "Scavenged an abandoned pickup truck. The tonneau cover was surprisingly intact.",
    "Found an old pre-war safe containing detailed, multi-tiered bug-out lists.",
    "Spotted survivors establishing a security perimeter around a ruined church.",
    "Hacked a terminal and found a manuscript for 'SurvivalSOS Fundamentals of Survival' by Joseph Howard."
];

const combatFlavors = [
    "while they were complaining about the radioactive heat.",
    "after distracting their guards with a loaded Brahmin.",
    "by unleashing a swarm of Cazadores on their flank.",
    "while they were trying to hack a Novice terminal.",
    "after hitting them with a Fat Man. Overkill, but effective.",
    "catching them mid-game of Caravan and flipping the table.",
    "storming the base while the commander was literally in the shower.",
    "distracting the guards with a holotape of 'Butcher Pete'.",
    "finding the leader trying to repair a toaster and hitting them with it.",
    "walking in the front door because the guards were asleep on Mentats."
];

const basePlayers = [
    { "name": "Elder Lyons", "country": "Brotherhood of Steel", "color": "#0088ff", "army": 10, "reserve": 10, "areas": [], "bonus": 2, "alive": true, "cards": [], "conqueredThisTurn": false, "isNeutral": false }, 
    { "name": "President Eden", "country": "Enclave", "color": "#ff003c", "army": 20, "reserve": 20, "areas": [], "bonus": 2, "alive": true, "cards": [], "conqueredThisTurn": false, "isNeutral": false }, 
    { "name": "Overlord", "country": "Super Mutants", "color": "#ffaa00", "army": 20, "reserve": 20, "areas": [], "bonus": 2, "alive": true, "cards": [], "conqueredThisTurn": false, "isNeutral": false }, 
    { "name": "Boss", "country": "Raiders", "color": "#ff00ff", "army": 20, "reserve": 20, "areas": [], "bonus": 2, "alive": true, "cards": [], "conqueredThisTurn": false, "isNeutral": false }, 
    { "name": "Protector Casdin", "country": "Outcasts", "color": "#00ff00", "army": 20, "reserve": 20, "areas": [], "bonus": 2, "alive": true, "cards": [], "conqueredThisTurn": false, "isNeutral": false }, 
    { "name": "Sonora Cruz", "country": "Regulators", "color": "#ffff00", "army": 20, "reserve": 20, "areas": [], "bonus": 2, "alive": true, "cards": [], "conqueredThisTurn": false, "isNeutral": false } 
];

const themeFactions = {
    "fo3": [
        { name: "Elder Lyons", country: "Brotherhood of Steel" },
        { name: "President Eden", country: "The Enclave" },
        { name: "Overlord", country: "Vault 87 Mutants" },
        { name: "Flak", country: "Wasteland Raiders" },
        { name: "Protector Casdin", country: "BOS Outcasts" },
        { name: "Reilly", country: "Reilly's Rangers" }
    ],
    "fnv": [
        { name: "General Oliver", country: "New California Republic" },
        { name: "Caesar", country: "Caesar's Legion" },
        { name: "Mr. House", country: "New Vegas Securitrons" },
        { name: "Elder McNamara", country: "Mojave Brotherhood" },
        { name: "Papa Khan", country: "Great Khans" },
        { name: "Motor-Runner", country: "The Fiends" }
    ]
};

const cardTypes = ["Nuka-Cola Cap", "Sunset Sarsaparilla Cap", "Quantum Cap"];
let deck = [];
let tradeCount = 0;

function generateDeck() {
    deck = [];
    countries.forEach((country, index) => {
        deck.push({ country: country.name, type: cardTypes[index % 3] });
    });
    deck.push({ country: "Wild", type: "Wild" });
    deck.push({ country: "Wild", type: "Wild" });
    shuffle(deck);
}

function getTradeBonus() {
    tradeCount++;
    if (tradeCount <= 5) return 2 + (tradeCount * 2); 
    return 15 + ((tradeCount - 6) * 5); 
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const infoName = Array.from(document.getElementsByClassName('country'));
const infoLeader = Array.from(document.getElementsByClassName('leader'));
const infoIncome = Array.from(document.getElementsByClassName('income'));
const areas = Array.from(document.getElementsByClassName('area'));
const bar = Array.from(document.getElementsByClassName('bar'));
const map = document.querySelector('svg');

const modal = document.querySelector('#start-modal');
const reserveDisplay = document.querySelector('#reserve');
const chosenLeader = document.querySelector('#chosen-leader');
const chosenCountry = document.querySelector('#chosen-country');
const submitName = document.querySelector('#submit-name');
const winModal = document.querySelector('#win-modal');
const winMessage = document.querySelector('.win-message');
const playAgain = document.querySelector('#play-again');

const playerName = document.querySelector('.player-name');
const playerCountry = document.querySelector('.player-country');
const restart = document.querySelector('#restart');
const playerPanel = document.querySelector('.player-panel');
const infoPanel = document.querySelector('.info');
const turnInfo = document.querySelector('.turn-info');
const turnInfoMessage = document.querySelector('.turn-info-message');
const end = document.querySelector('#end');
const combatLog = document.getElementById('combat-log');
const turboToggle = document.getElementById('turbo-toggle');

const helpBtn = document.querySelector('#help-btn');
const helpModal = document.querySelector('#help-modal');
const closeHelpBtn = document.querySelector('#close-help-btn');

let Gamestate = {};
Gamestate.logQueue = [];
Gamestate.isLogging = false;

Gamestate.logAction = function(message, isImportant = false) {
    return new Promise(resolve => {
        this.logQueue.push({message, isImportant, resolve});
        this.processLogQueue();
    });
}

Gamestate.processLogQueue = function() {
    if(this.isLogging || this.logQueue.length === 0) return;
    this.isLogging = true;
    
    let logData = this.logQueue.shift();
    if(!combatLog) { 
        this.isLogging = false; 
        logData.resolve();
        return; 
    }
    
    let entry = document.createElement('div');
    entry.className = 'log-entry' + (logData.isImportant ? ' important' : '');
    let now = new Date();
    let timeString = now.toLocaleTimeString([], {hour12: false});
    let fullText = `> [${timeString}] ${logData.message}`;
    
    combatLog.appendChild(entry);
    if (combatLog.children.length > 50) combatLog.removeChild(combatLog.firstChild);
    
    let i = 0;
    entry.textContent = ""; 
    let typeSpeed = turboToggle && turboToggle.checked ? 0 : 8; 
    
    if (typeSpeed === 0) {
        entry.textContent = fullText;
        combatLog.scrollTop = combatLog.scrollHeight;
        this.isLogging = false;
        logData.resolve();
        this.processLogQueue();
    } else {
        let typeInterval = setInterval(() => {
            entry.textContent += fullText.charAt(i);
            i++;
            combatLog.scrollTop = combatLog.scrollHeight;
            if (i >= fullText.length) {
                clearInterval(typeInterval);
                setTimeout(() => {
                    this.isLogging = false;
                    logData.resolve();
                    this.processLogQueue();
                }, 200); 
            }
        }, typeSpeed);
    }
}

Gamestate.injectHolidayEvents = function() {
    let today = new Date();
    let currentYear = today.getFullYear();
    let todayTime = today.getTime();
    const daysToMs = (days) => days * 24 * 60 * 60 * 1000;

    function getFloatingDate(year, month, occurrence, dayOfWeek) {
        let d = new Date(year, month, 1);
        let day = d.getDay();
        let diff = dayOfWeek - day;
        if (diff < 0) diff += 7;
        let date = diff + 1 + (occurrence - 1) * 7;
        if (occurrence === 5) {
            let dTemp = new Date(year, month, date);
            if (dTemp.getMonth() !== month) date -= 7;
        }
        return new Date(year, month, date);
    }

    function getEaster(year) {
        let f = Math.floor, G = year % 19, C = f(year / 100);
        let H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30;
        let I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11));
        let J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7;
        let L = I - J, month = 3 + f((L + 40) / 44), day = L + 28 - 31 * f(month / 4);
        return new Date(year, month - 1, day);
    }

    [currentYear - 1, currentYear, currentYear + 1].forEach(year => {
        let holidays = [
            { name: "New Year's Day", date: new Date(year, 0, 1), msgs: ["Resolutions for the New Year: Survive. Don't mutate.", "Someone set off a Fat Man to celebrate the New Year. Typical."] },
            { name: "MLK Day", date: getFloatingDate(year, 0, 3, 1), msgs: ["A cracked terminal displays an old speech about equality. Rare sentiment these days.", "Scavenged a pre-war holotape preaching peace and brotherhood."] },
            { name: "Valentine's Day", date: new Date(year, 1, 14), msgs: ["Found a skeleton clutching a faded box of Cram and a diamond ring.", "Raiders were spotted sharing a heart-shaped box of... questionable meat."] },
            { name: "St. Patrick's Day", date: new Date(year, 2, 17), msgs: ["Discovered a hidden stash of perfectly preserved Shamrock Gwinnett Ale.", "Someone painted a Power Armor helmet bright green. Subtle."] },
            { name: "Easter", date: getEaster(year), msgs: ["Found a clutch of colorful Deathclaw eggs. Best to leave them alone.", "Spotted a wastelander in a pre-war rabbit mascot suit. Terrifying."] },
            { name: "Mother's Day", date: getFloatingDate(year, 4, 2, 0), msgs: ["Unearthed a heartfelt pre-war letter addressed to 'Mom'.", "Found a faded holotape of a family's last Mother's day dinner."] },
            { name: "Memorial Day", date: getFloatingDate(year, 4, 5, 1), msgs: ["A moment of silence for the Anchorage veterans at a ruined memorial.", "Found a rusted set of dog tags and a folded flag."] },
            { name: "Juneteenth", date: new Date(year, 5, 19), msgs: ["A settlement radio is broadcasting songs of freedom and emancipation.", "Found a pre-war terminal documenting the end of slavery. A reminder of better ideals."] },
            { name: "Father's Day", date: getFloatingDate(year, 5, 3, 0), msgs: ["Found a dusty 'World's Best Dad' mug next to a hunting rifle.", "Unearthed a broken pocket watch with 'To Dad' engraved on the back."] },
            { name: "Independence Day", date: new Date(year, 6, 4), msgs: ["Boomers are launching fireworks. Or artillery. Hard to tell.", "A stray eyebot is blasting the Star-Spangled Banner at max volume."] },
            { name: "Labor Day", date: getFloatingDate(year, 8, 1, 1), msgs: ["Protectrons are stuck in a holiday loop, demanding fair wages.", "Found an old union strike poster in a ruined factory."] },
            { name: "Columbus Day", date: getFloatingDate(year, 9, 2, 1), msgs: ["Raiders claim they 'discovered' a settlement that was already occupied.", "Found a pre-war globe. So much of it is just glowing craters now."] },
            { name: "The Great War", date: new Date(year, 9, 23), msgs: ["October 23rd. The day the world ended. The air feels heavier today.", "Found a stopped watch. 9:47 AM. Never forget."] },
            { name: "Halloween", date: new Date(year, 9, 31), msgs: ["Feral ghouls are looking extra festive today. Still deadly, though.", "Found a pristine plastic pumpkin bucket full of bottle caps."] },
            { name: "Veterans Day", date: new Date(year, 10, 11), msgs: ["Found a pristine pre-war military uniform folded neatly in a footlocker.", "A lone bugler is playing Taps somewhere in the ruins."] },
            { name: "Thanksgiving Day", date: getFloatingDate(year, 10, 4, 4), msgs: ["Traders are roasting a two-headed Radturkey. Smells like radiation and sage.", "Settlers are giving thanks for another year of not being eaten."] },
            { name: "Christmas Eve", date: new Date(year, 11, 24), msgs: ["Spotted a sleigh pulled by Radstags in the distance. Probably hallucinations.", "A lone radio station is playing a static-filled version of Silent Night."] },
            { name: "Christmas Day", date: new Date(year, 11, 25), msgs: ["A protectron wrapped in tinsel is wishing everyone a 'Merry Christmas' before firing.", "Found a pristine snow globe. A tiny, un-nuked world in glass."] },
            { name: "New Year's Eve", date: new Date(year, 11, 31), msgs: ["Raiders are stockpiling explosives for midnight. Standard procedure.", "The last hours of the year. Let's hope the next one is less irradiated."] }
        ];

        holidays.forEach(holiday => {
            let hTime = holiday.date.getTime();
            let startWindow = hTime - daysToMs(4);
            let endWindow = hTime + daysToMs(2) + (daysToMs(1) - 1); 

            if (todayTime >= startWindow && todayTime <= endWindow) {
                holiday.msgs.forEach(msg => {
                    if (!wastelandEncounters.includes(msg)) {
                        wastelandEncounters.push(msg);
                    }
                });
            }
        });
    });
}

Gamestate.init = function(){
    if (winModal) winModal.style.display = "none";
    if (!map) return;
    if (modal) modal.style.display = "block";
    
    helpBtn?.addEventListener('click', (e) => { 
        e.preventDefault(); 
        if (helpModal) helpModal.style.display = 'block';
    });
    
    closeHelpBtn?.addEventListener('click', () => {
        if (helpModal) helpModal.style.display = 'none';
    });

    this.injectHolidayEvents();

    submitName?.addEventListener('click', this.start.bind(this));
    map?.addEventListener('mousedown', this.handleClick.bind(this)); 
    end?.addEventListener('click', this.handleEndTurn.bind(this));
    playAgain?.addEventListener('click', this.restart.bind(this));

    restart?.addEventListener('click', () => {
        let confirmModal = document.getElementById('confirm-restart-modal');
        if (confirmModal) confirmModal.style.display = 'flex';
    });
    
    document.getElementById('confirm-yes')?.addEventListener('click', () => {
        document.getElementById('confirm-restart-modal').style.display = 'none';
        this.restart();
    });
    
    document.getElementById('confirm-no')?.addEventListener('click', () => {
        document.getElementById('confirm-restart-modal').style.display = 'none';
    });

    document.getElementById('view-cards-btn')?.addEventListener('click', () => {
        let cardsModal = document.getElementById('cards-modal');
        if (cardsModal) cardsModal.style.display = 'flex';
        this.renderCards();
    });
    
    document.getElementById('close-cards-btn')?.addEventListener('click', () => {
        let cardsModal = document.getElementById('cards-modal');
        if (cardsModal) cardsModal.style.display = 'none';
    });
    
    document.getElementById('trade-btn')?.addEventListener('click', () => {
        this.executeTrade();
    });
}

Gamestate.updateButtonText = function() {
    if (!end) return;
    if (this.stage === "Fortify") {
        end.textContent = "Deploy Troops";
        end.style.opacity = "0.5"; 
        end.style.pointerEvents = "none"; 
    } else if (this.stage === "Battle") {
        end.textContent = "End Attack Phase";
        end.style.opacity = "1";
        end.style.pointerEvents = "auto";
    } else if (this.stage === "Maneuver") {
        end.textContent = "End Turn";
        end.style.opacity = "1";
        end.style.pointerEvents = "auto";
    } else if (this.stage === "AI Turn") {
        end.textContent = "AI is thinking...";
        end.style.opacity = "0.5";
        end.style.pointerEvents = "none";
    }
}

Gamestate.start = async function(){
    if(combatLog) combatLog.innerHTML = "";
    this.logQueue = [];
    this.isLogging = false;

    if (end) end.style.pointerEvents = "auto";
    if (map) map.style.pointerEvents = "auto";
    if (modal) modal.style.display = "none";
    if (playerPanel) playerPanel.style.display = "flex";
    if (infoPanel) infoPanel.style.display = "flex";

    let optRadstorms = document.getElementById('opt-radstorms') && document.getElementById('opt-radstorms').checked;
    let optHorrors = document.getElementById('opt-horrors') && document.getElementById('opt-horrors').checked;
    this.hazardsEnabled = optRadstorms;
    
    this.radstorm = { state: 'none', timer: 0, cooldown: Math.floor(Math.random() * 11) + 5, areas: [] };

    this.countries = JSON.parse(JSON.stringify(countries));
    this.countries.forEach(c => {
        let el = document.getElementById(c.name);
        if (el) {
            el.classList.remove('radstorm-warning');
            el.classList.remove('radstorm-active');
        }
    });

    let themeDropdown = document.getElementById('chosen-theme');
    let selectedTheme = themeDropdown ? themeDropdown.value : "fo3";
    
    document.body.classList.remove('theme-fnv');
    if (selectedTheme === "fnv") document.body.classList.add('theme-fnv');

    this.players = JSON.parse(JSON.stringify(basePlayers)); 

    let factionList = themeFactions[selectedTheme];
    for(let i = 0; i < 6; i++) {
        this.players[i].name = factionList[i].name;
        this.players[i].country = factionList[i].country;
    }

    if (optHorrors) {
        this.players.push({ 
            "name": "Wasteland Horrors", "country": "Feral Ghouls & Deathclaws", 
            "color": "#333333", "army": 0, "reserve": 0, "areas": [], "bonus": 0, 
            "alive": true, "cards": [], "conqueredThisTurn": false, "isNeutral": true 
        });
    }

    this.aiTurn = false;
    this.gameOver = false;
    this.prevCountry = null;
    this.prevTarget = null;
    this.turn = 1;
    this.stage = "Fortify";
    this.playerTroopsPlaced = 0;
    
    this.player = this.players[0];
    
    let diffSelect = document.getElementById('chosen-difficulty');
    this.difficulty = diffSelect ? diffSelect.value : "Normal";

    if (chosenLeader && chosenCountry) {
        this.players[0].name = chosenLeader.value;
        this.players[0].country = chosenCountry.value;
        if (playerName) playerName.textContent = chosenLeader.value;
        if (playerCountry) playerCountry.textContent = chosenCountry.value;
    }
    
    generateDeck();
    tradeCount = 0;
    this.players.forEach(p => { p.cards = []; p.conqueredThisTurn = false; });
    
    let cardCount = document.getElementById('card-count');
    if (cardCount) cardCount.textContent = "0";
    if(this.prevTarget) this.prevTarget.classList.remove('flash');
    
    for(let j = 0; j < this.players.length; j++){ 
        if(infoName[j]) infoName[j].innerHTML = this.players[j].country;
        if(infoLeader[j]) infoLeader[j].innerHTML = this.players[j].name;
        if(infoName[j]) infoName[j].parentElement.classList.remove('defeated');
        if(bar[j]) bar[j].style.background = this.players[j].color;
    }

    this.stage = "Fortify";
    this.updateButtonText();
    if (turnInfoMessage) turnInfoMessage.textContent = "Click on your own areas to place reserve troops";
    
    this.players.forEach(p => { p.reserve = p.isNeutral ? 0 : 20; p.army = 0; p.areas = []; });
    let shuffledAreas = shuffle([...areas]);
    
    shuffledAreas.forEach((area, i) => {
        let player = this.players[i % this.players.length]; 
        let country = this.countries.find(c => c.name === area.id);
        country.owner = player.name;
        country.color = player.color;
        country.army = player.isNeutral ? 8 : 1; 
        player.areas.push(country.name);
        player.army += country.army;
        if (!player.isNeutral) player.reserve -= 1;
    });

    this.players.forEach(player => {
        while(player.reserve > 0 && !player.isNeutral) {
            let randomArea = player.areas[Math.floor(Math.random() * player.areas.length)];
            let country = this.countries.find(c => c.name === randomArea);
            country.army += 1;
            player.army += 1;
            player.reserve -= 1;
        }
    });

    this.countries.forEach(country => {
        let areaOnMap = document.getElementById(country.name);
        if (areaOnMap) {
            areaOnMap.style.fill = country.color;
            if (areaOnMap.nextElementSibling) areaOnMap.nextElementSibling.textContent = country.army;
        }
    });

    this.player.reserve = this.unitBonus(this.player, 0);
    this.player.army += this.player.reserve;
    this.updateInfo();
    
    await this.logAction("RobCo OS Booted. Wasteland Simulation Online.", true);
    if (optRadstorms) await this.logAction(">>> SYSTEM: METEOROLOGICAL HAZARD SUBSYSTEM LOADED.");
    if (optHorrors) await this.logAction(">>> SYSTEM: NEUTRAL THREAT SCANNER ACTIVE.");
}

Gamestate.showToast = function(message, bgColor = "#222") {
    let toast = document.getElementById("toast");
    if(toast) {
        toast.textContent = message;
        toast.style.backgroundColor = bgColor;
        toast.className = "toast show";
        if (this.toastTimeout) clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(function(){ 
            toast.className = toast.className.replace("show", ""); 
        }, 3500);
    }
}

Gamestate.handleClick = function(e){
    if (this.aiTurn) return; 
    if(this.stage === "Fortify"){
        this.addArmy(e);
    } else if(this.stage === "Battle"){
        this.attack(e);
    } else if(this.stage === "Maneuver"){
        this.maneuver(e); 
    }  
}

Gamestate.win = function(player){
    if (winMessage) {
        winMessage.textContent = player.name;
        winMessage.style.color = player.color;
    }
    if (winModal) winModal.style.display = "block"; 
}

Gamestate.restart = function(){
    if (modal) modal.style.display = "flex";
    if (winModal) winModal.style.display = "none";
}

Gamestate.updateInfo = function(){
    if (turnInfo) turnInfo.textContent = this.stage;
    let totalArmy = 0;
    this.players.forEach(player => { totalArmy += player.army });

    let sortedPlayers = [...this.players].sort((a, b) => b.army - a.army);

    this.players.forEach((player, i) => {
        let infoBox = infoName[i] ? infoName[i].parentElement : null;
        if (!infoBox) return;

        if (player.alive) {
            if (player.isNeutral) {
                if (infoIncome[i]) infoIncome[i].parentElement.style.display = "none";
            } else {
                if (infoIncome[i]) {
                    infoIncome[i].innerHTML = player.bonus;
                    infoIncome[i].parentElement.style.display = "block";
                }
            }
            if (bar[i]) bar[i].style.width = (player.army / totalArmy) * 230 + 'px';
        } else {
            if (infoIncome[i]) {
                infoIncome[i].innerHTML = "OFFLINE";
                infoIncome[i].parentElement.style.display = "block";
            }
            if (bar[i]) bar[i].style.width = "0px";
        }
        
        let rank = sortedPlayers.findIndex(p => p.name === player.name);
        infoBox.style.display = "block"; 
        infoBox.style.order = rank; 
    });
    
    if (this.players.length === 6 && infoName[6] && infoName[6].parentElement) {
        infoName[6].parentElement.style.display = "none";
    }

    let helpBtnEl = document.getElementById('help-btn');
    if (helpBtnEl) helpBtnEl.style.order = "998";

    let restartBtn = document.getElementById('restart');
    if (restartBtn) restartBtn.style.order = "999";

    let cardCount = document.getElementById('card-count');
    if (cardCount) cardCount.textContent = this.player.cards.length;
    if (reserveDisplay) reserveDisplay.innerHTML = this.player.reserve; 
    
    let viewCardsBtn = document.getElementById('view-cards-btn');
    if (viewCardsBtn) {
        if (this.getBestTrade(this.player.cards)) {
            viewCardsBtn.textContent = "OPEN STASH";
            viewCardsBtn.style.opacity = "1";
            viewCardsBtn.style.pointerEvents = "auto";
            viewCardsBtn.classList.add('ready-to-trade'); 
        } else {
            viewCardsBtn.textContent = this.player.cards.length > 0 ? "NO ELIGIBLE SETS" : "STASH EMPTY";
            viewCardsBtn.style.opacity = "0.5";
            viewCardsBtn.style.pointerEvents = "none";
            viewCardsBtn.classList.remove('ready-to-trade'); 
        }
    }

    let hpFill = document.getElementById('hp-fill');
    let apFill = document.getElementById('ap-fill');
    
    if (hpFill && apFill && totalArmy > 0 && this.player.alive) {
        
        let hpPercentage = Math.min(100, (this.player.areas.length / 24) * 100);
        hpFill.style.width = hpPercentage + "%";
        
        if (this.player.areas.length <= 5) {
            hpFill.style.background = "#ff0000";
            hpFill.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.8)";
        } else {
            hpFill.style.background = "var(--pip-color)";
            hpFill.style.boxShadow = "var(--pip-glow)";
        }

        let apPercentage = 0;
        
        if (this.stage === "Fortify") {
            let maxReserve = Math.max(this.player.reserve + this.playerTroopsPlaced, 1);
            apPercentage = (this.player.reserve / maxReserve) * 100;
            
        } else if (this.stage === "Battle") {
            let currentStrikeForce = 0;
            let validAttacks = 0;
            let ownedTerritories = this.countries.filter(c => c.owner === this.player.name);
            
            ownedTerritories.forEach(t => {
                if (t.army > 1) {
                    let hasEnemyNeighbor = t.neighbours.some(n => {
                        let neighborCountry = this.countries.find(x => x.name === n);
                        return neighborCountry && neighborCountry.owner !== this.player.name;
                    });
                    if (hasEnemyNeighbor) {
                        currentStrikeForce += (t.army - 1);
                        validAttacks++;
                    }
                }
            });

            if (validAttacks === 0) {
                apPercentage = 0; 
            } else {
                if (this.lastStage !== "Battle") {
                    this.initialStrikeForce = currentStrikeForce;
                }
                if (currentStrikeForce > (this.initialStrikeForce || 1)) {
                    this.initialStrikeForce = currentStrikeForce;
                }
                apPercentage = Math.min(100, (currentStrikeForce / Math.max(this.initialStrikeForce, 1)) * 100);
            }
            
        } else if (this.stage === "Maneuver") {
            let canManeuver = false;
            let ownedTerritories = this.countries.filter(c => c.owner === this.player.name);
            for (let t of ownedTerritories) {
                if (t.army > 1 && t.neighbours.some(n => {
                    let neighborCountry = this.countries.find(x => x.name === n);
                    return neighborCountry && neighborCountry.owner === this.player.name;
                })) {
                    canManeuver = true; break;
                }
            }
            if (canManeuver) {
                apPercentage = this.maneuverSource ? 0 : 100;
            } else {
                apPercentage = 0;
            }
            
        } else {
            apPercentage = 0; 
        }
        
        apFill.style.width = apPercentage + "%";
        
        if (apPercentage <= 0) {
            apFill.style.opacity = "0";
            apFill.style.visibility = "hidden";
        } else {
            apFill.style.opacity = "1";
            apFill.style.visibility = "visible";
        }
        
        if (hpPercentage <= 0) {
            hpFill.style.opacity = "0";
            hpFill.style.visibility = "hidden";
        } else {
            hpFill.style.opacity = "1";
            hpFill.style.visibility = "visible";
        }
        
    } else if (!this.player.alive && hpFill && apFill) {
        hpFill.style.width = "0%";
        hpFill.style.opacity = "0";
        hpFill.style.visibility = "hidden";
        apFill.style.width = "0%";
        apFill.style.opacity = "0";
        apFill.style.visibility = "hidden";
    }
    
    if (this.radstorm && this.radstorm.areas) {
        this.radstorm.areas.forEach(areaName => {
            let el = document.getElementById(areaName);
            if (el) {
                if (this.radstorm.state === 'warning') el.classList.add('radstorm-warning');
                if (this.radstorm.state === 'active') el.classList.add('radstorm-active');
            }
        });
    }

    this.lastStage = this.stage;
}

Gamestate.renderCards = function() {
    const list = document.getElementById('card-list');
    if (!list) return;
    list.innerHTML = '';
    this.selectedCards = [];
    
    this.player.cards.forEach((card, index) => {
        let cardEl = document.createElement('div');
        cardEl.textContent = `${card.country} (${card.type})`;
        cardEl.className = 'risk-card';
        cardEl.onclick = () => this.toggleCardSelection(cardEl, index);
        list.appendChild(cardEl);
    });
    
    let tradeBtn = document.getElementById('trade-btn');
    if (tradeBtn) {
        tradeBtn.disabled = true;
        tradeBtn.textContent = "SELECT 3 ELIGIBLE CAPS";
        tradeBtn.classList.remove('ready-to-trade');
    }
}

Gamestate.toggleCardSelection = function(element, index) {
    if (this.selectedCards.includes(index)) {
        this.selectedCards = this.selectedCards.filter(i => i !== index);
        element.classList.remove('selected');
    } else if (this.selectedCards.length < 3) {
        this.selectedCards.push(index);
        element.classList.add('selected');
    }
    
    let tradeBtn = document.getElementById('trade-btn');
    if (tradeBtn) {
        let isValid = this.isValidTrade();
        tradeBtn.disabled = !isValid;
        tradeBtn.textContent = isValid ? "SPEND CAPS FOR TROOPS" : "SELECT 3 ELIGIBLE CAPS";
        
        if (isValid) {
            tradeBtn.classList.add('ready-to-trade');
        } else {
            tradeBtn.classList.remove('ready-to-trade');
        }
    }
}

Gamestate.isValidTrade = function() {
    if (this.selectedCards.length !== 3) return false;
    let types = this.selectedCards.map(i => this.player.cards[i].type);
    let wilds = types.filter(t => t === "Wild").length;
    let regularTypes = types.filter(t => t !== "Wild");
    let uniqueTypes = new Set(regularTypes).size;
    return (uniqueTypes === 1 || uniqueTypes === 3 || wilds > 0); 
}

Gamestate.getBestTrade = function(cards) {
    if (cards.length < 3) return null;
    for (let i=0; i<cards.length-2; i++) {
        for (let j=i+1; j<cards.length-1; j++) {
            for (let k=j+1; k<cards.length; k++) {
                let selected = [cards[i], cards[j], cards[k]];
                let types = selected.map(c => c.type);
                let wilds = types.filter(t => t === "Wild").length;
                let regularTypes = types.filter(t => t !== "Wild");
                let uniqueTypes = new Set(regularTypes).size;
                if (uniqueTypes === 1 || uniqueTypes === 3 || wilds > 0) return [i, j, k];
            }
        }
    }
    return null;
}

Gamestate.executeTrade = async function() {
    if (this.aiTurn) return; // Prevent trading while AI is calculating
    
    if (this.isValidTrade()) {
        let bonus = getTradeBonus();
        this.selectedCards.sort((a,b) => b-a).forEach(index => {
            deck.unshift(this.player.cards[index]); 
            this.player.cards.splice(index, 1);
        });
        
        this.player.reserve += bonus;
        this.player.army += bonus; 

        if (this.stage === "Battle" || this.stage === "Maneuver" || this.stage === "AI Turn") {
            this.stage = "Fortify";
            if (turnInfo) turnInfo.textContent = "Combat Phase";
            if (turnInfoMessage) turnInfoMessage.textContent = "Bonus Received! Place your new troops.";
            this.updateButtonText();
        }

        if (reserveDisplay) reserveDisplay.innerHTML = this.player.reserve;
        this.updateInfo();
        
        await this.logAction(`SUPPLY DROP: ${this.player.name} spent Caps for +${bonus} troops!`, true);
        
        this.renderCards();
        
        let tradeBtn = document.getElementById('trade-btn');
        if (tradeBtn) {
            tradeBtn.disabled = true;
            tradeBtn.classList.remove('ready-to-trade'); 
        }
        
        let cardsModal = document.getElementById('cards-modal');
        if (cardsModal) cardsModal.style.display = 'none';
    }
}

Gamestate.processRadstorm = async function() {
    if (!this.hazardsEnabled) return;

    if (!this.radstorm) {
        this.radstorm = { state: 'none', timer: 0, cooldown: Math.floor(Math.random() * 11) + 5, areas: [] }; 
    }

    this.countries.forEach(c => {
        let el = document.getElementById(c.name);
        if (el) {
            el.classList.remove('radstorm-warning');
            el.classList.remove('radstorm-active');
        }
    });

    if (this.radstorm.state === 'none') {
        this.radstorm.cooldown--;
        if (this.radstorm.cooldown <= 0) {
            
            this.radstorm.state = 'warning';
            this.radstorm.timer = 2; 
            
            let startCountry = this.countries[Math.floor(Math.random() * this.countries.length)];
            this.radstorm.areas = [startCountry.name];
            
            let targetCount = Math.floor(Math.random() * 4) + 1; 
            while(this.radstorm.areas.length < targetCount) {
                let potential = [];
                this.radstorm.areas.forEach(a => {
                    let c = this.countries.find(x => x.name === a);
                    c.neighbours.forEach(n => {
                        let neighborExists = this.countries.some(x => x.name === n);
                        if (neighborExists && !this.radstorm.areas.includes(n) && !potential.includes(n)) potential.push(n);
                    });
                });
                if (potential.length === 0) break;
                let nextArea = potential[Math.floor(Math.random() * potential.length)];
                this.radstorm.areas.push(nextArea);
            }
            await this.logAction(`[ S.O.S ] WARNING: Severe Radstorm forming over ${this.radstorm.areas.length} territories! Evacuate immediately.`, true);
        }
    } else if (this.radstorm.state === 'warning') {
        this.radstorm.timer--;
        if (this.radstorm.timer <= 0) {
            this.radstorm.state = 'active';
            this.radstorm.timer = Math.floor(Math.random() * 4) + 2; 
            await this.logAction(`[ HAZARD ] The Radstorm has touched down! It will rage for ${this.radstorm.timer} days.`, true);
        } else {
            await this.logAction(`[ S.O.S ] Radstorm arriving in ${this.radstorm.timer} day(s)...`, true);
        }
    } 
    
    if (this.radstorm.state === 'active') {
        let totalKilled = 0;
        this.radstorm.areas.forEach(areaName => {
            let c = this.countries.find(x => x.name === areaName);
            if (c.army > 1) {
                let dmgPercent = (Math.random() * 0.15) + 0.10; 
                let dmg = Math.floor(c.army * dmgPercent);
                if (dmg < 1) dmg = 1; 
                if (c.army - dmg < 1) dmg = c.army - 1; 

                c.army -= dmg;
                totalKilled += dmg;

                let owner = this.players.find(p => p.name === c.owner);
                if (owner) owner.army -= dmg;

                let areaOnMap = document.getElementById(c.name);
                if (areaOnMap && areaOnMap.nextElementSibling) areaOnMap.nextElementSibling.textContent = c.army;
            }
        });

        if (totalKilled > 0) {
            await this.logAction(`[ HAZARD ] Radstorm killed ${totalKilled} troops in the irradiated zone.`, true);
        } else {
            await this.logAction(`[ HAZARD ] Radstorm rages, but garrisons are already at minimum capacity.`);
        }

        this.radstorm.timer--;
        if (this.radstorm.timer <= 0) {
            this.radstorm.state = 'none';
            this.radstorm.cooldown = Math.floor(Math.random() * 11) + 5; 
            await this.logAction(`[ CLEAR ] The Radstorm has dissipated. Skies are clear for now.`, true);
        }
    }

    this.radstorm.areas.forEach(areaName => {
        let el = document.getElementById(areaName);
        if (el) {
            if (this.radstorm.state === 'warning') el.classList.add('radstorm-warning');
            if (this.radstorm.state === 'active') el.classList.add('radstorm-active');
        }
    });
}

Gamestate.handleEndTurn = async function(){
    if(this.aiTurn || this.player.reserve > 0){ return; }

    if (this.stage === "Battle") {
        let canManeuver = false;
        let owned = this.countries.filter(c => c.owner === this.player.name);
        for (let t of owned) {
            if (t.army > 1 && t.neighbours.some(n => this.countries.find(x => x.name === n).owner === this.player.name)) {
                canManeuver = true; break;
            }
        }

        if(this.prevTarget) this.prevTarget.classList.remove('flash');
        this.prevCountry = null;
        this.prevTarget = null;

        if (canManeuver) {
            this.stage = "Maneuver";
            this.maneuverSource = null;
            this.maneuverDest = null;
            
            this.updateButtonText();
            if (turnInfo) turnInfo.textContent = "Maneuver Phase";
            if (turnInfoMessage) turnInfoMessage.textContent = "Move troops between adjacent territories. Hold SHIFT to move all.";
            this.updateInfo(); 
            return; 
        } 
    }
    
    if (this.player.conqueredThisTurn && deck.length > 0) {
        this.player.cards.push(deck.pop());
        this.updateInfo();
        if (this.getBestTrade(this.player.cards)) {
            await this.logAction("STASH FULL: Enough Caps collected to hire more troops.");
        } else {
            await this.logAction("SCAVENGED: Found a Bottle Cap after securing enemy territory.");
        }
    }
    this.player.conqueredThisTurn = false;

    this.aiTurn = true;
    this.updateButtonText();
    if (map) map.style.pointerEvents = "none";
    this.aiMove();
}

Gamestate.unitBonus = function(player, i){
    if (!player.alive || player.isNeutral) return 0; 

    player.bonus = 0;
    player.bonus += Math.floor(player.areas.length / 3);
    player.bonus += this.continentBonus(player);
    if(player.bonus < 3){ player.bonus = 3; }
    if (infoIncome[i]) infoIncome[i].innerHTML = player.bonus;
    return player.bonus;
}

Gamestate.continentBonus = function(player){
    if (player.isNeutral) return 0;
    let bonus = 0;
    continents.forEach( continent => {
        let ownsContinent = continent.areas.every(area => player.areas.includes(area));
        
        if(ownsContinent){ 
            bonus += continent.bonus; 
        }
    })   
    return bonus;
}

Gamestate.addArmy = async function(e){ 
    let actionFired = false;
    this.countries.forEach(country => {
        if(e.target.id === country.name && this.player.reserve > 0 && country.owner === this.player.name){
            if(e.shiftKey){
                this.playerTroopsPlaced += this.player.reserve;
                country.army += this.player.reserve;     
                this.player.reserve = 0;
            }
            else{
                this.playerTroopsPlaced += 1;
                country.army += 1;
                this.player.reserve -= 1;                
            }         
            
            if (reserveDisplay) reserveDisplay.innerHTML = this.player.reserve;
            if (e.target.nextElementSibling) e.target.nextElementSibling.textContent = country.army;
            actionFired = true;
        }
    })   

    if(actionFired){
        this.updateInfo(); 
        
        if(this.player.reserve === 0){
            await this.logAction(`${this.player.name} deployed ${this.playerTroopsPlaced} fresh troops across their sectors.`);
            this.playerTroopsPlaced = 0;

            this.stage = "Battle";
            if (turnInfo) turnInfo.textContent = "Combat Phase";
            if (turnInfoMessage) turnInfoMessage.textContent = "Select staging territory, then target an enemy.";
            this.updateButtonText();
            this.updateInfo(); 
        }
    }
}

Gamestate.vatsTargeting = async function(attackerEl, defenderEl) {
    let turbo = turboToggle && turboToggle.checked;
    if (turbo) return; 

    await this.logAction(`[ V.A.T.S. TARGETING SEQUENCE ENGAGED ]`);
    
    for(let i=0; i<3; i++) {
        if(attackerEl) attackerEl.classList.add('vats-flash');
        if(defenderEl) defenderEl.classList.add('vats-flash');
        await new Promise(r => setTimeout(r, 80));
        if(attackerEl) attackerEl.classList.remove('vats-flash');
        if(defenderEl) defenderEl.classList.remove('vats-flash');
        await new Promise(r => setTimeout(r, 60));
    }
}

Gamestate.attack = async function(e){
    if(this.prevTarget) this.prevTarget.classList.remove('flash');
    
    let country = this.countries.find(c => c.name === e.target.id);
    if (!country) return;

    if (!this.prevCountry) {
        if (country.owner === this.player.name) {
            e.target.classList.add('flash');
            this.prevTarget = e.target;
            this.prevCountry = country;
        }
        return;
    }

    if (this.prevCountry.name !== country.name && country.owner !== this.player.name && this.prevCountry.owner === this.player.name) {
        if (this.prevCountry.neighbours.includes(country.name) && this.prevCountry.army > 1) {
            
            let attackerMap = document.getElementById(this.prevCountry.name);
            let defenderMap = document.getElementById(country.name);
            
            if (map) map.style.pointerEvents = "none";
            
            await this.vatsTargeting(attackerMap, defenderMap);
            await this.battle(this.prevCountry, country, this.player, 0); 
            
            if (map) map.style.pointerEvents = "auto";
        } else if (this.prevCountry.army === 1) {
            this.updateInfo(); 
            await this.logAction("Cannot attack: A minimum garrison of 1 troop must remain in the territory.", true);
        }
    }
    
    this.prevCountry = null;
    this.prevTarget = null;
}

Gamestate.maneuver = function(e){
    if(this.prevTarget){ this.prevTarget.classList.remove('flash'); }
    this.countries.forEach(country => {
        if(e.target.id === country.name){
            if (country.owner !== this.player.name) return;

            e.target.classList.add('flash');
            this.prevTarget = e.target;

            if(this.prevCountry){
                if(this.prevCountry.name !== country.name && this.prevCountry.owner === this.player.name){
                    if (this.maneuverSource && this.maneuverDest) {
                        let valid1 = (this.prevCountry.name === this.maneuverSource && country.name === this.maneuverDest);
                        let valid2 = (this.prevCountry.name === this.maneuverDest && country.name === this.maneuverSource);
                        if (!valid1 && !valid2) { return; }
                    }

                    if(this.prevCountry.neighbours.includes(country.name) && this.prevCountry.army > 1){       
                        this.maneuverSource = this.prevCountry.name;
                        this.maneuverDest = country.name;

                        let moveAmount = e.shiftKey ? (this.prevCountry.army - 1) : 1;
                        
                        country.army += moveAmount;
                        this.prevCountry.army -= moveAmount;

                        let sourceMap = document.getElementById(`${this.prevCountry.name}`);
                        let destMap = document.getElementById(`${country.name}`);
                        
                        if (sourceMap && sourceMap.nextElementSibling) sourceMap.nextElementSibling.textContent = this.prevCountry.army;
                        if (destMap && destMap.nextElementSibling) destMap.nextElementSibling.textContent = country.army;
                        
                        this.updateInfo();
                    }                
                }      
            }
            this.prevCountry = country;
        }
    });   
}

Gamestate.aiMove = async function(){
    if(this.gameOver) return;
    if(this.prevTarget) this.prevTarget.classList.remove('flash');
    
    this.stage = "AI Turn";
    this.updateButtonText();
    if (turnInfoMessage) turnInfoMessage.textContent = "";
    
    for(let i = 1; i <= this.players.length; i++){  
        if(i === this.players.length){ 
            if(this.player.areas.length === 0){
                this.player.alive = false;
                return this.aiMove(); 
            }
            this.turn += 1;
            this.aiTurn = false;

            await this.processRadstorm();

            this.stage = "Fortify";
            this.updateButtonText();
            
            if (turnInfoMessage) turnInfoMessage.textContent = "Deploy reserve troops to your territories.";
            let bonus = this.unitBonus(this.player, 0);
            this.player.reserve += bonus;
            this.player.army += bonus;
            if (map) map.style.pointerEvents = "auto";
            if (infoName[i-1]) infoName[i-1].parentElement.classList.remove('highlight');
            if (infoName[0]) infoName[0].parentElement.classList.add('highlight')
            if (reserveDisplay) reserveDisplay.innerHTML = this.player.reserve;
            this.updateInfo();
            return;
        }
        
        if (infoName[i-1]) infoName[i-1].parentElement.classList.remove('highlight'); 
        if(this.players[i].alive){
            
            if (this.players[i].isNeutral) {
                continue; 
            }

            if (infoName[i]) infoName[i].parentElement.classList.add('highlight')
            
            let turbo = turboToggle && turboToggle.checked;
            
            if (Math.random() < 0.20) {
                 let randomEvent = wastelandEncounters[Math.floor(Math.random() * wastelandEncounters.length)];
                 await this.logAction(`SYSTEM: ${randomEvent}`);
            }

            this.players[i].reserve = this.unitBonus(this.players[i], i);
            let troopsToPlace = this.players[i].reserve;
            
            let tradeIndices = this.getBestTrade(this.players[i].cards);
            if (tradeIndices) {
                let bonus = getTradeBonus();
                tradeIndices.sort((a,b)=>b-a).forEach(index => {
                    deck.unshift(this.players[i].cards[index]);
                    this.players[i].cards.splice(index, 1);
                });
                this.players[i].reserve += bonus;
                troopsToPlace += bonus;
                await this.logAction(`SUPPLY: ${this.players[i].name} spent Caps for +${bonus} troops!`, true);
            }

            this.players[i].army += this.players[i].reserve;
            
            if (troopsToPlace > 0) {
                await this.logAction(`${this.players[i].name} deployed ${troopsToPlace} troops to their sectors.`);
            }

            let areaToFortify = ["",  0];            
            this.players[i].areas.forEach(area => {
                this.countries.forEach(country => {
                    if(country.name === area && this.players[i].reserve > 0){
                        country.neighbours.forEach(neighbour => {
                            this.countries.forEach(c => {
                                if(c.name === neighbour && c.owner !== this.players[i].name){
                                    let continent = continents.find(x => x.name === country.continent);
                                    let count = 0;
                                    continent.areas.forEach(x => {
                                        if (this.players[i].areas.includes(x)) count++;
                                    });                                       
                                    let ratio = count / continent.areas.length;
                                    if (ratio >= areaToFortify[1]){ areaToFortify = [country, ratio] }                            
                                }
                            })
                        })
                    }
                })
            })
                        
            if (areaToFortify[0]) {
                areaToFortify[0].army += this.players[i].reserve;
                this.players[i].reserve = 0;
                let areaOnMap = document.getElementById(`${areaToFortify[0].name}`);
                if (areaOnMap && areaOnMap.nextElementSibling) areaOnMap.nextElementSibling.textContent = areaToFortify[0].army;
            }
                            
            let currentAreas = [...this.players[i].areas];
            for (let area of currentAreas) {
                let country = this.countries.find(c => c.name === area);
                if (country && country.army > 1 && country.owner === this.players[i].name) {
                    await this.aiAttack(country, i, turbo);
                }
            }

            this.aiManeuver(i);

            if (this.players[i].conqueredThisTurn && deck.length > 0) {
                this.players[i].cards.push(deck.pop());
                this.players[i].conqueredThisTurn = false;
            }

            this.updateInfo();
        } 
    } 
}

Gamestate.aiAttack = async function(country, i, turbo){
    let possibleTargets = []; 
    country.neighbours.forEach(neighbour => {  
        this.countries.forEach(opponent => {    
            if(neighbour === opponent.name && opponent.army + 1 < country.army && country.owner !== opponent.owner ){
                possibleTargets.push(opponent);          
            }              
        })
    })
    
    let target = [possibleTargets[0], 0];
    possibleTargets.forEach(poss => {
        let continent = continents.find(x => x.name === poss.continent);
        let count = 0;
        continent.areas.forEach(x => { if(this.players[i].areas.includes(x)) count++; });
        let ratio = count / continent.areas.length;
        if(ratio >= target[1]){ target = [poss, ratio] }            
    })  
    if(!target[0]){ return; }   
    
    let attackerMap = document.getElementById(country.name);
    let defenderMap = document.getElementById(target[0].name);
    
    await this.vatsTargeting(attackerMap, defenderMap);
    await this.battle(country, target[0], this.players[i], i);
}

Gamestate.aiManeuver = function(i){
    let player = this.players[i];
    let owned = this.countries.filter(c => c.owner === player.name);
    let internal = owned.filter(c => c.army > 1 && c.neighbours.every(n => {
        let neighborCountry = this.countries.find(x => x.name === n);
        return neighborCountry && neighborCountry.owner === player.name;
    }));
    
    if(internal.length > 0) {
        internal.sort((a,b) => b.army - a.army);
        let source = internal[0];
        let destName = source.neighbours.find(n => this.countries.find(x => x.name === n).owner === player.name);
        if(destName) {
            let dest = this.countries.find(x => x.name === destName);
            let moveAmount = source.army - 1;
            dest.army += moveAmount;
            source.army -= moveAmount;
            
            let sourceMap = document.getElementById(`${source.name}`);
            let destMap = document.getElementById(`${dest.name}`);
            if(sourceMap && sourceMap.nextElementSibling) sourceMap.nextElementSibling.textContent = source.army;
            if(destMap && destMap.nextElementSibling) destMap.nextElementSibling.textContent = dest.army;
        }
    }
}

Gamestate.battle = async function(country, opponent, player, i){
    let defender = document.getElementById(`${opponent.name}`)
    let attacker = document.getElementById(`${country.name}`)
    let opp;
    this.players.forEach(p => { if(p.name === opponent.owner){ opp = p; } });
    
    const originalOwner = opponent.owner; 

    let attackerWinChance = 0.5; 
    if (this.difficulty === "Easy") {
        if (player === this.player) attackerWinChance = 0.60; 
        else if (opp === this.player) attackerWinChance = 0.40; 
    } else if (this.difficulty === "Hard") {
        if (player === this.player) attackerWinChance = 0.40; 
        else if (opp === this.player) attackerWinChance = 0.60; 
    } 
    
    if (opp.isNeutral) {
        attackerWinChance -= 0.15; 
    }
    
    let isVictory = false;
    let flavor = "";

    while(opponent.army > 0){
        if(country.army <= 1){
            if (attacker && attacker.nextElementSibling) attacker.nextElementSibling.textContent = country.army;
            if (defender && defender.nextElementSibling) defender.nextElementSibling.textContent = opponent.army;
            
            this.updateInfo(); 
            
            await this.logAction(`REPULSED: ${player.name} assaulted ${originalOwner} in ${opponent.name} but failed.`);
            return;
        }
        if(Math.random() > attackerWinChance){ country.army -= 1; } else { opponent.army -= 1; }
    }
    
    if(opponent.army <= 0 ){
        isVictory = true;
        player.conqueredThisTurn = true; 
        
        flavor = (Math.random() < 0.10) ? (" " + combatFlavors[Math.floor(Math.random() * combatFlavors.length)]) : "!";
        
        this.players.forEach(p => {
            if(p.name === opponent.owner){
                let index = p.areas.indexOf(opponent.name);
                if (index > -1) { p.areas.splice(index, 1); }
            }
        });
        
        opponent.owner = player.name;
        opponent.color = player.color;
        player.areas.push(opponent.name);
        
        let movedTroops = Math.max(1, Math.floor(country.army / 2));
        opponent.army = movedTroops;
        country.army -= movedTroops;

        if (defender) defender.style.fill = opponent.color;
        if (defender && defender.nextElementSibling) defender.nextElementSibling.textContent = opponent.army;
        if (attacker && attacker.nextElementSibling) attacker.nextElementSibling.textContent = country.army;
        
        if(opp.areas.length === 0){
            opp.alive = false;
            let index = this.players.indexOf(opp)
            if (infoName[index]) infoName[index].parentElement.classList.add('defeated');
        }
    }
        
    player.army = 0;
    opp.army = 0;
    this.countries.forEach(c => {
        player.areas.forEach(area => { if(area === c.name){ player.army += c.army } })
        opp.areas.forEach(area => { if(area === c.name){ opp.army += c.army } })
    });
    
    this.updateInfo();

    if (isVictory) {
        await this.logAction(`VICTORY: ${player.name} wiped out ${originalOwner} in ${opponent.name}${flavor}`, true);
    }
    
    if(this.player.alive){
        continents.forEach(continent => {
            let ownsContinent = continent.areas.every(area => player.areas.includes(area));
            
            if(ownsContinent){   
                let matchedCountry = continent.areas.some(a => { return a === opponent.name; });
                if(matchedCountry){
                    this.showToast(`${player.name} controls ${continent.name}! (+${continent.bonus} troops)`, player.color);
                }
            }
        })  
    }
    
    if(player.areas.length === 42){
        this.gameOver = true;
        this.win(player);
    }    
}

Gamestate.init();