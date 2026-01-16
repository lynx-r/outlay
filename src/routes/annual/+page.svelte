<script lang="ts">
	import Money from "$lib/components/Money.svelte";
	import MoneySigned from "$lib/components/MoneySigned.svelte";
	import type { Annual } from "$lib/types";
	import type { PageProps } from "./$types";

  const {data}: PageProps = $props();
  const months: Annual[] = $derived(data.months as Annual[]);
</script>

<div>
  <div class="flex justify-between">
    <div><span class="mr-1">Бал:</span><span class="gray">234.5к ₽</span></div>
    <div><span class="mr-1">НБ(02):</span><span class="green">+67.8к ₽</span></div>
    <div><span class="mr-1">Покупки:</span><span class="red">-9к ₽</span></div>
  </div> 
  <hr class="my-4">
  <div class="grid grid-cols-2 gap-4">
    {#each months as month (month.id)}
    <div class="flex flex-col border p-2 flex-1 bg-gray-800 rounded-sm">
        <div class="flex justify-between gray">
          <div>{month.date}</div>
          <div>{month.zak} зак</div>
        </div>
        <div class="flex justify-between">
          <div>НБ:</div>
          <MoneySigned money={month.nb}/>
        </div>
        <div class="flex justify-between">
          <div>Real:</div>
          <Money class="blue" money={month.real} />
        </div>
      </div>
    {/each}
  </div>
</div>