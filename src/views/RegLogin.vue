<template>
  <div class="fs-main">
      <div class="rect-grey-bot"></div>
      <div class="rect-blue-bot"></div>
      <div class="rect-grey-top"></div>
      <div class="rect-blue-top"></div>
      <div class="taskmaster-txt">TASKMASTER</div>
      <img class="regloginlogo" src="../assets/RegLoginLogo.png" alt="">
      <div class="reglogin-txt">
          <router-link to="/Reg" class="reg-link">Sign in</router-link>
          <div class="or-lane">
              or
          </div>
          <router-link to="/Login" class="login-link">Login</router-link>
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
.taskmaster-txt{
    position: absolute;
    right: 1vw;
    top: 0.5vw;
    font-family: Permanent Marker;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 52px;
    color: #565656;
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
    text-align: center;
    width: 40%;
    height: 310px;
}
.or-lane{
    display: flex;    
    align-items: center;
    justify-content: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 65px;
    color: #565656;
}
.or-lane::before, .or-lane::after {
    content: '';
    flex: 1;
    height: 0px;
    border: 1px solid #000000;
}
.or-lane::before {
    margin-right: .25em;
}
.or-lane::after {
    margin-left: .25em;
}
.reg-link{
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 96px;
    line-height: 131px;
    color: #565656;
    text-decoration: none;
}
.login-link{
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 96px;
    line-height: 131px;
    color: #565656;
    text-decoration: none;
}
</style>