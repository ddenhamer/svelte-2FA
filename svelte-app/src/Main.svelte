<!-- Main.svelte -->
<script>
  import { store, signedIn} from './stores/auth.js'
  function logout() {
    $signedIn = false
  }
</script>
<main>
  <h2>You are logged in <button type="button" on:click={logout}>Log Out</button></h2>
  <h2>Congratulations!</h2>
  <!-- <pre>
    {JSON.stringify($store, null, 2)}
  </pre> -->
</main>