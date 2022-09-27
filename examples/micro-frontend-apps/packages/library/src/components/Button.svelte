<script lang='ts'>
  import { createEventDispatcher } from 'svelte'

  export let text: string

  const dispatch = createEventDispatcher<{
    click: void
  }>()
</script>

<button on:click={()=>dispatch("click")}>
  {text}
</button>

<style>
    button {
        border: none;
        padding: 1rem;
        border-radius: 5px;
    }
</style>