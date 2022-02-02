<!-- src/Login.svelte -->
<script>
  import { store, signedUp } from './stores/auth.js'
  import Auth from '@aws-amplify/auth';
  let password = ""
  let email = ""
  $: username = email
  let promise
  function handleSubmit() {
	promise = Auth.signUp({
		username,
		password,
		attributes: {
      		email: email
    	}
	}).then(user => {
	  $store = user //  save user object, representing a successful login
	  $signedUp = true
	}).catch(err => console.log(err));
  }
</script>
<div>
<h1>Sign Up to the Library</h1>

  <!-- <pre>{JSON.stringify($store, null, 2)}</pre> -->
  <form on:submit|preventDefault={handleSubmit}>
	<label>
	  Email:
	  <input type="email" bind:value={email} />
	</label>
	<label>
	  Password:
	  <input type="password" bind:value={password} />
	</label>
	<button type="submit">Submit</button>

	{#await promise}
	<p>Signup up...</p>
	{:catch error}
	<p class="errorMessage">Something went wrong: {error.message}</p>
	{/await}
  </form>
</div>