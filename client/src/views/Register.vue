<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="6" md="4">
                <v-card>
                    <v-card-title class="text-center">Register</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="register">
                            <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
                            <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                            <v-text-field v-model="confirmPassword" label="Confirm Password" type="password"
                                required></v-text-field>
                            <v-btn type="submit" block>Register</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import API from '../api.user';

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
        };
    },
    methods: {
        async register() {
            try {
                if (this.password !== this.confirmPassword) {
                    alert('Passwords do not match');
                    return;
                }
                const response = await API.register( this.email, this.password);
                localStorage.setItem('token', response.token);
                this.$router.push({ name: '/' });
            } catch (error) {
                console.error(error);
                alert('An error occurred while registering');
            }
        },
    },
};
</script> 