<script lang="ts">
	$effect(init);

	function init() {
		const script = document.createElement('script');
		script.setAttribute('src', 'https://utteranc.es/client.js');
		script.setAttribute('repo', 'naidraikzir/unrizki');
		script.setAttribute('issue-term', 'pathname');
		script.setAttribute('theme', 'preferred-color-scheme');
		script.setAttribute('crossorigin', 'anonymous');
		script.setAttribute('async', 'true');
		document.getElementById('comments')?.appendChild(script);
	}
</script>

<div id="comments"></div>

<style>
	:global(.utterances) {
		max-width: 100%;
	}
</style>
