<div class="bg-gray-900 text-white rounded-lg p-4 font-mono text-sm">
  <div 
    bind:this={containerRef}
    class="max-h-[500px] overflow-y-auto"
  >
    {#each $messages as message}
      <ConsoleMessage {message} />
    {/each}
  </div>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import ConsoleMessage from './ConsoleMessage.svelte';
  import type { Message } from '../../types/console';
  
  export let messages: Message[];
  let containerRef: HTMLDivElement;

  $: if (containerRef && messages) {
    containerRef.scrollTop = containerRef.scrollHeight;
  }
</script>