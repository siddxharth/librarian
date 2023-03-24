<template>
	<v-bottom-navigation v-model="value" app>
		<v-btn value="books" @click="$router.push('/books')">
			<span>Books</span>

			<v-icon>mdi-bookshelf</v-icon>
		</v-btn>

		<v-btn value="authors" @click="$router.push('/authors')">
			<span>Authors</span>

			<v-icon>mdi-badge-account</v-icon>
		</v-btn>

		<v-btn value="members" @click="$router.push('/members')">
			<span>Members</span>

			<v-icon>mdi-account</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>