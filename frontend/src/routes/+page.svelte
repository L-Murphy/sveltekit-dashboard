<script lang="ts">
    import type { PageProps } from "./$types";
    
    
    const v = "Hello"
    let { data }: PageProps = $props();
    const quotes = $derived(data.quotes);
    const nextId = $derived(data.quotes.length)
</script>

<h1>Welcome to QuoteKit</h1>

<form method="POST" action="?/create">
    <label for="quote">Quote</label>
    <input name="quote">
    <label for="author">Author</label>
    <input name="author">
    <button>Add Quote</button>
</form>
<ul>
	{#each quotes as quote}
		<li>{quote.quote} x {quote.author}</li>
	{/each}
</ul>

