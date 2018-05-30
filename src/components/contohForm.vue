<template>
    <div>
        <h1>Input Product</h1>
        <div class="col-12 d-flex">
            <div class="col-md-6">
                <form @submit.prevent="addPost">
                    <div class="form-group">
						<input type="text" class="form-control" placeholder="Title" v-model="posts.title">
					</div>
                    <div class="form-group">
						<input type="text" class="form-control" placeholder="Image" v-model="posts.categories">
					</div>
                    <div class="form-group">
						<input type="text" class="form-control" placeholder="Content" v-model="posts.content">
					</div>
                    <button class="btn btn-primary" type="submit"> Simpan </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: {
        title: "",
        categories: "",
        content: ""
      }
    };
  },
  methods: {
    addPost(title, categories, content) {
      let formData = new FormData();
      formData.append("title", this.posts.title);
      formData.append("categories", this.posts.categories);
      formData.append("content", this.posts.content);
      return axios
        .post("http://reduxblog.herokuapp.com/api/posts?key=didik", formData)
        .then(res => {
          console.log(res)
          alert('Article Added')
        });
    }
  }
};
</script>

<style>
</style>
