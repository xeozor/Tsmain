<template>

  <div class="mp-main">
      <div class="mp-topnav">
          <div class="topnav-item-1">
              <ul class="ti-1">
                  <li class="add-task-btn">Add task</li>
                  <li class="title-descr">Title</li>
                  <li><input type="text" placeholder="Search.." name="search"></li>
              </ul>
          </div>
          <div class="topnav-item-2">
              <ul class="ti-2">
                  <li class="ti-2-txt">Due</li>
                  <li class="ti-2-txt">Status</li>
                  <li class="ti-2-txt">Owner</li>                  
              </ul>
          </div>
      </div>
      <div class="mp-mainpage">
        <div class="mp-planning">
            <div class="plan-title">
                <p class="plan-txt">Planning:</p>
                <div class="plan-hr"></div>
            </div> 
            <div class="plan-list">
                <div class="mp-task-item">
                    <div class="mti-1"> 
                        <div class="mti-1-child task-toogle">                        
                        </div>
                        <p class="mti-1-child task-name-txt">task name/to do</p>
                        <i class="mti-1-child far fa-edit mp-icon-edit"></i>
                    </div>
                    <div class="mti-2">
                        <p class="mti-2-child task-data-txt">17.05-19.05</p>
                        <div class="task-type mti-2-child task-type-done">Done</div>
                        <i class="mti-2-child fas fa-user-circle task-owner-icon"></i>                       
                    </div>
                </div>
                <div class="mp-task-item">
                    <div class="mti-1"> 
                        <div class="mti-1-child task-toogle">                        
                        </div>
                        <p class="mti-1-child task-name-txt">task name/to do</p>
                        <i class="mti-1-child far fa-edit mp-icon-edit"></i>
                    </div>
                    <div class="mti-2">
                        <p class="mti-2-child task-data-txt">17.05-19.05</p>
                        <div class="task-type mti-2-child task-type-done">Done</div>
                        <i class="mti-2-child fas fa-user-circle task-owner-icon"></i>                       
                    </div>
                </div>
                <div class="mp-task-item">
                    <div class="mti-1"> 
                        <div class="mti-1-child task-toogle">                        
                        </div>
                        <p class="mti-1-child task-name-txt">task name/to do</p>
                        <i class="mti-1-child far fa-edit mp-icon-edit"></i>
                    </div>
                    <div class="mti-2">
                        <p class="mti-2-child task-data-txt">17.05-19.05</p>
                        <div class="task-type mti-2-child task-type-not">Not started</div>
                        <i class="mti-2-child fas fa-user-circle task-owner-icon"></i>                       
                    </div>
                </div>                
            </div>
        </div>
        <div class="mp-today">
            <div class="today-title">
                <p class="today-txt">Today:</p>
                <hr class="today-hr">
            </div>
            <div class="today-list">  
                <div class="mp-task-item">
                    <div class="mti-1"> 
                        <div class="mti-1-child task-toogle">                        
                        </div>
                        <p class="mti-1-child task-name-txt">task name/to do</p>
                        <i class="mti-1-child far fa-edit mp-icon-edit"></i>
                    </div>
                    <div class="mti-2">
                        <p class="mti-2-child task-data-txt">17.05-19.05</p>
                        <div class="task-type mti-2-child task-type-done">Done</div>
                        <i class="mti-2-child fas fa-user-circle task-owner-icon"></i>                       
                    </div>
                </div>
                <div class="mp-task-item">
                    <div class="mti-1"> 
                        <div class="mti-1-child task-toogle">                        
                        </div>
                        <p class="mti-1-child task-name-txt">task name/to do</p>
                        <i class="mti-1-child far fa-edit mp-icon-edit"></i>
                    </div>
                    <div class="mti-2">
                        <p class="mti-2-child task-data-txt">17.05-19.05</p>
                        <div class="task-type mti-2-child task-type-progress">In progress</div>
                        <i class="mti-2-child fas fa-user-circle task-owner-icon"></i>                       
                    </div>
                </div>
                <div class="mp-task-item">
                    <div class="mti-1"> 
                        <div class="mti-1-child task-toogle">                        
                        </div>
                        <p class="mti-1-child task-name-txt">task name/to do</p>
                        <i class="mti-1-child far fa-edit mp-icon-edit"></i>
                    </div>
                    <div class="mti-2">
                        <p class="mti-2-child task-data-txt">17.05-19.05</p>
                        <div class="task-type mti-2-child task-type-review">In review</div>
                        <i class="mti-2-child fas fa-user-circle task-owner-icon"></i>                       
                    </div>
                </div>              
            </div>
        </div>          
      </div>
  </div>

</template>

<script>
export default {
    name:"mp"
};
</script>

<style scoped>
.mp-main{
    z-index: 1002;
    position: absolute;
    top:160px;
    left:23vmin;
}
.mp-topnav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width:71vw;
    height: 72px;
}
.topnav-item-1{
    width: 30vw;
    height: 100%;
}
.topnav-item-2{
    width: 23vw;
    height: 100%;
}
.ti-1{
    margin:0px;
    padding-left: 1vw;
    width:100%;
    height: 100%;
    list-style-type: none;
    display:flex;
    flex-wrap: nowrap;
    align-items:center;
    justify-content: space-around;
}
.add-task-btn{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #A7A5EF;
    border: 3px solid #A7A5EF;    
    border-radius: 4px;
    padding: 9.5px;
}
.add-task-btn:hover{
    color:#FFFFFF;
    background-color:#A7A5EF ;
}
.title-descr{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #848484;
}
.ti-1 input{
    width: 14.5vw;
    padding: 10px;
    background: #FEFEFE;
    border: 1px solid #848484;
    box-sizing: border-box;
    border-radius: 7px;
}
.ti-1 input[type=text]{
    font-size: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 21px;
    color: #848484;
}
.ti-2{
    padding-right: 1vw;
    padding-left:0px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
    margin:0px;
    width: 100%;
    height: 100%;
}
.ti-2-txt{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #848484;
}
.mp-mainpage{
    margin-top: 12px;
    padding-top: 8px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width:71vw;
    height: 814px;
}
.plan-txt{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;       
    color: #565656;
    margin-bottom: 5px; 
    margin-top:0px;   
}
.mp-planning{
    padding-right: 2vw;
    padding-left: 2vw;
    width: 100%;
    box-sizing: border-box;
}
.plan-hr{   
    border: 1px solid rgba(0, 0, 0, 0.94);
}
.plan-title{
    margin-bottom: 10px;
}
.today-txt{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;       
    color: #565656;
    margin-bottom: 5px; 
    margin-top:0px;
}
.mp-today{
    padding-right: 2vw;
    padding-left: 2vw;
    width: 100%;
    box-sizing: border-box; 
}
.today-hr{
    border: 1px solid rgba(0, 0, 0, 0.94);    
}
.today-title{
    margin-bottom: 10px;
}
.mp-task-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 42px;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 10px 10px;
    margin-bottom: 6px;
}
.task-toogle{    
    width: 20px;
    height: 20px;    
    border: 3.5px solid #C8C7C7;
    border-radius: 28px;    
}
.mti-1{
    width: 21vw;
    height: 100%;
    display: flex;
    align-items: center;    
}
.task-name-txt{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;
    color: #424242;
}
.mp-icon-edit{    
    font-size:15px;
}
.task-data-txt{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #424242;
}
.task-type-done{
   font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    background: #61BB7F;
    border-radius: 8px;
    padding-top:3px;
    padding-bottom: 3px;   
}
.mti-2{
    width: 21vw;
    height: 100%;
    display: flex;
    align-items: center;   
    justify-content: flex-end; 
}
.task-owner-icon{
    font-size:25px;
    color: #69DCF5;
}
.mti-2-child{
    margin-right: 1.5vw;
}
.mti-1-child{
    margin-left:1vw;
}
.task-type-progress{
    background:#FF6262;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;    
    border-radius: 8px;
    padding-top:3px;
    padding-bottom: 3px;    
}
.task-type-review{
    background:#5485E4;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;    
    border-radius: 8px;
    padding-top:3px;
    padding-bottom: 3px;    
}
.task-type-not{
    background:#B4B4B4;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;    
    border-radius: 8px;
    padding-top:3px;
    padding-bottom: 3px;    
}
.task-type{
    white-space: nowrap;
    width: 9.5vw;
    text-align: center;
}
</style>