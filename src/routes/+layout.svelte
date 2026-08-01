<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Cedric</title>
	<meta property="og:url" content="https://scaredskeleton.github.io/" />
</svelte:head>

<Navbar />
{@render children()}
<Footer />
