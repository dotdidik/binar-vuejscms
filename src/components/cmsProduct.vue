<template>
    <div>
        <div class="cms-content">
            <div class="col-12 d-flex">
            <div class="row">
                    <b-card class="col-md-4" v-for="post in posts" :key="post.id" :title="post.title"
                            :img-src="post.categories"
                            img-fluid
                            img-alt="image"
                            img-top>
                        <p class="card-text">
                            {{ post.content }}
                        </p>
                                <button type="button" class="btn btn-outline-danger" @click="deletePost(post.id)">Delete</button>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            posts: []
        }
    },
    created() {
        this.getPost()
    },
    methods: {
        getPost(){
            return axios.get('http://reduxblog.herokuapp.com/api/posts?key=didik')
            .then(response => {
                this.posts = response.data
                console.log(response.data)
            })          
        },
        deletePost(id) {
            if(confirm('Are You Sure?')) {
              fetch(`http://reduxblog.herokuapp.com/api/posts/${id}?key=didik`, {
                method: 'delete'
              })
                .then(res => res.json())
                .then(data => {
                  alert('Article Removed');
                  this.getPost();
                })
                .catch(err => console.log(err))
            }
        },

    }
}
</script>

<style>

</style>
