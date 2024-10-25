<script lang="ts">
	type Props = {
		title?: string;
		description: string;
	};
	let { title, description }: Props = $props();
	const t = title ? `${title} • Unrizki` : 'Unrizki';
</script>

<svelte:head>
	<title>{t}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={t} />
	<meta property="og:description" content={description} />
</svelte:head>
