<script lang="ts">
	import type { MoneySigned } from "$lib/types";
	import { cutNumber } from "$lib/utils";
	import Currency from "./Currency.svelte";

  const {money, class: className}: {money: MoneySigned, class?: string} = $props()
</script>

<div 
  class:green={money.sign}
  class:red={!money.sign}
  class={className}
  >
  {#if money.sign}
    +{cutNumber(money.value, true)}
  {:else}
    -{cutNumber(money.value, true)}
  {/if}
  <Currency currency={money.currency}/>
</div>
