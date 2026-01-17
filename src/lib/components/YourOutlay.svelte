<script lang="ts">
	import type { YourOutlayItem } from "$lib/types";
	import MoneyLocal from "./MoneyLocal.svelte";

  const {outlay}: {outlay: YourOutlayItem} = $props()
</script>

<div class="flex justify-between">
  <div>{outlay.name}</div>
  <div class="flex">
    <MoneyLocal class="red" money={outlay.money} />
    <div class="red ml-1">▼</div>
  </div>
</div>