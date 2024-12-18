var site_name=document.getElementById('bookmark-name');
var url=document.getElementById('bookmark-url');
var rowdata=document.getElementById('rowdata');
var errorMessage = document.getElementById('error-message');
list=[];
function add(){
  var object={
       bookmark:site_name.value,
       site:url.value
    }
list.push(object);
console.log(list);
clear();
display();
}

function clear(){
    site_name.value='';
    url.value='';
} 

function display(){
var box='';
for(i=0;i<list.length;i++){
    box+=`<div class="table  w-100 border-1 d-flex justify-content-center align-items-center">
    <div class="row w-100 bg g-0 ">
        <p class="col-3 col-sm-3 fw-bold">${i+1}</p>
        <p class="col-3 col-sm-3 fw-bold ">${list[i].bookmark}</p>
       
        <button class="inner1 col-3 col-sm-3 "id="visit_url"  onclick="visit_url();"><i class="fa-solid fa-eye icon1"></i> visit</button>
        <button class=" col-3 inner  col-sm-3" id="delete_item" onclick="deleteing(${i});"><i class="fa-solid fa-trash icon2"></i> delete</button>
    </div>
</div>`}
rowdata.innerHTML=box;

}
function deleteing(index){
list.splice(index,1);
display();
}

function visit_url(){
  var site1=document.getElementById('bookmark-url').value;
  if(url)
  {
    window.open(url,'dkj');
  }
  else{
    alert("hello")
  }
}
function validateAndAdd()
 { if (name.value === '' || url.value === '' || (!url.value.startsWith('http://') && !url.value.startsWith('https://'))) { 
  errorMessage.classList.remove('d-none'); 
  return; }
   errorMessage.classList.add('d-none');
    add();
    clear();
   }
function closeErrorMessage()
 { 
  errorMessage.classList.add('d-none');
 }