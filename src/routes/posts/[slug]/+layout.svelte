<script lang="ts">
	import type { Snippet } from 'svelte';
	import Utterances from '$lib/components/Utterances.svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
	let loaded = $state(false);

	$effect(() => {
		setTimeout(() => {
			loaded = true;
		}, 150);
	});
</script>

<div class="wrapper" class:loaded>
	{@render children()}
	<hr />
	<Utterances />
</div>

<style>
	.wrapper {
		min-height: calc(100vh - (2 * 63px + 2em));
		opacity: 0;
		transform: translateY(-2em);
		transition: 0.5s cubic-bezier(0, 0, 0, 1.5);

		&.loaded {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
