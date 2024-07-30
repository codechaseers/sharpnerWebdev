const userForm = document.querySelector("#userForm");
let users = [];

//-------------------- Handle form submit method ----------------

function handleFormSubmit(event) {
  event.preventDefault();

  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  console.log(username);
  console.log(email);
  console.log(phone);

  const userDetails = {
    username: username,
    email: email,
    phone: phone,
  };
  // users.push(userDetails);

  // Store user details in local storage
  localStorage.setItem(email, JSON.stringify(userDetails));
  // getting local storage  data using for loop
  
  event.target.username.value = "";
  event.target.email.value = "";
  event.target.phone.value = "";

  //-------------------- Display user and add button ----------------
  const userList = document.querySelector("#user-list");
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const user = JSON.parse(localStorage.getItem(key));
    users.push(user);
    // console.log(user);
  }

  if (users.length === 0) {
    const noUsersLi = document.createElement("li");
    noUsersLi.textContent = "No user details found in local storage.";
    userList.appendChild(noUsersLi);
  } else {
    users.forEach((user) => {
      console.log(user);
      const userLi = document.createElement("li");
      userLi.innerHTML = `   ${user.username},  ${user.email},  ${user.phone} <button class="delete-btn" data-email="${user.email}" >Delete</button>
            <button class="edit-btn" edit-email="${user.email}" >Edit</button>`;
      userList.appendChild(userLi);
    });

    //---------------------- Add delete method ----------------------
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        // Remove user data from local storage
        const email = e.target.getAttribute("data-email");
        localStorage.removeItem(email);

        //remove the link element
        const listItem = e.target.parentElement;
        listItem.remove();
      });
    });
    //---------------------- Add Edit method ----------------------
    const EditBtn = document.querySelectorAll(".edit-btn");
    EditBtn.forEach((button) => {
      button.addEventListener("click", function (e) {
        const email = e.target.getAttribute("edit-email");
    let usergetData=localStorage.getItem(email);
        usergetData=JSON.parse(usergetData)
        const listItem = e.target.parentElement ;
     
        listItem.remove()
        event.target.username.value = usergetData.username;
        event.target.email.value = usergetData.email;
        event.target.phone.value = usergetData.phone;
        
      });
    });
  }
}
 

// module.exports = handleFormSubmit;  this export for only sharpner
