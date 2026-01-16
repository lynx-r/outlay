<script lang="ts">
	import type { Currency } from "$lib/types";

  const {currency}: {currency: Currency} = $props()
</script>

{#if currency ==='RUB'}
  <span>₽</span>
{/if}