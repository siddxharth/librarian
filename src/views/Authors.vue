<template>
	<div>
		<AppHeader title="Authors" />
		<div v-for="data in authorList">
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title><b>{{ data.name }}</b></v-list-item-title>
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
									<v-icon>mdi-bookshelf</v-icon>
									<v-list-item-title>Books</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
						<!-- <v-icon v-text="Status"></v-icon> -->
					</div>
				</v-list-item-icon>
			</v-list-item>
		</div>
	</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import authorList from '../data/authors.json';
export default {
	data() {
		return {
			authorList: authorList
		};
	},
	components: { AppHeader }
}
</script>

<style lang="scss" scoped></style>