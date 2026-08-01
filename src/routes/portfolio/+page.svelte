<script>
	import { featuredProjects, ueProjects, jamProjects } from '$lib/data/projects.js';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta property="og:url" content="https://scaredskeleton.github.io/portfolio/" />
</svelte:head>

<section id="featured-projects" class="content">
	<div class="section-header-bold">FEATURED PROJECT</div>

	{#each featuredProjects as project}
		<div class="project-container-{project.align}">
			<img class="banner" src={project.banner} alt={project.title} />
			<div class="information">
				<a class="header-bold" href={project.link} target="_blank">{project.title}</a>
				<p class="common-text">
					{project.year} |
					{#each project.platforms as platform}
						<span><img src={platform.src} alt={platform.title} title={platform.title} /></span>
					{/each}
				</p>
				<div class="description">
					{#each project.description as paragraph}
						<p class="common-text">{paragraph}</p>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</section>

<section id="ue-prototypes" class="content">
	<div class="section-header-bold">UNREAL ENGINE PROJECTS</div>

	{#each ueProjects as project}
		<div class="project-container-{project.align}">
			<h1 class="header-bold">{project.title}</h1>
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${project.video}`}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			<div class="description">
				{#each project.description as paragraph}
					<p class="common-text">{paragraph}</p>
				{/each}
			</div>
		</div>
	{/each}
</section>

<section id="jam-projects" class="content">
	<div class="section-header-bold">JAM PROJECTS</div>

	{#each jamProjects as project}
		<div class="project-container">
			<img class="banner" src={project.banner} alt={project.title} />
			<div class="information">
				<a class="header-bold" href={project.link} target="_blank">{project.title}</a>
				<p class="common-text">
					{project.year} |
					{#each project.platforms as platform}
						<span><img src={platform.src} alt={platform.title} title={platform.title} /></span>
					{/each}
				</p>
				<div class="description">
					{#each project.description as paragraph}
						<p class="common-text">{paragraph}</p>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</section>

<style>
	.common-text {
		font-size: x-large;
	}

	.content {
		width: 1300px;
	}

	#featured-projects {
		margin-top: 100px;
		margin-left: auto;
		margin-right: auto;
	}

	#featured-projects .project-container-right {
		margin-bottom: 130px;
	}

	#featured-projects .project-container-left {
		margin-bottom: 150px;
	}

	#featured-projects .project-container-right .description {
		float: left;
	}

	.project-container-left,
	.project-container-right,
	.project-container {
		margin-left: auto;
		margin-right: auto;
	}

	#ue-prototypes {
		margin-top: 100px;
		margin-left: auto;
		margin-right: auto;
	}

	#ue-prototypes .project-container-right,
	#ue-prototypes .project-container-left {
		margin-bottom: 70px;
	}

	#ue-prototypes .project-container-right:last-child,
	#ue-prototypes .project-container-left:last-child {
		margin-bottom: 0px;
	}

	#ue-prototypes h1 {
		margin-bottom: 30px;
	}

	#ue-prototypes .project-container-right .description {
		float: left;
		min-height: 315px;
		margin-right: 50px;
	}

	#ue-prototypes .project-container-left .description {
		margin-left: 50px;
	}

	#ue-prototypes .description {
		display: inline-block;
		vertical-align: top;
		width: 680px;
	}

	#jam-projects {
		margin-top: 100px;
		margin-left: auto;
		margin-right: auto;
	}

	#jam-projects .project-container {
		margin-bottom: 70px;
	}

	#jam-projects .project-container:last-child {
		margin-bottom: 0px;
	}

	.banner {
		display: inline-block;
		vertical-align: text-top;
		width: 400px;
	}

	.information {
		margin-left: 50px;
		width: 840px;
		display: inline-block;
		vertical-align: top;
	}

	.information img {
		width: 20px;
		margin-left: 10px;
	}

	.description {
		text-indent: 70px;
		text-align: justify;
	}

	.description p {
		margin-bottom: 30px;
	}

	.description p:last-child {
		margin-bottom: 0px;
	}

	.header-bold {
		font-size: xx-large;
	}
</style>
