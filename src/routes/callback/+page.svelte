<script lang="ts">
	const info = new URLSearchParams(location.hash.slice(1))
	info.append("client_id", import.meta.env.CHATTIES_CLIENT_ID as string)
	const scsrf = sessionStorage.getItem("state")
	const hcsrf = info.get("state")
	const error =
		location.search !== ""
			? "Search: " + location.search
			: location.hash === ""
			? "Hash: " + location.hash
			: scsrf !== hcsrf
			? `Anti-CSRF: Invalid value for 'state', expected ${scsrf}, got ${hcsrf}`
			: false
	info.delete("state") // don't need this in the token
	const json = JSON.stringify(Object.fromEntries(info.entries()))
	let copied = false
	const copy = async () => {
		await navigator.clipboard.writeText(json)
		copied = true
	}
</script>

<h1>Chatties Login!</h1>
{#if error}
	Authentication error!
	<pre>{error}</pre>
{:else}
	<p>Successfully logged in!</p>
	<button on:click={copy}>Copy token to clipboard</button>
	{#if copied}
		<p>Copied!</p>
	{/if}
	<p>Steps to log in:</p>
	<ul>
		<li>Copy the token</li>
		<li>Open the Chatties app</li>
		<li>Click the "Log in" button</li>
		<li>Paste the token</li>
	</ul>
	<details>
		<summary>⚠️ [PRIVATE] Click this to reveal the token text</summary>
		<pre>{json}</pre>
	</details>
{/if}

<style>
	ul {
		font-size: larger;
		text-align: center;
		list-style: none;
		padding: 0;
	}
	li::before {
		content: "- ";
	}
	p {
		font-size: larger;
	}
	details {
		margin-top: 5em;
		text-align: center;
	}
	summary {
		color: red;
		text-shadow: 0 0 2em currentColor;
	}
</style>
