let name=document.getElementById("name")
let much=document.getElementById("much")
let muchusa=document.getElementById("muchusa")
let muchsyr=document.getElementById("muchsyr")
let select=document.getElementById("sel")
let btnserch=document.getElementById("btnserch")
let btninput=document.getElementById("btninput")
let inp=document.getElementById("inp")

var numbe=0



let lis=[
  
  {"name":"1",
  "much":2.5316455696202,
  "id":3
},
  {
  "name":"2",
  "much":2.5316455696202,
  "id":3
},
{
  "name":"3",
  "much":1.561814345991,
  "id":0
},{
  "name":"3",
  "much":0.7172995780590,
  "id":0
},{
  "name":"4",
  "much":2.5316455696202,
  "id":0
},{
  "name":"5",
  "much": 2.5316455696202,
  "id": 0
}
  
]




let c=localStorage.getItem("lis")
let vc=JSON.parse(c)
let list=vc ??lis

function stor(list) {
  let cv = JSON.stringify(list)
localStorage.setItem("lis", cv)
search(list)
  }

function search(list) {

select.innerHTML=""
list.forEach((elemen,index)=>{
  let yu=elemen.name
  elemen.name=yu.trim().replace(/\s+/g, " ")
  
  elemen.id=index
  select.innerHTML +=`<option  value="${elemen.id}">${elemen.name}</option>`
})

}


search(list)


btnserch.addEventListener("click",()=>{
  
  
  

  let x=select.value
  name.innerText=list[x].name
  
  
  muchsyr.innerText=`${Math.trunc(Number(list[x].much)*Number(numbe))}SYR`
  muchusa.innerText=`${list[x].much.toFixed(3)}USA`


  
})




var modal = document.getElementById("myModal1");
var btn = document.getElementById("openModalBtnw");
var span = document.getElementsByClassName("close")[0];
var submitBtn = document.getElementById("submitBtn");

// عند الضغط على الزر، افتح النافذة المنبثقة
btn.onclick = function() {
  document.getElementById("kk").style.display = "none"

  modal.style.display = "block";
  document.getElementById("input1").value=""
  document.getElementById("input2").value=""

  

}

// عند الضغط على زر الإغلاق، أغلق النافذة المنبثقة
span.onclick = function() {
  modal.style.display = "none";
    document.getElementById("kk").style.display = "block"

}





// عند الضغط على زر الإرسال
submitBtn.onclick = function() {
  
   var input1Value = document.getElementById("input1").value;
  var input2Value = document.getElementById("input2").value;

  if (input1Value.trim()==="" || input2Value.trim() === "") {
    aler("الحقل فارغ","يرجى ملأ القائمة")
      } else {
      
        let ask=false
        let yoy=input1Value
        
        for(elemet of list){
        
          
          if (elemet.name.trim() ==yoy.trim().replace(/\s+/g, " ")){
        
            ask=false
            aler("عنصر موجود","ادخل اسم آخر")
            break
    

          }else{
        
            ask=true
            
          }
        }
        
        if (ask){
          
                    document.getElementById("kk").style.display = "block"
        list.push({
    "name": `${input1Value}`,
    "much": Number(input2Value),
    "id": list.length
  })

          stor(list)
          modal.style.display = "none"


  
        
          

  
  }

      }   
          }
        
    
        
        

  

  
  


btninput.onclick = function(){
        if (inp.value=="") {
        aler("خطأ بالبحث","يرجى ملأ الحقل")
      } else {
        let y=inp.value
        
        
        for(element of list){
          
          
          if (element.name.trim()
          ==y.trim().replace(/\s+/g, " ")){
            let x=element.id
            name.innerText=list[x].name.trim()
          muchsyr.innerText = `${Math.trunc(Number(list[x].much)*Number(numbe))}SYR`
          muchusa.innerText = `${list[x].much.toFixed(3)}USA`
          break
    

          }else{
                        name.innerText=""
                                  muchsyr.innerText=""
          muchusa.innerText =""
  
          }
          

  
  }

            
          }
        }
  
  
  
  del.onclick = function(){

    let oi=name.innerText
        if (oi=="نا") {
        aler("خطأ","اختر عنصر اولاً")
      } else {
        if (list.length>3){
    
        
        
        for(element of list){
          
          
          if (
            element.name.trim()== oi.trim() ){
            let x=element.id
            list.splice(x,1)
          search(list)
          stor(list)
 
          name.innerText=""
          muchusa.innerText=""
          muchsyr.innerText=""
         break
        
          
    

          
          

  
  }}}else{
            aler("عذرا","لا يمكن حذف اخر 3 عناصر ")
            
          }

            

        }
  
  
  
  }
  
  








      function saveValue12() {
        
        let el=document.getElementById("vvl").value
         
        



       
        if (el.trim() === ""){
          aler("لا قيمة", "الرجاء أدخال سعر")
        } else {
          
          
          
          
        for (element of list) {
     
        if (element.name.trim() == name.innerText.trim()){
          
        
        element.much = Number(el)
        
       stor(list)
       
       
       
     }
     
     
     
     
   }
   
 }
          
          
          document.getElementById("vvl").value=""
         
          document.getElementById("p12").style.display = "none"; 

          document.getElementById("kk").style.display = "block"
          
        }
      
  
  
  
  
  
  
  
  
    prom.onclick = function() {
      
      let oi = name.innerText
      if (oi == "") {
        aler("خطأ", "اختر عنصر اولاً")
      } else {
      
        
        document.getElementById("pe").innerText = name.innerText
        
      



        

        
        document.getElementById("kk").style.display = "none"

        
        document.getElementById("p12").style.display = "block"; 
        
        
        
       
      
      }
    }
    
    
    
    
