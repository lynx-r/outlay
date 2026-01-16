<script lang="ts">
	import type { YourOutlay } from "$lib/types";
	import Money from "./Money.svelte";

  const {outlay}: {outlat: YourOutlay} = $props()
</script>

<div class="flex justify-between">
  <div>{outlay.name}</div>
  <div class="flex">
    <Money class="red" money={outlay.money} cut={false}/>
    <div class="red ml-1">▼</div>
  </div>
</div>