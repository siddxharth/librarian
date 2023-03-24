<template>
    <div class="center">
        <v-row>
            <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4">
                <v-avatar color="primary" size="95" tile>
                    <v-img src="@/assets/logo.png"></v-img>
                </v-avatar>
                <v-text-field label="Username"></v-text-field>
                <v-text-field label="Password" type="password"></v-text-field>
                <v-btn block @click="authenticate()">
                    Login
                  </v-btn>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
            }
        },

        methods: {
            authenticate() {
                alert("Login Successful")
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>