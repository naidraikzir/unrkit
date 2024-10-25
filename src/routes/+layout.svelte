<script lang="ts">
	import type { Snippet } from 'svelte';
	import '$lib/index.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ToTop from '$lib/components/ToTop.svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<svelte:head>
	<meta name="keywords" content="unrizki, developer" />
	<meta name="author" content="unrizki" />
	<meta name="google-site-verification" content="C6PUpooLizJmY5GMc5givDPgKhx9wQo_RBfWuC0PFtc" />

	<link
		href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700&display=swap"
		rel="stylesheet"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;1,300&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="wrapper">
	<Header />
	<div class="content">
		{@render children()}
	</div>
	<Footer />
	<ToTop />
</div>

<style>
	.wrapper {
		margin: 0 auto;
		max-width: 48em;
	}

	.content {
		min-height: calc(
			100vh - (/* header */ 1 * 1.5rem + 2rem + 2rem) - (/* footer */ 1.5 * 0.75rem + 2rem + 2rem)
				/* line-height * font-size + y-margins + y-paddings */
		);
		padding: 1em;
	}
</style>
