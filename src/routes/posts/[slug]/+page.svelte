<script lang="ts">
	import { format, getYear } from 'date-fns';
	import Head from '$lib/components/Head.svelte';

	let { data } = $props();
	const Content = data?.content;
	const meta = data?.meta;

	function formatDate(date = new Date()) {
		return format(
			new Date(date),
			`MMMM d${getYear(new Date()) > getYear(new Date(date)) ? ', yyyy' : ''}`
		);
	}
</script>

<Head title={meta?.title} description={meta?.description} />

<div class="head">
	<h2>{meta?.title}</h2>
	<div>{formatDate(meta?.date)}</div>
</div>
<Content />

<style>
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
