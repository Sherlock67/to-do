
let count = 0;
document.getElementById('add-items').addEventListener('click',function(){
    count++;
    const inputValue = document.getElementById('item-name').value;
    if(inputValue == ''){
        alert('Please Enter a Value');
     }
    else{
        const tableInput = document.getElementById('table-body');
        // const tableContent = document.getElementById('table-content');
        const tableContent = document.createElement('tr');
        tableContent.innerHTML = `
        <th>${count}</th>
        <td>${inputValue}</td>
        <td><button class="btn btn-danger delete-btn">Delete</button><button class="btn btn-success done-btn">Done</button></td>`;
       
        tableInput.appendChild(tableContent);
        //empty string after likha shsh e
        document.getElementById('item-name').value ='';
        const delButton = document.getElementsByClassName('delete-btn')
        for(const button of delButton){
            button.addEventListener('click',function(e){
                e.target.parentNode.parentNode.style.display = 'none'; 
            })
        }
        const doneButton = document.getElementsByClassName('done-btn');
        for(const button of doneButton){
            button.addEventListener('click',function(e){
                e.target.parentNode.parentNode.style.textDecoration = 'line-through';
            })
        }
    }
    
});



