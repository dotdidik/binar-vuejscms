<template>
<div role="tablist">
    <nav class="navbar navbar-light" style="background-color: #563d7c">
      <a class="navbar-brand text-center" href="#">
        ADMIN
      </a>
    </nav>
    <b-list-group-item router-link to="/adminhome"> Home </b-list-group-item>
    <b-list-group-item router-link to="/adminhome/product">Product</b-list-group-item>
    <b-list-group-item router-link to="/adminhome/form" >Tambah Product</b-list-group-item>
    <b-list-group-item button>This is a button too</b-list-group-item>
    <b-card no-body class="mb-1">
      <b-card-header role="tab">
        <div href="#" aria-expanded="true" v-b-toggle.accordion1>Menu 1</div>
      </b-card-header>
      <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
            <b-list-group-item>Awesome link</b-list-group-item>
            <b-list-group-item>Action links are easy</b-list-group-item>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header role="tab">
        <div href="#" aria-expanded="true" v-b-toggle.accordion2>Menu 2</div>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
            <b-list-group-item href="#">Action links are easy</b-list-group-item>
            <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
