<script lang="ts">
	import type { Money } from "$lib/types";
	import { cutNumber } from "$lib/utils";
	import Currency from "./Currency.svelte";

  const {money, class: className, cut = true}: {money: Money, class?: string, cut?: boolean} = $props()
</script>

<div class={className}>
  {cutNumber(money.value, cut)}
  <Currency currency={money.currency}/>
</div>
