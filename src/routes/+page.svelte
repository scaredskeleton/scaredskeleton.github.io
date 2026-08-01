<script>
	const skills = {
		LANGUAGES: ['C#', 'C++', 'JavaScript', 'Python', 'Lua', 'HTML5', 'CSS/Sass', 'GraphQL'],
		'ENGINES & FRAMEWORKS': ['Unity', 'Unreal Engine', 'Godot', 'Node.js', 'Flask', 'React'],
		TOOLS: ['Git & Github', 'Perforce', 'Plastic SCM', 'Photoshop', 'Blender', 'Neovim'],
		FIELDS: ['Gameplay', 'Networking', 'Backend', 'User Interface', 'Game AI', 'Engine', 'Pixel Art']
	};
</script>

<svelte:head>
	<title>Cedric</title>
</svelte:head>

<section id="intro">
	<div id="body" class="intro-text">
		<p class="greeting">Hello!</p>
		<p>I'm <span class="name">Cedric Aguila</span> a professional Game Developer.</p>
		<p>I love designing gameplay mechanics, creating rapid prototypes</p>
		<p>and devising in-editor tools to aid in production.</p>
		<p class="intro-gap">Also known as <span class="name">Scared Skeleton</span>.</p>
	</div>
	<img class="profile-pic" src="/images/Profile-Picture.jpg" alt="Cedric Aguila" />
</section>

<section id="about-me" class="content">
	<div class="section-header-bold">BACKGROUND</div>
	<div id="about-me-contents" class="common-text">
		<p>
			I am a self-motivated and passionate game developer currently based in the Philippines. I found my
			passion late in life, my love for transforming ideas into unique experiences that bring joy and
			inspiration to others drove me to pursue this career. I am always enthusiastic about learning new things
			and meeting new awesome people. I have now worked as generalist developer in the industry, delving into
			the different aspects of game development for more than five (5) years now, and I've been making games
			for game jams and hobby projects for almost six (6) years.
		</p>
		<p>
			In the future, I hope my dedication to game development would finally allow me to establish my very own
			independent studio and be able to create games that would eventually inspire more people to be involved
			in the process of giving extraordinary virtual experiences and continuously reaching greater milestones.
		</p>
	</div>
</section>

<section id="skills" class="content">
	<div class="section-header-bold">SKILLS</div>
	<div id="skills-content" class="common-text">
		{#each Object.entries(skills) as [header, items], i}
			<div class={i > 0 ? 'tab-space' : ''}>
				<p class="header-bold">{header}</p>
				{#each items as item}
					<p>{item}</p>
				{/each}
			</div>
		{/each}
	</div>
</section>

<style>
	.content {
		width: 1000px;
		margin-bottom: 150px;
	}

	#intro {
		width: 1300px;
		margin-top: 200px;
		margin-left: auto;
		margin-right: auto;
	}

	#intro #body {
		display: inline-block;
	}

	#intro img {
		float: right;
	}

	.intro-text {
		font-family: 'Poppins', sans-serif;
		font-size: x-large;
		color: rgb(204, 204, 204);
	}

	.profile-pic {
		width: 280px;
		height: 280px;
		border-radius: 50%;
	}

	.name {
		font-weight: bold;
		font-size: xx-large;
		color: rgb(215, 181, 108);
	}

	.greeting {
		font-size: xx-large;
		padding-bottom: 50px;
		color: rgb(204, 204, 204);
	}

	.intro-gap {
		padding-top: 30px;
	}

	#about-me {
		margin-top: 300px;
		margin-left: auto;
		margin-right: auto;
	}

	#about-me p {
		text-indent: 70px;
		margin-bottom: 30px;
		text-align: justify;
	}

	#about-me p:last-child {
		margin-bottom: 0px;
	}

	#skills {
		margin-left: auto;
		margin-right: auto;
	}

	#skills-content {
		display: flex;
		justify-content: space-between;
	}

	.tab-space {
		padding-left: 6%;
	}

	@media (max-width: 768px) {
		.content {
			width: 100%;
			padding: 0 20px;
			margin-bottom: 80px;
		}

		#intro {
			width: 100%;
			margin-top: 150px;
			padding: 0 20px;
		}

		#intro #body {
			display: block;
			text-align: center;
		}

		#intro img {
			float: none;
			display: block;
			margin: 40px auto 0;
		}

		.intro-text {
			font-size: large;
		}

		.name {
			font-size: x-large;
		}

		#about-me {
			margin-top: 150px;
		}

		#about-me p {
			text-indent: 0px;
		}

		#skills-content {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 30px;
		}

		.tab-space {
			padding-left: 0px;
		}
	}
</style>
