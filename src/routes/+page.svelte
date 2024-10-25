<script lang="ts">
	import { format, getYear } from 'date-fns';

	let { data } = $props();
	const { posts } = data;
	let loaded = $state(false);

	$effect(() => {
		setTimeout(() => {
			loaded = true;
		}, 250);
	});

	function formatDate(date: Date) {
		return format(
			new Date(date),
			`MMMM d${getYear(new Date()) > getYear(new Date(date)) ? ', yyyy' : ''}`
		);
	}
</script>

{#each posts as post, index}
	<div class="title" class:shown={loaded} style="transition-delay: {index * 0.15}s">
		<h3>
			<a href={`/posts/${post.path}`}>
				{post.metadata.title}
			</a>
		</h3>
		<small>{formatDate(post.metadata.date)}</small>
	</div>
{/each}

<style>
	.title {
		opacity: 0;
		transform: scale(1.1);
		transition:
			opacity 0.5s,
			transform 0.5s cubic-bezier(0, 0, 0, 1.5);

		&.shown {
			opacity: 1;
			transform: scale(1);
		}

		& + & {
			margin-top: 2.5em;
		}

		h3 {
			margin: 0;
		}

		a {
			border: 0;
		}
	}
</style>
