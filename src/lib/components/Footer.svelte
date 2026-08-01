<script>
	const socials = [
		{ href: 'https://github.com/scaredskeleton', image: 'github-logo' },
		{ href: 'https://namtaro.itch.io/', image: 'itch-logo' },
		{
			href: 'https://www.linkedin.com/in/cedric-aguila-16968a233/?originalSubdomain=ph',
			image: 'linked-logo'
		}
	];
</script>

<section id="footer">
	<div id="contact" class="medium-text">
		<div>Get in Touch!</div>
		<div id="email">
			<img src="/images/email-icon-hover.png" alt="email" />
			<a href="mailto: cedric.gamedev@gmail.com">cedric.gamedev@gmail.com</a>
		</div>
	</div>

	<div id="socmed-links">
		<p class="common-text">Follow me at:</p>
		{#each socials as social}
			<a href={social.href} target="_blank">
				<img src={`/images/${social.image}.png`} alt="" />
				<img src={`/images/${social.image}-hover.png`} alt="" />
			</a>
		{/each}
	</div>
</section>
