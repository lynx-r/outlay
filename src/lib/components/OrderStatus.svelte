<script lang="ts">
	import type { OrderStatus } from "$lib/types";

    const {status}: {status: OrderStatus} = $props()
</script>

{#if status === 'done'}
✅
{:else if status === 'deny'}
❌
{:else if status === 'in-work'}
🔄
{/if}
