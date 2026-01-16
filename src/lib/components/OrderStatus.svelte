<script lang="ts">
  import denyIco from '$lib/assets/icons/deny.png';
  import doneIco from '$lib/assets/icons/done.png';
  import inWorkIco from '$lib/assets/icons/in-work.png';
  const {status} = $props()
</script>

{#if status === 'done'}
<img src={doneIco} alt="done"/>
{:else if status === 'deny'}
<img src={denyIco} alt="deny"/>
{:else if status === 'in-work'}
<img src={inWorkIco} alt="in-work"/>
{/if}
