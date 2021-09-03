/*api.openweathermap.org/data/2.5/weather?q=new york&appid=06d3b90c1e31468cadfda652976a5908*/

    async function getweather(){
       document.getElementById('box').innerHTML=null;
       var getinput=document.getElementById("input").value;
       let res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${getinput}&appid=06d3b90c1e31468cadfda652976a5908`);
       let data=await res.json();
    
       var box=document.getElementById('box');
      
       var temperature=document.createElement('div');
       var name=document.createElement('div');
       temperature.innerHTML=(data.main.temp);
       temperature.setAttribute('id','temp');
       name.setAttribute('id','temp');
       name.innerHTML=(data.name);
       
       
       var image=data.weather[0].icon;
       var icon=`http://openweathermap.org/img/w/${image}.png`;
       var createimage=document.createElement('img');
       createimage.src=icon;
       createimage.setAttribute("id","createimage");
       
       

       
       
       
       box.append(createimage,name,temperature);
       document.body.append(box);
    }
    