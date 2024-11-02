const getSubmitButton=document.getElementById('submit')
getSubmitButton.addEventListener('click',()=>{
    let firstName=document.getElementById('firstName').value;
	let secondName=document.getElementById('lastName').value;

	alert(firstName+" "+secondName)
});