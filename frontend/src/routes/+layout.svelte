<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Sidebar } from '$lib/components';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="container flex flex-row">
	<Sidebar />
	<main>
		{@render children()}
	</main>
</div>

