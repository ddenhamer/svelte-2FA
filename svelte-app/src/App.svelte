<!-- App.svelte -->
<script>
	import Login from './Login.svelte'
	import Main from './Main.svelte'
	import Signup from './Signup.svelte';
	import Confirm from './Confirm.svelte';
	import { store, signedUp, confirmed, signedIn } from './stores/auth.js'
</script>

<main>
	{#if ($signedUp == true) && ($confirmed == false)}
		<Confirm />
	{:else if $signedUp === false}
		<Signup />
	{:else if $confirmed == true && $signedIn == false}
		<Login/>
	{:else if $confirmed == true && $signedIn == true}
		<Main/>
	{/if}
</main>