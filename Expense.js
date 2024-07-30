console.log("hii Expense tarcker")
let expenseCotainer = document.getElementById('allExpenseContainer')
let expenseAmount = document.getElementById('expenceAmount')
let expenseDetails = document.getElementById('exampleInputPassword1')
let expenseType = document.getElementById('expanseType')


let allExpenseDetails = JSON.parse(localStorage.getItem("Expense")) || [];

// Print Method
function printCard() {
  let cardHtml = ``

  allExpenseDetails.map((item, index) => {
    cardHtml += ` <div class="card" style="width: 18rem">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title"> ${item.expenseType}</h5>
      <h6 class="card-title">₹ ${item.expanseAmount}</h6>
      <p class="card-text">
       ${item.expanseDetails}
      </p>
      <div class="device-width flex-row">
        <a href="#"   class=" deleteBtn btn btn-danger " data-index="${index} ">Delete</a>
        <a href="#" class=" editBtn btn btn-success" data-index="${index}" >Edit</a>
      </div>
    </div>
  </div>`
  })
  expenseCotainer.innerHTML = cardHtml


  // Add event listeners for delete buttons
  document.querySelectorAll('.deleteBtn').forEach(button => {
    button.addEventListener('click', (event) => {
      // console.log();
      const index = event.target.getAttribute("data-index")


      deleteExpense(index);
    });
  });

  // Add event listeners for Edit buttons
  document.querySelectorAll('.editBtn').forEach(button => {
    button.addEventListener('click', (event) => {
      // console.log();
      const index = event.target.getAttribute("data-index")


      editExpensive(index);
    });
  });
}



//Delete method
function deleteExpense(id) {

  allExpenseDetails.splice(id, 1)
  localStorage.setItem("Expense", JSON.stringify(allExpenseDetails));
  console.log(id)
  printCard()
}

//Edit Method
function editExpensive(id) {
  let selectData = allExpenseDetails[id]
  expenseAmount.value = selectData.expanseAmount;
  expenseDetails.value = selectData.expanseDetails;
  expenseType.value = selectData.expenseType;
  deleteExpense(id)

  // console.log(selectData)

}

// Handle submit method 
function handleSubmit(e) {
  expenseAmount = expenseAmount.value;
  expenseDetails = expenseDetails.value;
  expenseType = expenseType.value;

  e.preventDefault();


  console.log('Expense Amount:', expenseAmount);
  console.log('Expense Details:', expenseDetails);
  console.log('Expense Type:', expenseType);

  const expenceDetails = {
    expanseAmount: expenseAmount,
    expanseDetails: expenseDetails,
    expenseType: expenseType,
  };

  allExpenseDetails.push(expenceDetails);
  localStorage.setItem("Expense", JSON.stringify(allExpenseDetails));
  printCard()

  console.log(allExpenseDetails);
  expenseAmount=""
 

}
printCard()
// const user =  localStorage.getItem( "Expense");
// console.log(allExpanseDetails)