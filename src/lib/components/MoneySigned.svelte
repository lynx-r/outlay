<script lang="ts">
	import type { MoneySigned } from "$lib/types";
	import { cutNumber } from "$lib/utils";
	import Currency from "./Currency.svelte";

  const {money, cut = true}: {money: MoneySigned, cut?: boolean} = $props()
</script>

<div 
  class:green={money.sign}
  class:red={!money.sign}
  >
  {#if money.sign}
    +{cutNumber(money.value, cut)}
  {:else}
    -{cutNumber(money.value, cut)}
  {/if}
  <Currency currency={money.currency}/>
</div>
