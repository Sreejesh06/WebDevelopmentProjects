 //json.parse(nn) => converts to arr
 //json.stringyfy(nn) => converts to string
 let myLeads = [];

 let inputEL = document.getElementById("input-el");
 let ulEl = document.getElementById("ul-el");
 let inputBtn = document.getElementById("input-btn");
 let saveBtn = document.getElementById("save-btn");
 let deleteBtn = document.getElementById("delete-btn")
 let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) // now it is an Array

 if (leadsFromLocalStorage) {
     myLeads = leadsFromLocalStorage
     renderLeads(myLeads)
 }


 function renderLeads(Leads) {


     let listItems = ""; //  empty string

     for (let i = 0; i < Leads.length; i++) {
         console.log(Leads[i]);

         //  listItems += "<li><a href='' target='blank'>" + myLeads[i] + "</a></li> "; //   way1 
         listItems += `
         <li>
                <a href='' target='${ Leads[i]}'>  ${ Leads[i]}   </a>
         </li> 
         ` //   way1 


         //  ulEl.textContent += myLeads[i] + " ";
         // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "; //makes a list with html tag\     Way 2
     }
     ulEl.innerHTML = listItems; // this displays 
 }

 deleteBtn.addEventListener("dblclick", function() {
     console.log("Double CLicked... ");
     localStorage.clear()
     myLeads = []
     renderLeads(myLeads)
 })

 saveBtn.addEventListener("click", function() {

     console.log("in  Save tab that is clicked now");
 })


 inputBtn.addEventListener("click", function() {

     myLeads.push(inputEL.value);
     inputEL.value = "";

     localStorage.setItem("myLeads", JSON.stringify(myLeads)) // keys : Values


     renderLeads(myLeads);

     // to verify the localStorage
     console.log(localStorage.getItem("myLeads"));


 })