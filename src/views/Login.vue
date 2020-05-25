<template>
  <div class="login-main">
      <div class="rect-grey-bot"></div>
      <div class="rect-blue-bot"></div>
      <div class="rect-grey-top"></div>
      <div class="rect-blue-top"></div>
      <div class="tsmaster-reg-login-logo">
        <img src="../assets/Logo.png" alt="">
        <p>TASKMASTER</p>
      </div>
      <div class="login-form-container">
          <p class="login-txt">Login</p>
          <div class="google-login">
              <img src="../assets/google-logo.png" class="google-logo-img" alt="">
              <p class="login-with-g">Login with google</p>
          </div>          
          <form action="" class="login-form">             
              <input type="text" name="login-mail" placeholder="name@company.com" v-model="signinEmail">
              <input type="text" name="login-pass" placeholder="password" v-model="signinPassword">
              <input type="submit" value="Log in" class="login-submit" @click="signIn">
          </form>
      </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
    
     name: 'signIn',
    data() {
        return{
            signinEmail: '',
            signinPassword: ''
        }
    },
    methods: {
        signIn: function(e){
            e.preventDefault();
            firebase.auth().signInWithEmailAndPassword(this.signinEmail, this.signinPassword).then(cred =>{
                this.$router.push('/Main')
                console.log(cred.user)
                }
            )
        }
    }

}
</script>

<style>
body{
    background: #ffffff;
    margin: 0px;
    padding: 0px;
}
</style>

<style scoped>
.login-main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
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
.login-form-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.login-txt{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 65px;
    color: #565656;
    margin-bottom: 25px;
}
.google-login{
    margin-bottom: 40px;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    width: 678px;
    height: 63px;
    background: #FFFFFF;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;    
}
.google-logo-img{
    width: 50px;
    height: 50px;
    mix-blend-mode: normal;
}
.login-with-g{  
    margin-left: 0.5vw;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #6F6F6F;
}
.login-form{
    display: flex;
    flex-direction: column;    
}
.login-form input[type=text]{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #B4B4B4;
}
.login-form input{    
    width: 678px;
    height: 53px;
    border: 2px solid #D1D1D1;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 45px;
}
.login-submit{
    width: 678px;
    height: 53px;
    background: #6CA7FF;
    border-radius: 5px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #FFFFFF;
}
.tsmaster-reg-login-logo p{
    font-family: Permanent Marker;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 52px;
    color: #565656;
    margin-left: 0.8vw;
}
.tsmaster-reg-login-logo{
    position: absolute;
    top:45px;
    left: auto;
    right: auto; 
    display: flex;   
    align-items: center;
    flex-wrap: nowrap; 
}
</style>