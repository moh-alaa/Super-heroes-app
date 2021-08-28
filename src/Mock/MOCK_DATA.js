const MOCK_DATA = [
    {
        "response": "success",
        "id": "1",
        "name": "A-Bomb",
        "powerstats": {
            "intelligence": "38",
            "strength": "100",
            "speed": "17",
            "durability": "80",
            "power": "24",
            "combat": "64"
        },
        "biography": {
            "full-name": "Richard Milhouse Jones",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Rick Jones"
            ],
            "place-of-birth": "Scarsdale, Arizona",
            "first-appearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'8",
                "203 cm"
            ],
            "weight": [
                "980 lb",
                "441 kg"
            ],
            "eye-color": "Yellow",
            "hair-color": "No Hair"
        },
        "work": {
            "occupation": "Musician, adventurer, author; formerly talk show host",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
            "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
        }
    },
    {
        "response": "success",
        "id": "2",
        "name": "Abe Sapien",
        "powerstats": {
            "intelligence": "88",
            "strength": "28",
            "speed": "35",
            "durability": "65",
            "power": "100",
            "combat": "85"
        },
        "biography": {
            "full-name": "Abraham Sapien",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Langdon Everett Caul",
                "Abraham Sapien",
                "Langdon Caul"
            ],
            "place-of-birth": "-",
            "first-appearance": "Hellboy: Seed of Destruction (1993)",
            "publisher": "Dark Horse Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Icthyo Sapien",
            "height": [
                "6'3",
                "191 cm"
            ],
            "weight": [
                "145 lb",
                "65 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "No Hair"
        },
        "work": {
            "occupation": "Paranormal Investigator",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Bureau for Paranormal Research and Defense",
            "relatives": "Edith Howard (wife, deceased)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/956.jpg"
        }
    },
    {
        "response": "success",
        "id": "3",
        "name": "Abin Sur",
        "powerstats": {
            "intelligence": "50",
            "strength": "90",
            "speed": "53",
            "durability": "64",
            "power": "99",
            "combat": "65"
        },
        "biography": {
            "full-name": "",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Lagzia"
            ],
            "place-of-birth": "Ungara",
            "first-appearance": "Showcase #22 (October, 1959)",
            "publisher": "DC Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Ungaran",
            "height": [
                "6'1",
                "185 cm"
            ],
            "weight": [
                "200 lb",
                "90 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "No Hair"
        },
        "work": {
            "occupation": "Green Lantern, former history professor",
            "base": "Oa"
        },
        "connections": {
            "group-affiliation": "Green Lantern Corps, Black Lantern Corps",
            "relatives": "Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg"
        }
    },
    {
        "response": "success",
        "id": "4",
        "name": "Abomination",
        "powerstats": {
            "intelligence": "63",
            "strength": "80",
            "speed": "53",
            "durability": "90",
            "power": "62",
            "combat": "95"
        },
        "biography": {
            "full-name": "Emil Blonsky",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Agent R-7",
                "Ravager of Worlds"
            ],
            "place-of-birth": "Zagreb, Yugoslavia",
            "first-appearance": "Tales to Astonish #90",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human / Radiation",
            "height": [
                "6'8",
                "203 cm"
            ],
            "weight": [
                "980 lb",
                "441 kg"
            ],
            "eye-color": "Green",
            "hair-color": "No Hair"
        },
        "work": {
            "occupation": "Ex-Spy",
            "base": "Mobile"
        },
        "connections": {
            "group-affiliation": "former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten",
            "relatives": "Nadia Dornova Blonsky (wife, separated)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/1.jpg"
        }
    },
    {
        "response": "success",
        "id": "5",
        "name": "Abraxas",
        "powerstats": {
            "intelligence": "88",
            "strength": "63",
            "speed": "83",
            "durability": "100",
            "power": "100",
            "combat": "55"
        },
        "biography": {
            "full-name": "Abraxas",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "-"
            ],
            "place-of-birth": "Within Eternity",
            "first-appearance": "Fantastic Four Annual #2001",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "Cosmic Entity",
            "height": [
                "-",
                "0 cm"
            ],
            "weight": [
                "- lb",
                "0 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Black"
        },
        "work": {
            "occupation": "Dimensional destroyer",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Cosmic Beings",
            "relatives": "Eternity (\"Father\")"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/181.jpg"
        }
    },
    {
        "response": "success",
        "id": "6",
        "name": "Absorbing Man",
        "powerstats": {
            "intelligence": "38",
            "strength": "80",
            "speed": "25",
            "durability": "100",
            "power": "98",
            "combat": "64"
        },
        "biography": {
            "full-name": "Carl Creel",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Greithoth",
                "\"Crusher\" Creel",
                "Rocky Davis",
                "Dynamite Davis",
                "Lightningbolt",
                "Prisoner #24957"
            ],
            "place-of-birth": "New York City, New York",
            "first-appearance": "Daredevil #1 (April, 1964) (As Rocky Davis)",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'4",
                "193 cm"
            ],
            "weight": [
                "270 lb",
                "122 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "No Hair"
        },
        "work": {
            "occupation": "Professional criminal; former professional boxer",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Masters of Evil, Lethal Legion; formerly Worthy, Frightful Four: former agent of Loki and They Who Wield Power",
            "relatives": "Mary MacPherran (Titania) (wife); Jerry Sledge (son); Rockwell \"Rocky\" Davis (Hi-Llite) (cousin)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/1448.jpg"
        }
    },
    {
        "response": "success",
        "id": "7",
        "name": "Adam Monroe",
        "powerstats": {
            "intelligence": "63",
            "strength": "10",
            "speed": "12",
            "durability": "100",
            "power": "100",
            "combat": "64"
        },
        "biography": {
            "full-name": "",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Takezo Kensei",
                "Richard Sanders"
            ],
            "place-of-birth": "-",
            "first-appearance": "Heroes S02E01 - Four Months Later...",
            "publisher": "NBC - Heroes",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "null",
            "height": [
                "-",
                "0 cm"
            ],
            "weight": [
                "- lb",
                "0 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Blond"
        },
        "work": {
            "occupation": "former samurai swordsman, former British mercenary commander, former soldier in the Confederate Army",
            "base": "U.S.; formerly Diedenshausen, Germany; Milan, Italy; Paris, France; Japan; England; Atlanta, GA; Montreal, Canada"
        },
        "connections": {
            "group-affiliation": "-",
            "relatives": "-"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/1026.jpg"
        }
    },
    {
        "response": "success",
        "id": "8",
        "name": "Adam Strange",
        "powerstats": {
            "intelligence": "69",
            "strength": "10",
            "speed": "33",
            "durability": "40",
            "power": "37",
            "combat": "50"
        },
        "biography": {
            "full-name": "Adam Strange",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Warrior of Two Worlds",
                "Savior of Rann"
            ],
            "place-of-birth": "Chicago, Illinois",
            "first-appearance": "Outsiders #6 (April, 1986)",
            "publisher": "DC Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'1",
                "185 cm"
            ],
            "weight": [
                "195 lb",
                "88 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Blond"
        },
        "work": {
            "occupation": "Adventurer, archaelogist, ambassador",
            "base": "Rann, Alpha Centauri System"
        },
        "connections": {
            "group-affiliation": "Omega Men, L.E.G.I.O.N., R.E.B.E.L.S., formerly Seven Soldiers of Victory",
            "relatives": "Alanna Strange (wife); Aleea Strange (daughter); Sardath (father-in-law); Janey Strange (sister); Todd Strange (brother, deceased); Bantteir (mother-in-law); Adam Strange II (descendent)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/626.jpg"
        }
    },
    {
        "response": "success",
        "id": "9",
        "name": "Agent 13",
        "powerstats": {
            "intelligence": "null",
            "strength": "46",
            "speed": "null",
            "durability": "null",
            "power": "null",
            "combat": "null"
        },
        "biography": {
            "full-name": "Sharon Carter",
            "alter-egos": "Sharon Carter",
            "aliases": [
                "-"
            ],
            "place-of-birth": "-",
            "first-appearance": "Tales of Suspense #75",
            "publisher": "Sharon Carter",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Female",
            "race": "null",
            "height": [
                "5'8",
                "173 cm"
            ],
            "weight": [
                "135 lb",
                "61 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Blond"
        },
        "work": {
            "occupation": "Agent of SHIELD",
            "base": "S.H.I.E.L.D. Headquarters, New York City"
        },
        "connections": {
            "group-affiliation": "Agent of SHIELD.; former member of the Femme Force",
            "relatives": "Harrison Carter (father), Amanda Carter (mother), Margaret \"Peggy\" Carter (sister)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/167.jpg"
        }
    },
    {
        "response": "success",
        "id": "10",
        "name": "Agent Bob",
        "powerstats": {
            "intelligence": "10",
            "strength": "8",
            "speed": "13",
            "durability": "5",
            "power": "5",
            "combat": "20"
        },
        "biography": {
            "full-name": "Bob",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Bob",
                "agent of Hydra",
                "Bob",
                "agent of A.I.M"
            ],
            "place-of-birth": "-",
            "first-appearance": "Cable & Deadpool #38 (May, 2007)",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "5'10",
                "178 cm"
            ],
            "weight": [
                "181 lb",
                "81 kg"
            ],
            "eye-color": "Brown",
            "hair-color": "Brown"
        },
        "work": {
            "occupation": "Mercenary, janitor; former pirate, terrorist",
            "base": "Mobile; formerly Manhattan, Hellcarrier"
        },
        "connections": {
            "group-affiliation": "A.I.M., Deadpool; formerly Agency X, Hydra",
            "relatives": "Allison (ex-wife); Terry and Howie (sons)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/10255.jpg"
        }
    },
    {
        "response": "success",
        "id": "11",
        "name": "Agent Zero",
        "powerstats": {
            "intelligence": "75",
            "strength": "28",
            "speed": "38",
            "durability": "80",
            "power": "72",
            "combat": "95"
        },
        "biography": {
            "full-name": "Christoph Nord",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Maverick"
            ],
            "place-of-birth": "Unrevealed location in former East Germany",
            "first-appearance": "-",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "null",
            "height": [
                "6'3",
                "191 cm"
            ],
            "weight": [
                "230 lb",
                "104 kg"
            ],
            "eye-color": "-",
            "hair-color": "-"
        },
        "work": {
            "occupation": "Mercenary, former government operative, freedom fighter",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Formerly Weapon X, Weapon Plus, Team X, Cell Six, former bodyguard of Psi-Borg, former agent of Major Barrington",
            "relatives": "Unidentified parents (deceased), Andreas Nord (brother, deceased), Ginetta Lucia Barsalini (wife, deceased), unnamed child (deceased)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/396.jpg"
        }
    },
    {
        "response": "success",
        "id": "12",
        "name": "Air-Walker",
        "powerstats": {
            "intelligence": "50",
            "strength": "85",
            "speed": "100",
            "durability": "85",
            "power": "100",
            "combat": "40"
        },
        "biography": {
            "full-name": "Gabriel Lan",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "-"
            ],
            "place-of-birth": "Xandar, a planet in the Tranta system, Andromeda galaxy",
            "first-appearance": "Fantastic Four #120",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "null",
            "height": [
                "6'2",
                "188 cm"
            ],
            "weight": [
                "240 lb",
                "108 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "White"
        },
        "work": {
            "occupation": "Former starship captain, Herald of Galactus",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Former member of Nova Corps, Heralds of Galactus",
            "relatives": "-"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/1358.jpg"
        }
    },
    {
        "response": "success",
        "id": "13",
        "name": "Ajax",
        "powerstats": {
            "intelligence": "56",
            "strength": "48",
            "speed": "35",
            "durability": "80",
            "power": "34",
            "combat": "55"
        },
        "biography": {
            "full-name": "Francis",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "\"Frankie\"",
                "the A-Man",
                "the Attending"
            ],
            "place-of-birth": "-",
            "first-appearance": "Deadpool #14 (March, 1998)",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "Cyborg",
            "height": [
                "6'4",
                "193 cm"
            ],
            "weight": [
                "200 lb",
                "90 kg"
            ],
            "eye-color": "Brown",
            "hair-color": "Black"
        },
        "work": {
            "occupation": "-",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Formerly Weapon X",
            "relatives": "-"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/10422.jpg"
        }
    },
    {
        "response": "success",
        "id": "14",
        "name": "Alan Scott",
        "powerstats": {
            "intelligence": "63",
            "strength": "80",
            "speed": "23",
            "durability": "90",
            "power": "100",
            "combat": "32"
        },
        "biography": {
            "full-name": "Alan Ladd Wellington Scott",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Green Lantern",
                "White King",
                "Sentinal"
            ],
            "place-of-birth": "Gotham City",
            "first-appearance": "All-American Comics 16 (1940)",
            "publisher": "DC Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "null",
            "height": [
                "5'11",
                "180 cm"
            ],
            "weight": [
                "201 lb",
                "90 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Blond"
        },
        "work": {
            "occupation": "-",
            "base": "Gotham City and New York City; Formerly Capitol City"
        },
        "connections": {
            "group-affiliation": "Justice Society of America; Formerly Checkmate; the Sentinels of Magic; Formerly All-Star Squadron",
            "relatives": "Harlequin (Molly Mayne-Scott) (wife), Thorn (Rose Canton) (first wife, deceased), Todd Rice (Obsidian, son), Jennie-Lynn Hayden (Jade, daughter, deceased)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/698.jpg"
        }
    },
    {
        "response": "success",
        "id": "15",
        "name": "Alex Mercer",
        "powerstats": {
            "intelligence": "50",
            "strength": "80",
            "speed": "42",
            "durability": "90",
            "power": "100",
            "combat": "50"
        },
        "biography": {
            "full-name": "Alexander J. Mercer",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Prototype",
                "Zues",
                "Blacklight"
            ],
            "place-of-birth": "-",
            "first-appearance": "-",
            "publisher": "Wildstorm",
            "alignment": "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "-",
                "0 cm"
            ],
            "weight": [
                "- lb",
                "0 kg"
            ],
            "eye-color": "-",
            "hair-color": "-"
        },
        "work": {
            "occupation": "-",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Gentek, The Infected",
            "relatives": "Dana Mercer (sister)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/10398.jpg"
        }
    },
    {
        "response": "success",
        "id": "16",
        "name": "Alex Woolsly",
        "powerstats": {
            "intelligence": "null",
            "strength": "37",
            "speed": "null",
            "durability": "null",
            "power": "null",
            "combat": "null"
        },
        "biography": {
            "full-name": "Alex Woolsly",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "-"
            ],
            "place-of-birth": "-",
            "first-appearance": "Heroes S02E16 - Building 26",
            "publisher": "NBC - Heroes",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "null",
            "height": [
                "-",
                "0 cm"
            ],
            "weight": [
                "- lb",
                "0 kg"
            ],
            "eye-color": "-",
            "hair-color": "-"
        },
        "work": {
            "occupation": "Employee at Sam's Comics",
            "base": "Costa Verde, CA"
        },
        "connections": {
            "group-affiliation": "-",
            "relatives": "Mr. Woolsly, Mrs. Woolsly, sister"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/1309.jpg"
        }
    },
    {
        "response": "success",
        "id": "17",
        "name": "Alfred Pennyworth",
        "powerstats": {
            "intelligence": "63",
            "strength": "10",
            "speed": "17",
            "durability": "10",
            "power": "7",
            "combat": "55"
        },
        "biography": {
            "full-name": "Alfred Thaddeus Crane Pennyworth",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Alfred Beagle"
            ],
            "place-of-birth": "-",
            "first-appearance": "Batman #16 (April, 1943)",
            "publisher": "DC Comics",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "5'10",
                "178 cm"
            ],
            "weight": [
                "160 lb",
                "72 kg"
            ],
            "eye-color": "Blue",
            "hair-color": "Black"
        },
        "work": {
            "occupation": "Butler; Caretaker, former Actor; Field Medic; Government Agent",
            "base": "Wayne Manor; Batcave; Gotham City"
        },
        "connections": {
            "group-affiliation": "Batman Family, Outsiders",
            "relatives": "Jarvis Pennyworth (father, deceased), Wilfred Pennyworth (older brother), Daphne Pennyworth (niece); Bruce Wayne (Batman, legal ward)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/628.jpg"
        }
    },
    {
        "response": "success",
        "id": "18",
        "name": "Alien",
        "powerstats": {
            "intelligence": "50",
            "strength": "28",
            "speed": "42",
            "durability": "90",
            "power": "57",
            "combat": "60"
        },
        "biography": {
            "full-name": "Xenomorph",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "-"
            ],
            "place-of-birth": "Your chest :)",
            "first-appearance": "Alien (1979)",
            "publisher": "Dark Horse Comics",
            "alignment": "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "Xenomorph XX121",
            "height": [
                "8'0",
                "244 cm"
            ],
            "weight": [
                "375 lb",
                "169 kg"
            ],
            "eye-color": "-",
            "hair-color": "No Hair"
        },
        "work": {
            "occupation": "-",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "-",
            "relatives": "Alien Queen (mother)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/10449.jpg"
        }
    },
    {
        "response": "success",
        "id": "19",
        "name": "Allan Quatermain",
        "powerstats": {
            "intelligence": "null",
            "strength": "null",
            "speed": "null",
            "durability": "null",
            "power": "null",
            "combat": "null"
        },
        "biography": {
            "full-name": "",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "-"
            ],
            "place-of-birth": "-",
            "first-appearance": "(original version) King Solomon's Mines; (this version) League of Extraordinary Gentlemen #1 (America's Best Comics)",
            "publisher": "Wildstorm",
            "alignment": "good"
        },
        "appearance": {
            "gender": "Male",
            "race": "null",
            "height": [
                "-",
                "0 cm"
            ],
            "weight": [
                "- lb",
                "0 kg"
            ],
            "eye-color": "-",
            "hair-color": "-"
        },
        "work": {
            "occupation": "(former) hunter; (current) agent of the British government",
            "base": "The Secret Wing of the British Museum, London"
        },
        "connections": {
            "group-affiliation": "League of Extraordinary Gentlemen",
            "relatives": "-"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/630.jpg"
        }
    },
    {
        "response": "success",
        "id": "20",
        "name": "Amazo",
        "powerstats": {
            "intelligence": "63",
            "strength": "100",
            "speed": "83",
            "durability": "100",
            "power": "100",
            "combat": "100"
        },
        "biography": {
            "full-name": "",
            "alter-egos": "No alter egos found.",
            "aliases": [
                "Professor Ivos Amazing Android",
                "Timazo",
                "Humazo",
                "Hourmazo"
            ],
            "place-of-birth": "-",
            "first-appearance": "Brave and the Bold #30 (July, 1960)",
            "publisher": "DC Comics",
            "alignment": "bad"
        },
        "appearance": {
            "gender": "Male",
            "race": "Android",
            "height": [
                "8'5",
                "257 cm"
            ],
            "weight": [
                "385 lb",
                "173 kg"
            ],
            "eye-color": "Red",
            "hair-color": "-"
        },
        "work": {
            "occupation": "-",
            "base": "-"
        },
        "connections": {
            "group-affiliation": "Formerly the Secret Society of Super Villains",
            "relatives": "Professor Ivo (creator), Kid Amazo (cyborg offspring)"
        },
        "image": {
            "url": "https://www.superherodb.com/pictures2/portraits/10/100/1390.jpg"
        }
    }
]

export default MOCK_DATA;