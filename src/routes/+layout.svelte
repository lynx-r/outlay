<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import './layout.scss';
	import './main.css';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="layout p-4 mt-4">{@render children()}</div>

<style>
	.layout {
		border: 1px solid var(--color-gray-700);
	}
</style>