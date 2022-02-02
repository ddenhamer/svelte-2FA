<!-- src/Login.svelte -->
<script>
  import { store, confirmed } from './stores/auth.js'
  import Auth from '@aws-amplify/auth';
    let password = ""
	let email = ""
  	$: username = email
	let int_code = ""
	$: code = int_code.toString()
  	let promise
  function handleSubmit() {
	promise = Auth.confirmSignUp(
	  username,
	  code
	).then(user => {
	  $store = user //  save user object, representing a successful login
	  $confirmed = true
	}).catch(err => console.log(err));
  }
</script>
<div>
	<!-- <pre>{JSON.stringify($store, null, 2)}</pre> -->
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			Email:
			<input type="text" bind:value={email} placeholder="your username"/>
		</label>
		<label>
			Code:
			<input type="text" bind:value={int_code} />
		</label>
		<button type="submit">Submit</button>
	</form>
	<h1>Confirmed</h1>
	{#await promise}
	<p>Confirming...</p>
	{:catch error}
	<p class="errorMessage">Something went wrong: {error.message}</p>
	{/await}
</div>