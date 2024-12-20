{#if messages.length > 0}
  <div class="min-h-screen bg-gray-800 p-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-white text-2xl font-bold mb-4">Real-time Console</h1>
      <Console {messages} />
    </div>
  </div>
{/if}

<script lang="ts">
  import { onMount } from 'svelte';
  import { messages } from './stores/consoleStore';
  import Console from './components/Console/Console.svelte';
  import { connectWebSocket } from './lib/websocket';

  onMount(() => {
    connectWebSocket();
  });
</script>