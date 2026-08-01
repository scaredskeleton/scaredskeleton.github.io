export const featuredProjects = [
	/*{
		title: 'UNO™ Wild',
		banner: '/images/uno-wild-logo.png',
		link: 'https://play.google.com/store/apps/details?id=com.mattel.wild&hl=en',
		year: 2026,
		platforms: [
			{ src: '/images/android-logo.png', title: 'Android' },
			{ src: '/images/ios-logo.png', title: 'iOS' }
		],
		align: 'right',
		description: [
			'"UNO™ Wild is a fast-moving mobile game where every card played helps you win coins, every spin unlocks rewards, and every other player’s growing stash of coins can be taken for yours."',
			'My main responsibility for this project was on the mini games and live events. Our work involves developing new mini games and improving exisiting ones for keeping our users engaged. As part of the team that works on the live events, I am also involved in the backend development to allow support for our features.'
		]
	},*/
	{
		title: 'AstroNerds',
		banner: '/images/astronerds-logo.png',
		link: 'https://play.google.com/store/apps/details?id=com.echelon.astronerds&hl=en',
		year: 2025,
		platforms: [
			{ src: '/images/android-logo.png', title: 'Android' },
			{ src: '/images/ios-logo.png', title: 'iOS' }
		],
		align: 'right',
		description: [
			'"Leap into a thrilling side-scrolling platformer on the Red Planet! Guide a crew of fearless space explorers, each with their own astro-science specialty, through jump-based platforming challenges, epic boss fights, and perilous terrain."',
			'After joining the Echelon, I was shortly assigned as the acting lead of the development team. I was in charge of fixing our workflows and bring it up to industry standards. Architectural design and planning was also one my other key roles as acting lead, I provided techical documentations base off requirements from our Game Design Document and make sure that deliverables are up to specifications. My code contributions lies in the core systems of our project like the backend, IAP, Ads, tools and CI/CD automations.'
		]
	},
	{
		title: 'Perfect Shot',
		banner: '/images/perfect-shot-banner.png',
		link: 'https://perfectshot.io',
		year: 2025,
		platforms: [
      { src: '/images/android-logo.png', title: 'Android'},
			{ src: '/images/telegram-logo.png', title: 'Telegram' },
			{ src: '/images/warpcast-logo.png', title: 'Warpcast' }
		],
		align: 'right',
		description: [
			'"A space-themed, roguelike arcade shooter where players control a ship navigating through procedurally generated space environments."',
			'For this project I handled most of the core systems and a couple of gameplay mechanics like ship control and weapon designs, focused on crafting an engaging and responsive gameplay experience. Created the UI and some other art assets to augement our art production. Additionally, I designed and implemented the entire backend using Flask for our user data management, authentication and leaderboard. I also integrated crypto wallet support for some of our platforms to allow the game to accept ETH and USDC payments.'
		]
	},
	{
		title: 'Midnight Anomalies',
		banner: '/images/midnight-anomalies-banner.png',
		link: 'https://clem-nightmare.web.app',
		year: 2025,
		platforms: [{ src: '/images/browser-logo.png', title: 'Browser' }],
		align: 'right',
		description: [
			"Midnight Anomalies is an immersive, real-time PvP card game set in the eerie universe of Clementine's Nightmare. Step into the shoes of a Nightmare's chosen and harness their unique deck of powerful, otherworldly cards to battle against players from around the globe. Each Nightmare boasts its own distinct abilities and signature card collections, allowing for strategic depth and dynamic gameplay. Outsmart, outplay, and dominate your opponents in intense matches where every decision can alter the course of fate.",
			'I was assigned as the multiplayer engineer in this project. I had built all of the netcode and networking infrastructure needed to make sure the multiplayer, matchmaking and game servers work using Unity Gaming Services.'
		]
	},
	{
		title: 'Project Kali',
		banner: '/images/project-kali-banner.png',
		link: 'https://youtu.be/vDwHzipGMr8',
		year: 2023,
		platforms: [{ src: '/images/windows-logo.png', title: 'Windows' }],
		align: 'right',
		description: [
			'An Action RPG demo set in ancient Philippines where mythical creatures roam its lands. This project aimed to replicate the experiences brought by its inspirations the Souls games, Assassin\'s Creed franchise and Nioh.',
			"I served as the main engineer in the development of this demo. We used third party plugins so that we didn't have to reinvent most of the base features of an RPG and to speed up development. My main efforts on this one were focused on creating a fluid combat and movement with robust animation blending. I was also tasked with creating an enemy AI with responsive behaviors that were based on the players actions."
		]
	},
	{
		title: 'Viajero',
		banner: '/images/viajero-banner.png',
		link: 'https://play.google.com/store/apps/details?id=com.TaktylStudios.Viajero&hl=en_US',
		year: 2023,
		platforms: [{ src: '/images/android-logo.png', title: 'Android' }],
		align: 'right',
		description: [
			'"Viajero is a game based on the story of the viajeros in what became known as the Caboloan Cattle Caravans (CCC). Viajeros are the mobile traders that used to ply a large part of Luzon--from Pangasinan to as far as Naga City-on cattle-drawn carts peddling household wares mostly made of bamboo."',
			"I was brought in to this project to implement most of the feedback animations and polish the UI elements' scaling and positioning."
		]
	},
	{
		title: 'U-Coinville',
		banner: '/images/u-coinville-banner.png',
		link: 'https://www.facebook.com/UnileverPhilippines/videos/step-into-u-coinville-today/3252459158342138/',
		year: 2022,
		platforms: [{ src: '/images/browser-logo.png', title: 'Browser' }],
		align: 'left',
		description: [
			'A virtual space for marketing various brands under Unilever Philippines. This features worlds with specific themes with the associated brand tied to them. Players can explore U-Coinville in which they can participate in events and minigames scattered around the spaces to earn rewards that they can use to claim discounts for realworld purchases.',
			'Acting as one of the gameplay engineers, I help bring the minigames from design to life. I also worked as a backend developer on this project since we heavily rely on REST APIs to handle analytics, user database, and various universal events.'
		]
	},
	{
		title: 'Vircon',
		banner: '/images/vircon-3-banner.png',
		link: 'https://youtu.be/AUNUltxy8DQ',
		year: 2022,
		platforms: [
			{ src: '/images/windows-logo.png', title: 'Windows' },
			{ src: '/images/android-logo.png', title: 'Android' },
			{ src: '/images/browser-logo.png', title: 'Browser' }
		],
		align: 'left',
		description: [
			'A propriety software made by Taktyl Studios used as base to create gamified virtual platforms and coference spaces be it for limited time events or large scale projects that requires handling large amount of data and users. It also features cross compatibility with PC, mobile and web to cater to wide range of users.',
			'I was tasked to spearhead in upgrading its networking backend and help to improve its graphical fidelity. I also designed and new backend server to act as a template for future projects that will use this platform. One of my other jobs was to develop a new character customization system.'
		]
	},
	{
		title: 'Space Rocks',
		banner: '/images/space-rocks-banner.png',
		link: 'https://play.google.com/store/apps/details?id=com.GenericName.TrialProject',
		year: 2021,
		platforms: [{ src: '/images/android-logo.png', title: 'Android' }],
		align: 'right',
		description: [
			'"The solar system is throwing asteroids towards the earth. Some big, some small, some that are loaded with explosive material! You have the power of your god-like finger to easily block, shield, toss and maneuver asteroids away from the earth before they hit. You also have a variety of defense mechanisms, included rockets, nuclear missiles, defense fighter ships and shields! How many waves can you survive? In this increasingly difficult challenge to protect the earth from sure annihilation!"',
			'This is the first commercial project I have worked on under Werewolven Games, in which my technical involvement includes preparing and optimizing the code for the mobile release. I was also tasked with overseeing store listing approval and internal testing of the game.'
		]
	}
];

export const ueProjects = [
	{
		title: 'Procedural Planet Generator',
		video: 'gIWWzu-no18',
		align: 'left',
		description: [
			"This was achieved by combining the Procedural Mesh Component provided by Unreal Engine and a C++ implementation of Ken Perlin's Simplex Noise as a base. I applied the cube sphere method for this implementation in order to accommodate higher resolution worlds. By doing this, it will allow us to divide the sphere into chunks for selective loading and 'Level of Detail' (LOD) optimizations for realtime rendering."
		]
	},
	{
		title: 'Random Galaxy Generator',
		video: 'fSH3bQRnqZM',
		align: 'right',
		description: [
			"A simple system that generates a galaxy with random sets of solar systems. The implementation involves using a 'Random Stream' which takes a seed input that will enable us to reproduce results for testing purposes and later be used for a saving and loading feature."
		]
	},
	{
		title: 'Character Creator',
		video: 'RjLjyA9zJPg',
		align: 'left',
		description: [
			'A bare-bones character creator which utilizes morph targets embedded in 3D models. Our approach for this one was to rig all the base models in Daz3D; we then create morph targets to the parts we want to manipulate and add the necessary bones/sockets for attaching equipment and accessories. Subsequently, all of those morph targets and other settings are baked into the model to be imported into the engine. You can then access these morphs through the skeletal mesh by referencing their names.'
		]
	}
];

export const jamProjects = [
	{
		title: 'Etude',
		banner: '/images/etude-banner.png',
		link: 'https://team-pink-horse.itch.io/etude',
		year: 2022,
		platforms: [{ src: '/images/browser-logo.png', title: 'Browser' }],
		description: [
			'Play as Etude Dirigentin a beautiful elven musicophile. A rhythm game that use gestures to hit the right notes and ',
			'Our entry for the December 2022 Score Space Jam.'
		]
	},
	{
		title: 'Little Farm',
		banner: '/images/little-farm-banner.png',
		link: 'https://namtaro.itch.io/little-farm',
		year: 2020,
		platforms: [{ src: '/images/windows-logo.png', title: 'Windows' }],
		description: [
			'A farming simulator game where you play as a young girl named Elona trying to build her farm from scratch. Plant a variety of crops that you can sell or use it to craft items to gain more profit. This is inspired by classic titles such as "Harvest Moon", "Rune Factory", and "Stardew Valley".',
			'This game served as our entry for the "Jam with MediBang" with a seven (7) day deadline. We were a 3-man team for this project and I took up the role of the gameplay and UI designer. This particular project showed my flaws in planning and scoping. Although we weren\'t good enough to make it to the top submissions, we were still happy to finish the game in time and served as a great lesson for me, too.'
		]
	},
	{
		title: 'Space Panic',
		banner: '/images/space-panic-banner.png',
		link: 'https://namtaro.itch.io/space-panic',
		year: 2020,
		platforms: [{ src: '/images/browser-logo.png', title: 'Browser' }],
		description: [
			'Shoot down as many enemies as you can in this 2D frantic top-down space shooter. Collect energy cells from destroyed enemies to keep your ship working. Pickup repair kits to stay longer in the fight and rack up even higher scores!',
			'A game created in two (2) days as a challenge to myself to practice polishing. I used open-source assets for this project to save time and focus on faster production and improving the overall quality of the game.'
		]
	},
	{
		title: 'escape.',
		banner: '/images/escape-banner.png',
		link: 'https://hanojisoka.itch.io/escape',
		year: 2020,
		platforms: [{ src: '/images/browser-logo.png', title: 'Browser' }],
		description: [
			"escape. is a 2D pixel art-based horror game, which was heavily inspired by one of the best horror-based games — 'Corpse Party'. The very main objective is to escape the cabin were you found yourself trapped inside. Collect key fragments, interact with objects, and get your way out of the cabin.",
			'A submission we made for the "Kindred Community Jam" that lasted for five (5) days. My main role for this project was as a pixel artist. I also helped in implementing the UI, audio and some gameplay mechanics.'
		]
	},
	{
		title: 'Cave-in',
		banner: '/images/cave-in-banner.png',
		link: 'https://namtaro.itch.io/cave-in',
		year: 2019,
		platforms: [{ src: '/images/windows-logo.png', title: 'Windows' }],
		description: [
			'My very first game jam game! An atmospheric retro-platformer, where you are trapped in a perilous dark cave. Equipped only with your headlight, you must overcome the obstacles ahead of you and find your way back to the surface.',
			'This was made for the fifth "Extra Credits Game Jam" themed "Passage" with a fourthy-eight (48) hour deadline. All of the assets from the code, pixel art and music were made from scratch solely by me.'
		]
	}
];
