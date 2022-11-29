<script>
  export let items = [];
</script>

<ul>
  {#each items as item}
    <li class="w-full flex justify-between">
      {item.name}{#if item.first_appearance_year}<span
          >First appearance: {item.first_appearance_year}</span
        >{/if}
    </li>
  {/each}
</ul>
