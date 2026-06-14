//   Html elements
//button add contact
var btn = document.getElementById("btn");
// form
var form = document.getElementById("form");
// section hero
var section = document.querySelector(".section-hero");
// button save contact
var save = document.getElementById("save");
// button cencel
var cencel = document.getElementById("cencel");
// close button
var close = document.getElementById("close");
// no-contact
var no = document.getElementById("no-contact");
// num count
var count = document.getElementById("count")
var total = document.getElementById("total")



//-----------------------------------------------------------
//Array list
var contactList = [];

//
if (localStorage.getItem("contacts") != null) {
  contactList = JSON.parse(localStorage.getItem("contacts"));

  displayContact();
}
//------------------------------------------------------------
  count.innerHTML= contactList.length;
   total.innerHTML = contactList.length;
//----------------------------------------------------------
//sweet alert show massege correct
function show(title) {
  Swal.fire({
    title: title,
    icon: "success",
    draggable: true,
  });
}
//---------------------------------------------------

//Event btn add
btn.addEventListener("click", function () {
  form.classList.toggle("d-block");
  section.classList.toggle("hidden");
});

//--------------------------------------------------
// Event save contact
save.addEventListener("click", function () {
  //
  form.classList.remove("d-block");
  section.classList.add("d-block");
  //no-contact
  no.classList.add("d-none");
  // call function addContact
  addContact();
  // show massege
  show("Contact Added Successfully");
  //
});
//---------------------------------------------------
// close form
close.addEventListener("click", function () {
  form.classList.remove("d-block");
});
//----------------------------------------------------
// cencel form
cencel.addEventListener("click", function () {
  form.classList.remove("d-block");
});
//-------------------------------------------------

// input data
var userName = document.getElementById("name"); //getter
var userPhone = document.getElementById("phone");
var userEmail = document.getElementById("email");
var address = document.getElementById("address");
var userNote = document.getElementById("note");



//------------------------------------------------

// function add info user
function addContact() {
  var info = {
    name: userName.value, //setter
    phone: userPhone.value,
    email: userEmail.value,
    address: address.value,
    note: userNote.value,

  };
  contactList.push(info);
  console.log(contactList);

  //storage data
  localStorage.setItem("contacts", JSON.stringify(contactList));
  //call function display
  displayContact();
  //call function clear
  clearInput();
}
//---------------------------------------------------

//function display Contact
function displayContact() {
  //
  var box = "";
  // for...loop
  for (let i = 0; i < contactList.length; i++) {
    box += `
                <div class="col-lg-6 ">
                 <div class="card  mt-5 bg-white">
                 <div class="d-flex gap-2 mt-3 p-3">
                  <div class="icon mx-2">
 <i class="fa-solid fa-star  star text-warning position-absolute
     ${contactList[i].fav ? '' : 'd-none'}"></i>

  <i class="fa-solid fa-heart text-danger position-absolute
     ${contactList[i].heart ? '' : 'd-none'}"></i>

                  <img src="./image/avatar-4 (1).jpg" class="rounded-5">


                   </div>
                   <div class="">
                  <h6 class="fw-bold fs-5"> ${contactList[i].name}</h6>
                  <span>
                    <i class="fa-solid fa-phone phone fs-6"></i>
                ${contactList[i].phone}
                    phone
                   </span>


                   </div>

                     </div>
                      <div class="mx-3">

                      <i class="fa-solid fa-envelope mx-2 mt-4 email"></i>
                      <span class="userEmail">
                       ${contactList[i].email}
                      </span>
                       </div>
                       <div class="mx-3 mt-2">
                      <i class="fa-solid fa-location-dot mx-2 loction"></i>
                     <span>
                     ${contactList[i].loction}
                      </span>
                      </div>
                     <div class="end p-3 d-flex   justify-content-between      aline-item-center mt-5">
                      <div>
                     <i class="fa-solid fa-phone phone fs-6 mx-2"></i>
                    <i class="fa-solid fa-envelope mx-2"></i>
                   </div>
                 <div class="d-flex gap-3 mt-2 icons">

  <i class="fa-${contactList[i].fav ? 'solid' : 'regular'} fa-star favo"
     onclick="toggleFav(${i})"></i>

  <i class="fa-${contactList[i].heart ? 'solid' : 'regular'} fa-heart heart"
     onclick="toggleHeart(${i})"></i>

  <i class="fa-solid fa-pen"></i>


                     <i class="fa-solid fa-trash "onclick="deleteContact(${i})"      id="deleted"></i>


                    </div>

                       </div>
            </div>
          </div>
        `;
  }

  document.getElementById("contactCard").innerHTML = box;
}
//--------------------------------------------------------------
// clear function
function clearInput() {
  userName.value = ""; //Setter
  userPhone.value = "";
  userPhone.value = "";
  userNote.value = "";
}
//---------------------------------------------------------------

// delete
var deleteCard = document.getElementById("deleted");

//---------------------------------------------------------

//Alert delete

function warn() {
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
});

}
//deletedContact
function deleteContact(index) {

  contactList.splice(index, 1);

  localStorage.setItem("contacts", JSON.stringify(contactList));

  displayContact();


}

//----------------------------------------------------------------------------

//
function toggleFav(index) {
  contactList[index].fav = !contactList[index].fav;


  localStorage.setItem("contacts", JSON.stringify(contactList));
  displayContact();
}
function toggleHeart(index) {
  contactList[index].heart = !contactList[index].heart;

  localStorage.setItem("contacts", JSON.stringify(contactList));
  displayContact();
}
