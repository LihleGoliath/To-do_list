let list = JSON.parse(localStorage.getItem( "list"))?JSON.parse(localStorage.getItem("list")) : [ ];
function LoopArray(items){
    document.querySelector("#list").innerHTML = " ";
list.forEach(item => {  
    document.querySelector("#list").innerHTML+=`
    <div id="conTainer" class="container d-flex bg-white mx-auto my-3 rounded"
    <!-- Button trigger modal -->
    <input type="checkbox" name="check" id="check" class="fs-3 strike mt-4">
    <label for="check" class="fs-3 mx-5 mt-2">${item.text}</label>
    <button type="button" class="btn btn-primary " id="btn-modal" data-bs-toggle="modal" data-bs-target="#item${item.id}">
      edit
    </button>   
    <button type="button"  class="btn btn-danger  delete" id="${item.id}"  >delete</button>
  <p>${item.createdDate}</p>
  
  <!-- Modal -->
  <div class="modal fade" id="item${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form>
       <input type="text" name="text1" id="${item.id}" class="update" value="${item.text}" >
       <button type="submit">Update</button>
        </form>
        </div>
      </div>
    </div>
  </div>
  

    `
    console.log(list);
});
    
}
LoopArray(list);

// Add Item
const addItem = () =>{
const item = {
id : list.length + 1,
text : document.querySelector("#text").value,
createdDate : new Date().toLocaleDateString()
}

list.push(item);
localStorage.setItem("list",JSON.stringify(list));
LoopArray(list);
}

// const deleteitem = (id)=>{
//   const index =list.findIndex(item => item.id == id);
//    list.splice(index,1);
//    localStorage.setItem("list",JSON.stringify(list));
//    LoopArray(list);
//   }
document.querySelector("button").addEventListener("click", (id)=>{
  list.forEach(item => {
      const index =list.findIndex(item => item.id == id);
   if (item.id == index,button == .delete) {
    list.splice(index,1);
   }
  });
});


const allRemove = () =>{
  for (let i = 0; i < list.length; i) {
    list.pop(i);
  };  
  localStorage.removeItem("list")    
  LoopArray(list);
}


const listSorter = (e) =>{
  const direction = e.target.value;
    const sortedlist = list.sort((a, b) => {
      if (a.text < b.text) {
        return -1;
      }
       if (a.text > b.text) {
         return 1;
       }
       return 0;
     });
     if (direction === "Asc") {
      LoopArray(sortedlist);
     }else{
      LoopArray(sortedlist.reverse());
     }
  }

    document.querySelector("select").addEventListener("change",listSorter)
    
  const ItemUpdate = () =>{
    const index =list.findIndex(item => item.id == id);
    list.splice(index,0,document.querySelector('').value)
    localStorage.setItem("list",JSON.stringify(list));
    LoopArray(list);
  }
  document.querySelector("button").addEventListener("click", ItemUpdate)
  


