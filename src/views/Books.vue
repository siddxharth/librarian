<template>
	<div>
		<AppHeader title="Books" />
		<div v-for="data in bookList">
			<v-list-item>
				<v-list-item-avatar tile>
					<v-img :src="data.img"></v-img>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>{{ data.title }}</v-list-item-title>
					<v-list-item-subtitle>
						{{ data.author.name }}
					</v-list-item-subtitle>
					<v-list-item-subtitle>
						Pages: {{ data.pages }}
					</v-list-item-subtitle>
				</v-list-item-content>
				<!-- Option -->
				<v-list-item-icon>
					<div>
						<v-menu offset-y>
							<template v-slot:activator="{ on, attrs }">
								<v-btn v-bind="attrs" v-on="on" text>
									<v-icon>mdi-dots-vertical</v-icon>
								</v-btn>
							</template>
							<v-list>
								<v-list-item>
									<v-icon>mdi-pencil</v-icon>
									<v-list-item-title>Edit</v-list-item-title>
								</v-list-item>
								<v-list-item>
									<v-icon>mdi-delete</v-icon>
									<v-list-item-title>Delete</v-list-item-title>
								</v-list-item>
								<v-list-item>
									<v-icon>mdi-plus</v-icon>
									<v-list-item-title>Issue</v-list-item-title>
								</v-list-item>
								<v-list-item>
									<v-icon>mdi-minus</v-icon>
									<v-list-item-title>Return</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
						<!-- <v-icon v-text="Status"></v-icon> -->
						<p>Status</p>
					</div>
				</v-list-item-icon>
			</v-list-item>
		</div>
	</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import bookList from '../data/books.json';
export default {
	data() {
		return {
			bookList: bookList
		};
	},
	components: { AppHeader }
}
</script>

<style lang="scss" scoped></style>