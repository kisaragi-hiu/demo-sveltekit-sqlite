<script>
  import SuperHeroes from "$lib/components/SuperHeroes.svelte";
  const description = "Here's my description!";
  async function update(value) {
    if (value.trim().length > 0) {
      items = await fetch(`/heroes?q=${value.trim()}`).then((v) => v.json());
    } else {
      items = [];
    }
  }
  let items = [];
  let value;
  $: update(value);
</script>

<svelte:head>
  <meta name="description" content={description} />
  <title>Here's a title!</title>
</svelte:head>

<main class="w-[95%] max-w-2xl mx-auto mt-48">
  <h1 class="text-3xl font-bold">
    Example reading data from a local SQLite database
  </h1>
  <p>Search for superheroes below</p>
  <input
    class="p-2"
    type="search"
    autocomplete="off"
    placeholder="Search"
    bind:value
  />
  <SuperHeroes {items} />
</main>
