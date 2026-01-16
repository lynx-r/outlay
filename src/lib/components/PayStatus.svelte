<script lang="ts">
	import type { PayStatus } from "$lib/types";

  const {payStatus, class: className}: {payStatus: PayStatus, class?: string} = $props()
</script>

<div class={className}>
  {#if payStatus === "full"}
    ◉
  {:else if payStatus === "part"}
    ◑
  {/if}
</div>