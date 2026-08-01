<script>
	const links = [
		{ label: 'ABOUT ME', href: '/#about-me' },
		{ label: 'PORTFOLIO', href: '/portfolio/' },
		{ label: 'CONTACT', href: '/#footer' }
	];
</script>

<nav id="navbar">
	<a href="/" class="logo">CEDRIC</a>
	<div id="nav-links">
		<ul>
			{#each links as link}
				<li><a href={link.href}>{link.label}</a></li>
			{/each}
		</ul>
	</div>
</nav>
