<template>
	<div>
		<AppHeader title="Members" />
		<div v-for="data in membersList">
			<v-list-item>
				<v-list-item-avatar tile>
					<v-img :src="data.img"></v-img>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title><b>{{ data.firstName }} {{ data.middleName ? data.middleName[0] + '.' : ' ' }}
							{{ data.lastName }}</b></v-list-item-title>
					<v-list-item-subtitle>
						<v-icon small>mdi-phone</v-icon> {{ data.mobileNo }}
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
									<v-icon>mdi-bookshelf</v-icon>
									<v-list-item-title>Issued Books</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</div>
				</v-list-item-icon>
			</v-list-item>
		</div>
	</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import membersList from '../data/members.json';
export default {
	data() {
		return {
			membersList: membersList
		};
	},
	components: { AppHeader }
}
</script>

<style lang="scss" scoped></style>