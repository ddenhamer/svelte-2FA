<!-- src/Login.svelte -->
<script>
  import { store, signedIn } from './stores/auth.js'
  import Auth from '@aws-amplify/auth';
  let password = ""
  let email = ""
  $: username = email
  let promise
  function handleSubmit() {
	promise = Auth.signIn({
		username,
		password,
		attributes: {
      		email: email
    	}
	}).then(user => {
	  $store = user //  save user object, representing a successful login
	  $signedIn = true
	}).catch(err => console.log(err));
  }
</script>
<div>
	<h1>Sign In</h1>
	{#await promise}
	<p>Logging in...</p>
	{:catch error}
	<p class="errorMessage">Something went wrong: {error.message}</p>
	{/await}
  <form on:submit|preventDefault={handleSubmit}>
	<label>
	  Email:
	  <input type="text" bind:value={email} placeholder="your username"/>
	</label>
	<label>
	  Password:
	  <input type="password" bind:value={password} />
	</label>
	<button type="submit">Submit</button>
  </form>
</div>