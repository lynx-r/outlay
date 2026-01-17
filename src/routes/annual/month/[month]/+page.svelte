<script lang="ts">
	import MoneyCut from "$lib/components/MoneyCut.svelte";
	import MoneySignedCut from "$lib/components/MoneySignedCut.svelte";
	import OrderStatus from "$lib/components/OrderStatus.svelte";
	import type { PageProps } from "./$types";

  const {data}: PageProps = $props()
  const month = $derived(data.month);
</script>

<div>
  <div class="grid grid-cols-6 border border-gray-700 mb-4 p-4 rounded-sm">
    <div class="col-span-2"><button class="">⭠</button></div>
    <div class="col-span-2 flex justify-between">
      <div class="font-black">·</div>
      <div>{month.date}</div>
      <div class="font-black">·</div>
      <div>{month.zak} зак</div>
    </div>
  </div> 
  <div class="grid grid-cols-1 gap-4">
    {#each month.orders as order (order.id)}
      <div class="flex flex-col gap-1 border border-gray-700 p-2 flex-1 bg-gray-800 rounded-sm">
        <div class="flex justify-between gray">
          <div>#{order.id}</div>
          <div>{order.date}</div>
          <OrderStatus status={order.status} />
        </div>
        <div>{order.address}</div>
        <div class="flex justify-between">
          <div>{order.clientName.name}</div>
          <div class="violet">{order.clientPhone.phone}</div>
        </div>
        <hr class="border-gray-700 my-2">
        <div class="flex justify-between">
          <MoneyCut class="blue" money={order.firmBalance}/>
          <MoneyCut class="orange" money={order.income}/>
          <MoneySignedCut money={order.earning}/>
        </div>
      </div>
    {/each}
  </div>
</div>