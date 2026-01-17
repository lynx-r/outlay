<script lang="ts">
	import type { Money } from "$lib/types";
	import { cutNumber } from "$lib/utils";
	import Currency from "./Currency.svelte";

  const {money, class: className}: {money: Money, class?: string} = $props()
</script>

<div class={className}>
  {cutNumber(money.value, false)}
  <Currency currency={money.currency}/>
</div>
