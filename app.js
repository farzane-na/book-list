/////////// Variables ///////////
const $=document;
const bookName=$.querySelector(".name-input");
const bookAuthor=$.querySelector(".author-input");
const bookYear=$.querySelector(".year-input");
const addBookBtn=$.querySelector(".wrapper__add-book");
const booksList=$.querySelector(".booksList");
let booksArray=[];

/////////// Functions ///////////

function addBook(){
    if(bookName.value && bookAuthor.value && bookYear){
        let newcolumn={
            id:booksArray.length+1,
            title:bookName.value,
            author:bookAuthor.value,
            year:bookYear.value
        };
        booksArray.push(newcolumn);
        setLocalStorage(booksArray);
        bookGenerator(booksArray);
        bookName.value="";
        bookAuthor.value="";
        bookYear.value="";
    }else{
        alert("Fill The All Of Fild !");
    };
};

function bookGenerator(bookItem){
    let newRow;
    let firstColumn;
    let secondColumn;
    let thirdColumn;
    booksList.innerHTML="";
    bookItem.forEach(function(book){
        newRow=$.createElement("tr");
        newRow.classList.add("rows");
        newRow.classList.add("d-flex");

        firstColumn=$.createElement("td");
        firstColumn.classList.add("column");
        firstColumn.classList.add("d-flex");
        firstColumn.innerHTML=book.title;

        secondColumn=$.createElement("td");
        secondColumn.classList.add("column");
        secondColumn.classList.add("d-flex");
        secondColumn.innerHTML=book.author;

        thirdColumn=$.createElement("td");
        thirdColumn.classList.add("column");
        thirdColumn.classList.add("d-flex");
        thirdColumn.innerHTML=book.year;

        newRow.append(firstColumn,secondColumn,thirdColumn);
        booksList.appendChild(newRow);
    });
};

function setLocalStorage(bookList){
    localStorage.setItem("book list",JSON.stringify(bookList));
};

function getLocalSorage(){
    // if(bookName.value && bookAuthor.value && bookYear){
        let localStorageBook=JSON.parse(localStorage.getItem("book list"));
        if(localStorageBook){
            booksArray=localStorageBook;
        }else{
            booksArray=[];
        }
        bookGenerator(booksArray);
    // };
};

/////////// Events ///////////

addBookBtn.addEventListener("click",addBook);
$.body.addEventListener("keyup",(event)=>{
    console.log(event)
    if(event.key==="Enter"){
        addBook();
    };
});
window.addEventListener("load",getLocalSorage);