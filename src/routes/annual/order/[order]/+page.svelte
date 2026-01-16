<script lang="ts">
	import Money from "$lib/components/Money.svelte";
	import OrderStatus from "$lib/components/OrderStatus.svelte";
	import YourOutlay from "$lib/components/YourOutlay.svelte";
	import type { PageProps } from "./$types";

  const {data}: PageProps = $props()
  const order = $derived(data.order)
</script>

<div class="flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <div class="flex justify-between">
      <div>Заказ <span class="gray">#{order.id}</span></div>
      <div>{order.date}</div>
      <!-- <div class="font-black">·</div> -->
      <!-- <div>{data.month.zak} зак</div> -->
    </div>
    <div class="flex justify-between">
      <div>{order.address}</div>
      <OrderStatus status={order.status}/>
    </div>
    <div class="flex justify-between border blue rounded-lg p-3">
      <div>{order.clientName.name}</div>
      <div class="violet">{order.clientPhone.phone}</div>
    </div>
  </div> 
  <div class="flex flex-col border red p-3 rounded-lg">
    <div class="flex justify-between">
      <div class="red font-bold">Расходы твои</div>
      <div class="circle-plus text-white bg-red">+</div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4">
    {#each order.yourOutlay.items as item (item.id)}
      <YourOutlay outlay={item}/>
    {/each}
    <YourOutlay outlay={order.yourOutlay.rest}/>
    <YourOutlay outlay={order.yourOutlay.varranty}/>
  </div>
  <div class="flex justify-between mt-4">
    <div class="flex-1">
      Твоих трат:
    </div>
    <div class="flex gap-1">
      <Money class="line-through" money={order.yourOutlay.yourTotal.before} cut={false}/>
      <div>⭢</div>
      <Money class="red" money={order.yourOutlay.yourTotal.after} cut={false}/>
    </div>
  </div>
</div>

<style>
  .circle-plus {
  font-weight: bold;
  padding: 0 6px;
  line-height: 20px;
  border-radius: 50%;
  }
</style>