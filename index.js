let carddata =[
  {
    "Title":"NewDevice_RealTime",
    "DeviceId": "#c0555fc9aef24d6538...",
    "DeviceType": "TE-RTM"
  },
  {
    "Title":"TESiteAsoc-Connect",
    "DeviceId": "#43fb7888",
    "DeviceType": "TE-RTM"
  },
  {
    "Title":"ChemicalPersona_Re",
    "DeviceId": "#f8746ec2659e4...",
    "DeviceType": "TE-RTM"
  },
  {
    "Title":"UMSADevice3",
    "DeviceId": "#43fb7888",
    "DeviceType": "TE-RTM"
  }
]
//searching

function search(input)
{
  const filtered = carddata.filter(elements => {
     for (const value of Object.values(elements)) 
     {
       if (value.toString().toLowerCase().includes(input.value.toLowerCase())) 
       return true;
     }
  })
  cardsruntime(filtered);
}
// sorting 
function sortName(item)
{
  console.log(item.innerHTML)
  document.getElementById("filterby").innerHTML = item.innerHTML;
  carddata.sort(GetSortOrder(item.innerHTML)); 
  cardsruntime(carddata);
}
// function sortDEvID()
{
  carddata.sort(GetSortOrder("DevideId")); 
  cardsruntime(carddata);
}
function GetSortOrder(prop) {    
  return function(a, b) {    
      if (a[prop] > b[prop]) {    
          return 1;    
      } else if (a[prop] < b[prop]) {    
          return -1;    
      }    
      return 0;    
  }    
}  
       

function cardsruntime(carddata)
{
let card = document.getElementById('cardblocks');
card.innerHTML='';
carddata.forEach((n) => {
 let cardcont=
`<div id="maincard"  class="card mx-2" style="width: 18rem;border-top: 5px solid #f9002c;">
 <div class="p-0 d-flex">
    <p class="title">`+n.Title+`</p>
 <div class="dot"></div>
 <p class="active green">Active</p>
 </div>
 <div class="row">
     <div class="col-sm-4">
         <h6 style="font-size: 13px;margin-left: 22px;color: gray;">Device ID</h6>
     </div>
     <div class="col-sm-8">
        <h6 id="devid" style="font-size: 13px;margin-left: 22px;color: gray;">`+n.DeviceId+`</h6>
     </div>
     <div class="col-sm-6">
       <h6 style="font-size: 13px;margin-left: 22px;color: gray;">Device Type</h6>
      </div>
      <div class="col-sm-6">
         <h6 id="devtype" style="font-size: 13px;margin-left: -29px;color: gray;">${n.DeviceType}</h6>
      </div>
  </div><br>
  <h6 style="margin-left: 22px;">ASSOCIATIONS</h6>
  <div class="row" style="margin-top: 4px;">
     <div class="col-sm-6">
         <h6 style="font-size: 13px;margin-left: 22px;color: gray;">Customer</h6>
        </div>
        <div class="col-sm-6">
           <h6 style="font-size: 13px;margin-left: -29px;color: gray;">No Associations</h6>
        </div>
  </div><br>
  <h6 style="margin-left: 22px;">ACTION UPDATES</h6>
  <div class="eyeicon">
  <svg style="margin-left: 5px;margin-top: -4px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye " viewBox="0 0 16 16">
     <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
     <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
   </svg>
 </div><br><br>
 <div class="card-footer">
   <div class=" footerElements">
     <input type="checkbox" style=" top: .8rem;scale: 1.4;margin-right: 0.7rem;" active>
     <div class="togglebutton">
     <input class="active_checkbox" type="checkbox" checked>
       <div class="slider bg_acqua_blue"></div>
       <div class="round  bg_acqua_blue"></div>
       <label class="acqua_blue" >Active</label>
     </div>
     <div class="cardicons">
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil svgpadding acqua_blue" viewBox="0 0 16 16">
         <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
       </svg>
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3 svgpadding acqua_blue" viewBox="0 0 16 16">
         <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots svgpadding acqua_blue footermenu_svg" viewBox="0 0 16 16">
         <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
       </svg>
     </div>
   </div>
   </div>
</div>`;
card.innerHTML+=cardcont;

});
}
cardsruntime(carddata);
