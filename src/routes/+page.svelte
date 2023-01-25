<script lang="ts">
	const click = () => {
		const csrf = new Uint8Array(12)
		crypto.getRandomValues(csrf)
		const state = [...csrf].map(v => v.toString(16)).join("")
		sessionStorage.setItem("state", state)
		const link =
			"https://id.twitch.tv/oauth2/authorize?response_type=token&force_verify=true&client_id=" +
			import.meta.env.CHATTIES_CLIENT_ID +
			"&redirect_uri=" +
			new URL("/callback", location.origin).href +
			"&scope=" +
			[
				// Twitch API scopes
				// "analytics:read:extensions", "analytics:read:games", "bits:read", "channel:edit:commercial", "channel:manage:broadcast", "channel:read:charity", "channel:manage:extensions", "channel:manage:moderators", "channel:manage:polls", "channel:manage:predictions", "channel:manage:raids", "channel:manage:redemptions", "channel:manage:schedule", "channel:manage:videos", "channel:read:editors", "channel:read:goals", "channel:read:hype_train", "channel:read:polls", "channel:read:predictions", "channel:read:redemptions", "channel:read:stream_key", "channel:read:subscriptions", "channel:read:vips", "channel:manage:vips", "clips:edit", "moderation:read", "moderator:manage:announcements", "moderator:manage:automod", "moderator:read:automod_settings", "moderator:manage:automod_settings", "moderator:manage:banned_users", "moderator:read:blocked_terms", "moderator:manage:blocked_terms", "moderator:manage:chat_messages", "moderator:read:chat_settings", "moderator:manage:chat_settings", "moderator:read:chatters", "moderator:read:shield_mode", "moderator:manage:shield_mode", "moderator:read:shoutouts", "moderator:manage:shoutouts", "user:edit", "user:edit:follows", "user:manage:blocked_users", "user:read:blocked_users", "user:read:broadcast", "user:manage:chat_color", "user:read:email", "user:read:follows", "user:read:subscriptions", "user:manage:whispers",
				// Chat and PubSub scopes
				// "channel:moderate",
				"chat:edit",
				"chat:read",
				// "whispers:read",
				// "whispers:edit",
			].join("+") +
			"&state=" +
			state
		location.assign(link)
	}
</script>

<h1>Heyhey!</h1>
<p>Welcome to the chatties auth flow!</p>

<button on:click={click} role="link">Log In</button>

<style>
</style>
