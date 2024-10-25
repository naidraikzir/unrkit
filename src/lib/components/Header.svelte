<script lang="ts">
	import { page } from '$app/stores';

	const menu = [
		{
			path: '/',
			text: 'Home',
			name: ''
		},
		{
			path: '/about',
			text: 'About',
			name: 'About'
		}
	];

	let theme = $state('light');

	$effect(() => {
		detectTheme();
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (e) => setTheme(e.matches ? 'dark' : 'light'));
	});

	function detectTheme() {
		const storageTheme = localStorage.getItem('theme');
		if (
			(storageTheme && storageTheme === 'dark') ||
			(!storageTheme &&
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}

	function setTheme(newTheme: string) {
		theme = newTheme;
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<header>
	<a href="/">
		<h3>Unr.</h3>
	</a>
	<nav>
		{#each menu as item}
			<a href={item.path} class:active={$page.url.pathname === item.path} class="item">
				{item.text}
			</a>
		{/each}
	</nav>
	<span
		role="button"
		tabindex="0"
		class="theme-toggle"
		aria-label="theme switcher"
		onclick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		onkeyup={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
	>
	</span>
</header>

<style>
	header {
		display: flex;
		margin-bottom: 2em;
		padding: 1em;
	}

	h3 {
		color: var(--color-text-default);
		margin: 0;
	}

	a {
		border: 0;
	}

	nav {
		margin-left: auto;
	}

	.item {
		border: 0;
		color: var(--color-text-default);
		font-weight: 700;
		margin-left: 0.75em;
		position: relative;
		transition: 0.3s;

		&::after {
			bottom: 0;
			content: '·';
			left: 0;
			line-height: 0;
			opacity: 0;
			position: absolute;
			transition: 0.3s;
		}

		&.active::after {
			opacity: 1;
		}
	}

	.theme-toggle {
		cursor: pointer;
		display: inline-block;
		margin-left: 0.75em;
		user-select: none;

		&::before {
			content: '☀️';
		}

		:global([data-theme='dark']) &::before {
			content: '🌙';
		}

		@media (prefers-color-scheme: dark) {
			&::before {
				content: '🌙';
			}

			:global([data-theme='light']) &::before {
				content: '☀️';
			}
		}
	}
</style>
