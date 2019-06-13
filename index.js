function retrieveEmployeeInformation() {
  return document.querySelector('input').value 
}

function addNewElementAsLi() {
 const employee = retrieveEmployeeInformation() 
 
 document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employee}</li>`)
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener("click", function(event){
    addNewElementAsLi()
    resetInput()
  })
}

function resetInput() {
  document.querySelector('input').value = ''
}

function clearEmployeeListOnLinkClick() {
  element = document.querySelector('a')
  element.addEventListener("click", function(event) {
    document.querySelector('a') = ''
  })
}


