<script lang="ts">
	import Money from "$lib/components/Money.svelte";
	import MoneySigned from "$lib/components/MoneySigned.svelte";
	import OrderStatus from "$lib/components/OrderStatus.svelte";
	import PayStatus from "$lib/components/PayStatus.svelte";
	import YourOutlay from "$lib/components/YourOutlay.svelte";
	import type { Order } from "$lib/types";
	import type { PageProps } from "./$types";

  const {data}: PageProps = $props()
  const order = $derived(data.order as Order)
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
      <div>{order.client.name}</div>
      <div class="violet">{order.client.phone}</div>
    </div>
  </div> 
  <div class="flex flex-col border-red p-3 rounded-lg">
    <div class="flex justify-between">
      <div class="red font-bold">Расходы твои</div>
      <div class="circle-plus text-white bg-red">+</div>
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
  <div class="flex flex-col gap-2 border-green rounded-sm p-4">
    <div class="flex justify-between">
      <div>Приход</div>
      <div class="circle-plus text-black bg-green">+</div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      {#each order.income.items as item (item.id)}
        <div class="flex justify-between">
          <div>{item.name}</div>
          <div class="flex justify-between gap-1">
            <MoneySigned cut={false} money={item.money} />
            <PayStatus class="green" payStatus={item.payStatus}/>
          </div>
        </div>
      {/each}
      <div class="flex justify-between">
        <div>Расходка</div>
        <div>✓</div>
        <Money cut={false} money={order.income.outlay.money} />
      </div>
    </div>
    {#each order.income.summary as item (item.id)}
      <div class="flex justify-between">
        <div>{item.name}</div>
        <Money class="green" cut={false} money={item.money} />
      </div>
    {/each}
    <div class="flex justify-between bg-violet py-2 px-4 -mx-4">
      <div>ИТОГ по заказу (кл)</div>
      <Money class="blue" cut={false} money={{value: 19300, currency:"RUB"}}/>
    </div>
    <div class="flex justify-between bg-green-debit py-2 px-4 -mx-4">
      <div>ИТОГ фирма баланс (кл)</div>
      <Money cut={false} money={{value: 17000, currency:"RUB"}}/>
    </div>
  </div>
</div>

<style>
  .circle-plus {
  font-weight: bold;
  padding: 0 7px;
  line-height: 21px;
  border-radius: 50%;
  }
</style>