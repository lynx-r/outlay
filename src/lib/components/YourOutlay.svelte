<script lang="ts">
	import type { YourOutlayItem } from "$lib/types";
	import Money from "./Money.svelte";

  const {outlay}: {outlay: YourOutlayItem} = $props()
</script>

<div class="flex justify-between">
  <div>{outlay.name}</div>
  <div class="flex">
    <Money class="red" money={outlay.money} cut={false}/>
    <div class="red ml-1">▼</div>
  </div>
</div>