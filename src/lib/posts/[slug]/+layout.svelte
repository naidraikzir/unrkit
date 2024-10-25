<script lang="ts">
	import { format, getYear } from 'date-fns';
	import type { Snippet } from 'svelte';
	import Utterances from '$lib/components/Utterances.svelte';

	type Props = {
		children: Snippet;
		frontmatter: {
			title: string;
			date: Date;
		};
	};

	let { children, frontmatter = { title: 'title', date: new Date() } }: Props = $props();
	let loaded = $state(false);

	$effect(() => {
		setTimeout(() => {
			loaded = true;
		}, 150);
	});

	function formatDate(date = new Date()) {
		return format(
			new Date(date),
			`MMMM d${getYear(new Date()) > getYear(new Date(date)) ? ', yyyy' : ''}`
		);
	}
</script>

<div class="wrapper" class:loaded>
	<div class="head">
		<h2>{frontmatter.title}</h2>
		<div>{formatDate(frontmatter.date)}</div>
	</div>

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

	.head {
		margin-bottom: 1.5em;

		h2 {
			margin-top: 0;
			margin-bottom: 0.25em;
		}

		div {
			font-size: 0.9em;

			&::before {
				content: '⏤';
				font-weight: 700;
				margin-right: 0.5em;
			}
		}
	}
</style>
