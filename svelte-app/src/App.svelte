<!-- App.svelte -->
<script>
	import Login from './Login.svelte'
	import Main from './Main.svelte'
	import Signup from './Signup.svelte';
	import Confirm from './Confirm.svelte';
	import { store, signedUp, confirmed } from './stores/auth.js'
</script>

<main>
	{console.log($signedUp)}
	{#if ($signedUp == true) && ($confirmed == false)}
		<Confirm />
	{:else if $signedUp === false}
		<Signup />
	{:else if $confirmed == true}
		<Login/>
	{/if}
</main>