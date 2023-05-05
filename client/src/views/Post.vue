<template>
    <v-container>
        <v-app-bar app>
            <v-toolbar-items>
                <v-btn to="/home" text> Home</v-btn>
                <v-btn to="/add-post" text>Add Post</v-btn>
                <v-btn to="/about" text> About Pages</v-btn>
                <v-btn to="/" text> Logout</v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-row no-gutters>
            <v-col sm="8" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img :src="`/${post.image}`"></v-img>
                    <v-card-action class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color="primary">{{ post.category }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn color="success" text
                                    :to="{ name: 'edit-post', params: { id: post._id } }">Edit</v-btn>
                                &nbsp;
                                <v-btn color="red" text @click="removePost(post._id)">Delete</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-action>
                    <v-card-subtitle class="headline">
                        <h3>{{ post.title }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>{{ post.content }}</p>
                        <p>{{ post.created }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <div class="fb-comments fbsize" data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
            data-width="1120" data-numposts="5"></div>
    </v-container>
</template>


<script>
import API from '../api';

export default {
    data() {
        return {
            post: {},
        };
    },
    async created() {
        const response = await API.getPostByID(this.$route.params.id);
        this.post = response;
    },
    methods: {
        async removePost(id) {
            const response = await API.deletePost(id);
            this.$router.push({ name: 'home', params: { message: response.message } });
        }
    }
};

window.fbAsyncInit = function () {
    FB.init({
        appId: 205702625261823,
        xfbml: true,
        version: 'v11.0'
    });
    FB.Event.subscribe('xfbml.render', function (response) {
        setTimeout(function () {
            FB.XFBML.parse();
        }, 100);
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
<style>
.fbsize {
    width: 100%;
    margin-top: 50px;
}
</style>