const button = document.querySelector("button")
const userinput = document.querySelector("#favchap")
const mylist = document.querySelector("#list")

button.addEventListener('click', () => {
    // make sure the input is not blank before doing the following remaining tasks in this list
    if (userinput.Value == "") {
        return
    }

    // create an li element
    let newlistitem = document.createElement('li')

    // create a delete button
    let deletebutton = document.createElement('button')

    // populate the li elements textContent or innerHTML with the input
    newlistitem.textContent = userinput.value

    // populate the button textContent with an ❌
    deletebutton.textContent = '❌'

    // append the li element with the delete button
    newlistitem.append(deletebutton)

    // append the list element with the li element just created and appended with text and the delete button
    mylist.append(newlistitem)

    // add an event listener to the delete button that removes the li element when clicked
    deletebutton.addEventListener('click', () => {
        newlistitem.remove()
    })

    // send the focus to the input element
    userinput.focus();

    // change the input value to nothing or the empty string to clean up the interface for the user
    userinput.value = ""

})