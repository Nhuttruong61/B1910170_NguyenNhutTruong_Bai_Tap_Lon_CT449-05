<template>
  <v-container>
    <v-app-bar app>
      <v-toolbar-items>
        <v-btn to="/home" text> Home</v-btn>
        <v-btn to="/add-post" text>Add Post</v-btn>
        <v-btn to="/about" text> About Pages</v-btn>
        <v-btn to="/" text @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-row>
      <v-col>
        <h1>About Us</h1>
        <p>Welcome to our website! We are a team of passionate developers dedicated to creating amazing web applications.
        </p>
        <p>Our mission is to make the web a better place by building high-quality, user-friendly web applications that
          solve real-world problems.</p>
        <h2>Our Team</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    logout() {
      localStorage.removeItem('token') // Xóa token khỏi localStorage
      this.$router.push('/login') // Chuyển hướng về trang đăng nhập
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
</style>
