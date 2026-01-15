<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="block-auth p-8 mt-8">
	<h4 class="header-login text-center">Вход в систему</h4>
	<form method="post" action="?/login" use:enhance>
		<fieldset>
			<label>
				<input
					placeholder="Логин"
					name="username"
				/>
			</label>
			<label>
				<input
					placeholder="Пароль"
					type="password"
					name="password"
				/>
			</label>
		</fieldset>
		<button class="bg-red-600"
			>Войти</button
		>
		<button
			formaction="?/register"
			class=""
			>Зарегистрироваться</button
		>
	</form>
	<p style="color: red">{form?.message ?? ''}</p>
</div>

<style>
	.block-auth {
		border: 1px solid var(--red);
	}

	.header-login {
		color: var(--red);
	}
</style>
