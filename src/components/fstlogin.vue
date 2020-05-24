<template>
  <div class="fstlogin-main">
      <i class="fas fa-plus-circle fst-add-icon"></i>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .fstlogin-main{
    position: absolute;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgba(218, 218, 218, 0.9);
    backdrop-filter: blur(5px);
}
.fst-add-icon{
  color: rgb(124, 124, 124); 
  font-size: 140px;
}

</style>