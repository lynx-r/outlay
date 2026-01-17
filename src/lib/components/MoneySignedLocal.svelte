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
    +{cutNumber(money.value, false)}
  {:else}
    -{cutNumber(money.value, false)}
  {/if}
  <Currency currency={money.currency}/>
</div>
