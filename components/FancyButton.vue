<script setup lang="ts">
	const props = defineProps<{
		text: string
		href: string
		newpage: boolean | undefined
		useRouter: boolean
	}>()
</script>

<template>
	<router-link v-if="useRouter" :to="props.href">
		<button>{{ props.text }}</button>
	</router-link>
	<a  v-else :href="props.href" :target="newpage?'_blank': undefined">
		<button>{{ props.text }}</button>
	</a>
</template>

<style scoped lang="scss">
a button {
	background: linear-gradient(
		45deg,
		orange 0%,
		rgb(151, 85, 42) 50%,
		orange 100%
	);
	font-family: Figtree, sans-serif;
	padding: 1rem;
	font-size: 1.2rem;
	font-weight: 600;
	border: none;
	border-radius: 0.4rem;
	transition: box-shadow 500ms ease-in-out;
	&:hover {
		box-shadow: 0px 0px 4px 5px #ffffff5e;
	}
}
</style>
