<template>
	<div>
		<p>
			{{ id != 0 ? "Edit" : "Add" }}
			<v-form>
				<v-text-field label="Title" v-model="book.title"></v-text-field>
				<v-text-field label="Description" v-model="book.description"></v-text-field>
			</v-form>
		</p>
	</div>
</template>

<script>
import booksList from '@/data/books.json';
export default {
	data() {
		return {
			id: 0,
			book: ""
		}
	},
	mounted() {
		this.id = this.$route.params.id;
		if (this.id != 0) {
			this.book = booksList.find(rec => rec._id == this.id)
		}
	}

}
</script>

<style lang="scss" scoped></style>