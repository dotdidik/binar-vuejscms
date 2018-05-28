<template>
<div role="tablist">
    <div class="header">
        Admin
    </div>
    <b-list-group-item router-link to="/adminhome"> Home </b-list-group-item>
    <b-list-group-item router-link to="/adminhome/product">Product</b-list-group-item>
    <b-list-group-item router-link to="/adminhome/form" >Contoh form</b-list-group-item>
    <b-list-group-item button>This is a button too</b-list-group-item>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1>Menu 1</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
            <b-list-group-item>Awesome link</b-list-group-item>
            <b-list-group-item>Link with active state</b-list-group-item>
            <b-list-group-item>Action links are easy</b-list-group-item>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info">Menu 2</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
            <b-list-group-item href="#" active>Link with active state</b-list-group-item>
            <b-list-group-item href="#">Action links are easy</b-list-group-item>
            <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion3 variant="info">Menu 3</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
            <b-list-group-item href="#" active>Link with active state</b-list-group-item>
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
