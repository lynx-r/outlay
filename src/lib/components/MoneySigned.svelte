<script lang="ts">
	import type { MoneySigned } from "$lib/types";
	import { cutNumber } from "$lib/utils";
	import Currency from "./Currency.svelte";

  const {money}: {money: MoneySigned} = $props()
</script>

<div 
  class:green={money.sign}
  class:red={!money.sign}
  >
  {#if money.sign}
    +{cutNumber(money.value)}
  {:else}
    -{cutNumber(money.value)}
  {/if}
  <Currency currency={money.currency}/>
</div>
