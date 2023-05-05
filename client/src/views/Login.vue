<template>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-title class="text-center">Login</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
                <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                <v-btn type="submit" color="" block>Login</v-btn>
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
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await API.login(this.email, this.password);
          localStorage.setItem('token', response.token);
          this.$router.push({ name: 'home' });
        } catch (error) {
          console.error(error);
          alert('Invalid email or password');
        }
      },
    },
  };
  </script>
  