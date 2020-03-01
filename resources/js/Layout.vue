<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style scoped>
.container {
    width: 600px;
    margin: 0 auto;
}
</style>
