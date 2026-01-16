<script lang="ts">
	import type { Money } from "$lib/types";
	import { cutNumber } from "$lib/utils";
	import Currency from "./Currency.svelte";

  const {money, class: className, cut = true}: {money: Money, class?: string, cut?: boolean} = $props()
</script>

<div class={className}>
  {#if cut}
    {cutNumber(money.value)}
  {:else}
    {money.value.toLocaleString('ru-RU')}
  {/if}
  <Currency currency={money.currency}/>
</div>
