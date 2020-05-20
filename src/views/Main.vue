<template>
  <div class="main"> 

        <div class="navbar-side">
            <ul class="navbar-ul">
                <li class="navbar-ul-item"><img src="../assets/Logo.png" class="logo sidevar-icon"></li>
                <li class="navbar-ul-item"><i class="fas fa-user-circle sidebar-icon"></i><p>Profile</p></li>
                <li class="navbar-ul-item"><i class="far fa-calendar-alt sidebar-icon icon-calendar"></i><p>Calendar</p></li>
                <li class="navbar-ul-item"><i class="fas fa-tasks sidebar-icon"></i> <p>Tasks</p></li>
                <li class="navbar-ul-item"><i class="fas fa-user-friends sidebar-icon icon-team"></i><p>Team</p></li>
                <li class="navbar-ul-item"><i class="fas fa-headset sidebar-icon"></i><p>Support</p></li>                              
            </ul>
        </div>

        <div class="navbar-vertical">
            <div class="nav-ver-item nvi-1">
                <p class="inbox-link">Inbox</p>
                <p class="projname-txt">Project Name<i class="far fa-edit icon-edit"></i></p>
            </div>
            <div class="nav-ver-item nvi-2">
                <p class="tskmaster-marker">TASKMASTER</p>
                <ul class="top-nav-ul">
                    <li class="active-top-nav">List</li>
                    <li>Time line</li>
                    <li>Conversation</li>                    
                    <li>Files</li>
                </ul>
            </div>
            <div class="nav-ver-item nvi-3">
                <i class="fas fa-user-plus icon-addmember"></i>
            </div>
        </div> 

       <mp></mp>

        
    </div>
</template>

<script>

import mp from "@/components/mp.vue";

export default {
    name:"Main",
    components:{
        mp
    }
};
</script>

<style>
body{
    margin:0px;
    padding: 0px;
    background-color: #F0F0F0;
}
</style>

<style scoped>
.navbar-side{   
    z-index: 1001;
    height: 100%;
    width: 6.2vmin;
    left:0;
    position: fixed;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.navbar-side:hover{
    width: 20vmin;
}
.navbar-side:hover p{
    display: block; 
}
.navbar-side:hover li{
    display: flex;
    justify-content: flex-start;
    width: 100%;
}
.navbar-side:hover .sidebar-icon{
    padding-right: 20px;
    padding-left: 20px;
}
.navbar-side:hover .logo{
    width: 55px;
    margin-right: auto;
    margin-left: auto;
}
.navbar-side p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    white-space: nowrap;
    display: none;
    color: #8A8A8A;
}
.sidebar-icon{
    color: #A0A0A0;
    font-size: 30px;   
}
.icon-team{
    font-size: 25px!important;
}
.icon-calendar{
    font-size: 32px!important;
}
.navbar-side .navbar-ul{
    list-style-type: none;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;   
    overflow: hidden;
}
.logo{
    padding-bottom: 25px;
}
.navbar-side .navbar-ul-item{
    display: flex;
    flex-wrap: nowrap;   
    align-items: center;  
    height: 40px;
    padding-top: 45px;
}

.navbar-vertical{
    z-index: 1000;
    height: 108px;
    width: 100%;
    top:0;
    position: fixed;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.nav-ver-item{
  
}
.nvi-1{
    padding-left: 80px; 
    width: 28%;    
}
.nvi-2{ 
   padding-right: 4vmax;
   padding-left: 4vmax;     
   width: 52%;         
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
}
.nvi-3{
    width: 28%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
.projname-txt{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #3C3C3C;    
}
.inbox-link{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
}
.icon-edit{
    font-size: 15px;
    margin-left: 7px;    
}
.tskmaster-marker{    
    width: 100%;
    display: flex;
    justify-content: center;
    padding-left: 160px;         
    font-family: Permanent Marker;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 52px;
    color: #6CA7FF;
    padding-left: 0px;
    margin-top: 13px;
    margin-bottom: 0px;
}
.icon-addmember{
    font-size: 20px;
    padding-right: 10px;
    padding-bottom: 15px;
    color: #A0A0A0;
}
.top-nav-ul{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;    
    list-style-type: none;
    width: 100%;
    margin-bottom: 7px;
}
.top-nav-ul li{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-right:3.4vw;
    color: #8A8A8A;    
}
.active-top-nav{
    border-bottom: 4px solid #6779D6; 
    height: 75%;
    border-radius: 2px;   
}
.mp-topnav{
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}
</style>