<div class={`py-1 ${typeStyles[message.type]}`}>
  {message.content}
</div>

<script lang="ts">
  import type { Message } from '../../types/console';
  import { MessageType } from '../../types/console';

  export let message: Message;

  const typeStyles = {
    [MessageType.Log]: 'text-white',
    [MessageType.Error]: 'text-red-400',
    [MessageType.Warning]: 'text-yellow-400',
    [MessageType.Info]: 'text-blue-400',
  };
</script>