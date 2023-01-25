<script lang="ts">
	import "../global.css"
</script>

<main>
	<slot />
</main>

<style>
	main {
		position: absolute;
		top: 50vh;
		left: 50vw;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}
</style>
