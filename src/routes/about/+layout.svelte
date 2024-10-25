<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
	let loaded = $state(false);

	$effect(() => {
		setTimeout(() => {
			loaded = true;
		}, 150);
	});
</script>

<div class="greet" class:loaded>
	{@render children()}
</div>

<style>
	.greet a {
		border: 0;
		font-weight: 600;
		text-decoration: none;
	}

	.greet {
		opacity: 0;
		transform: scale(1.05) translateY(-1%);
		transition: 0.5s cubic-bezier(0, 0, 0, 1.5);

		&.loaded {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}
</style>
