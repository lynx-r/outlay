<script lang="ts">
    const {status} = $props()
</script>

{#if status === 'done'}
✅
{:else if status === 'deny'}
❌
{:else if status === 'in-work'}
🔄
{/if}
