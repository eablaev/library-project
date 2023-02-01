//redo with class syntax 

let myLibrary = [{
    "title": "I am a robot",
    'author': 'Hank Bobsley',
    'n_of_pages':"33",
    'read_unread': true
},
{
   "title": "Totaly",
    'author': 'Dick Tator',
    'n_of_pages':"103",
    'read_unread': true
},

{
    "title": "Woopsy",
    'author': 'Lickma Bawls',
    'n_of_pages':"300",
    'read_unread': false
},

];

function Book(title,author,n_of_pages,read_unread) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.n_of_pages = n_of_pages;
  this.read_unread = read_unread;
  
}

function displayBooks(books){
    
    const table = document.getElementById('tbody');
    table.innerHTML = ''
    
    books.forEach(book => {
        let row = table.insertRow(-1);
        
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let n_of_pages = row.insertCell(2);
        let read_unread = row.insertCell(3);
        let del = row.insertCell(4);

        title.innerHTML = book.title; 
        author.innerHTML = book.author;
        n_of_pages.innerHTML = book.n_of_pages;
        
        if(book.read_unread == true){
            //console.log('we are inside '+book.read_unread)
            read_unread.innerHTML = "<td><input id ='read_unread_green' type='button' value='Read'/></td>";
            

        }

        else if(book.read_unread == false){
            //console.log('we are inside false')
            read_unread.innerHTML = "<td><input id ='read_unread_red' type='button' value='Not Read'/></td>";
            
        }

        del.innerHTML = "<td><input id ='delete' type='button' value='Delete'/></td>";

        del.addEventListener('click',function(){
            
            let rowIndex = this.parentNode.rowIndex;
            console.log('row index is '+ rowIndex)

            document.getElementById("table").deleteRow(rowIndex);

            myLibrary.splice(rowIndex-1,1)

        });

        read_unread.addEventListener('click',function(){
 
            if(book.read_unread){
                console.log(book.read_unread);
                read_unread.innerHTML = "<td><input id ='read_unread_green' type='button' value='Read'/></td>";
                book.read_unread = false;
                read_unread.innerHTML = "<td><input id ='read_unread_red' type='button' value='Not Read'/></td>";
                

            }
            else if(!book.read_unread){
                read_unread.innerHTML = "<td><input id ='read_unread_red' type='button' value='Not Read'/></td>";
                book.read_unread = true;
                read_unread.innerHTML = "<td><input id ='read_unread_green' type='button' value='Read'/></td>";
                
            }
        })
    });   
};

var form = document.getElementById("form");
var new_book = document.getElementById("new_book");

function addBookToLibrary() {
 // do stuff here
 if(form.style.display === 'none'){
    console.log("inside new book")
    form.style.display = 'block';
    
    
    form.addEventListener('submit',function(event){
       
        event.preventDefault();

        var title = document.getElementById('title');
        var author = document.getElementById('author');
        var n_of_pages = document.getElementById('n_of_pages');
        var read_unread = document.getElementById('read_unread_input');
        console.log("inside new book func "+read_unread)


        const new_book = new Book(title.value,author.value,n_of_pages.value,read_unread_input.checked)


        //check to make sure new new_book oject has data and you are not an empty obj. This debugs pushing empty ebjects on multiple clicks on new book btn
        
        if(new_book.title){
            myLibrary.push(new_book);
        }
    
        displayBooks(myLibrary)
        document.getElementById('form').reset();
       
    },true)

    
}

else {
    console.log('inside addnewbook func else statment')
    form.style.display = "none";

}
    
    
  }
new_book.addEventListener('click',function(){

    console.log('inside new book function');

    form.style.display = 'none'
    console.log(form.style.display)

    addBookToLibrary();  

});

const close_book = document.getElementById('close_book');
close_book.addEventListener('click',function(){
    console.log('inside close_book');
    form.style.display = 'none'


})


displayBooks(myLibrary)