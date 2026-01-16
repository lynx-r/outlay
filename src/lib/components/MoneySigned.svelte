<script lang="ts">
	import type { MoneySigned } from "$lib/types";
	import { cutNumber } from "$lib/utils";
	import Currency from "./Currency.svelte";

  const {money}: {money: MoneySigned} = $props()

console.log("cutNumber(999)", cutNumber(999));
console.log("cutNumber(1000)", cutNumber(1000));
console.log("cutNumber(50000)", cutNumber(50000));
console.log("cutNumber(1000000)", cutNumber(1000000));
console.log("cutNumber(10000000)", cutNumber(10000000));
console.log("cutNumber(1234567)", cutNumber(1234567));
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
