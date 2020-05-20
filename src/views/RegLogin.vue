<template>
  <div class="fs-main">
      <div class="rect-grey-bot"></div>
      <div class="rect-blue-bot"></div>
      <div class="rect-grey-top"></div>
      <div class="rect-blue-top"></div>
      <img class="regloginlogo" src="../assets/RegLoginLogo.png" alt="">
      <div class="reglogin-txt">
          <router-link to="/Reg">Sign in</router-link>
          <div class="or-lane">
              <hr><p class="or">or</p> <hr>
          </div>
          <router-link to="/Login">Login</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
    background-color: #ffffff;
    margin: 0px;
    padding: 0px;
}
</style>

<style scoped>
.rect-grey-bot{
    position: absolute;
    z-index: 1001;
    bottom: 0px;
    right: 0px;   
    background-image: url("../assets/rectgrey.png"); 
    width: 27px;
    height: 287px;
}
.rect-blue-bot{    
    position: absolute;
    z-index: 1000;
    bottom: 0px;
    right: 0px;
    background-image: url("../assets/rectblue.png"); 
    width: 277px;
    height: 27px;
}
.rect-blue-top{    
    position: absolute;
    z-index: 1000;
    top: 0px;
    left: 0px;
    transform: rotate(-180deg);
    background-image: url("../assets/rectblue.png"); 
    width: 277px;
    height: 27px;
}
.rect-grey-top{
    position: absolute;
    z-index: 1001;
    top: 0px;
    left: 0px;    
    transform: rotate(-180deg);
    background-image: url("../assets/rectgrey.png"); 
    width: 27px;
    height: 287px;
}
.fs-main{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
}
.regloginlogo{
    margin-left: 6vw;
    width: 40%;
    height: auto;
}
.reglogin-txt{
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 310px;
}
.or-lane{
    display: flex;    
    flex-wrap: nowrap;
}
</style>