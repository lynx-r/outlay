<script lang="ts">
	import moneyBag from '$lib/assets/icons/money-bag.png';
	import MoneyCut from "$lib/components/MoneyCut.svelte";
	import MoneyLocal from "$lib/components/MoneyLocal.svelte";
	import MoneySignedCut from "$lib/components/MoneySignedCut.svelte";
	import MoneySignedLocal from "$lib/components/MoneySignedLocal.svelte";
	import OrderStatus from "$lib/components/OrderStatus.svelte";
	import PayStatus from "$lib/components/PayStatus.svelte";
	import YourOutlay from "$lib/components/YourOutlay.svelte";
	import type { Order } from "$lib/types";
	import type { PageProps } from "./$types";

  const {data}: PageProps = $props()
  const order = $derived(data.order as Order)
</script>

<div class="flex flex-col gap-4 mb-22">
  <div class="flex flex-col gap-1">
    <div class="flex justify-between">
      <div>Заказ <span class="gray">#{order.id}</span></div>
      <div>{order.date}</div>
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
  <div class="flex flex-col border-red p-3 rounded-md">
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
        <MoneyLocal class="line-through" money={order.yourOutlay.yourTotal.before} />
        <div>⭢</div>
        <MoneyLocal class="red" money={order.yourOutlay.yourTotal.after} />
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-2 border-green rounded-md p-4">
    <div class="flex justify-between">
      <div>Приход</div>
      <div class="circle-plus text-black bg-green">+</div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      {#each order.income.items as item (item.id)}
        <div class="flex justify-between">
          <div>{item.name}</div>
          <div class="flex justify-between gap-1">
            <MoneySignedLocal money={item.money} />
            <PayStatus class="green" payStatus={item.payStatus}/>
          </div>
        </div>
      {/each}
      <div class="flex justify-between">
        <div>Расходка</div>
        <div>✓</div>
        <MoneyLocal  money={order.income.outlay.money} />
      </div>
    </div>
    {#each order.income.summary as item (item.id)}
      <div class="flex justify-between">
        <div>{item.name}</div>
        <MoneyLocal class="green" money={item.money} />
      </div>
    {/each}
    <div class="flex justify-between bg-violet py-2 px-4 -mx-4">
      <div>ИТОГ по заказу (кл)</div>
      <MoneyLocal class="blue" money={{value: 19300, currency:"RUB"}}/>
    </div>
    <div class="flex justify-between bg-green-debit py-2 px-4 -mx-4">
      <div>ИТОГ фирма баланс (кл)</div>
      <MoneyLocal money={{value: 17000, currency:"RUB"}}/>
    </div>
  </div>
  <div class="flex flex-col gap-2 border-blue p-4 rounded-md">
    <div class="blue">Сдать</div>
    <div class="flex justify-between">
      <div>ВАЛ</div>
      <MoneyCut money={order.pass.val}/>
    </div>
    <div class="flex justify-between">
      <div>К СДАЧА (0.8)</div>
      <MoneyCut class="blue" money={order.pass.toPass}/>
    </div>
    <div class="flex justify-between">
      <div>ЗП след мес</div>
      <MoneyCut class="orange" money={order.pass.sallaryNextMonth}/>
    </div>
    <div class="flex justify-between">
      <div>Твое сейчас (0.2)</div>
      <MoneyCut class="green" money={order.pass.yourCurrentIncome}/>
    </div>
  </div>
  <div class="flex justify-between bg-slate-700 p-4 rounded-md">
    <div class="flex">
      <img src={moneyBag} alt="money bag" />
      <div class="text-2xl font-medium">Ты заработал</div>
    </div>
    <MoneySignedCut class="text-2xl font-medium" money={order.pass.yourTotalIncome}/>
  </div>
</div>
<div class="fixed bottom-4 left-[50%] -translate-x-1/2 
  z-10 bg-black p-4 rounded-md border border-gray-700">
  <div class="flex justify-center gap-6">
    <div class="flex gap-1">
      <div>Бал:</div>
      <MoneyCut class="orange" money={{value: 234500, currency: 'RUB'}} />
    </div>
    <div class="flex gap-1">
      <div>НБ:</div>
      <MoneySignedCut money={{value: 234500, currency: 'RUB', sign: true}} />
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