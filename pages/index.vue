<template>
  <div class="container">
    <div class="upper-ad"></div>
<content1 class="content">
 
</content1>

    <div class="lower-ad"></div>

</div>
</template>

<script>
  import content1 from '~/components/content.vue'
export default {
  components:{content1}
}
</script>

<style scoped>
html{
  font-size: 62.5%;
}
.container {
  margin: 0 auto;
 height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
 align-items: center;
 

}
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  }
.upper-ad{
  height:10vh ;
  width: 100%;
  border: 1px solid grey;
    position: relative;
    top: 0;
background-color: black;

}
.lower-ad{
  position: fixed;
background-color: black;
  bottom: 0;
  height:10vh ;
  width: 100%;
  border: 1px solid grey;
}


</style>
