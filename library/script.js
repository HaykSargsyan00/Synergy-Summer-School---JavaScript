let bookid = 1;
function CreateNewBook(title,author,pageCount,content){
   	this.id = bookid;
   	this.title = title;
   	this.author = author;
   	this.pageCount = pageCount;
   	this.content = content;
   	this.taken = false;
   	bookid++;
   	
}

function CreateNewAuther(name,data_birthday){
	return {
			 name,
			 data_birthday,
			 books:[]
		   }
}

function Employee(){
	
}

function CreateNewLibrary(){
	this.authors = [],
	this.books = [],
	this.takenBooks = [],
	this.registerBook = registerBook;
	this.getAllAuthors = getAllAuthors
	this.getBooksOfAuthor = getBooksOfAuthor;
	this.authorReport = authorReport; 
	this.searchBookBycontent = searchBookBycontent;
	this.searchBookById = searchBookById;
	this.markBookAsTaken = markBookAsTaken;
	this.remuveFromTakenBooks = remuveFromTakenBooks;
	this.takeBook = takeBook;
	this.returnBook = returnBook;
	this.getAllTakenBooks = getAllTakenBooks;



	/*---------------------------------Function Declaration---------------------------------*/
	/*nayel*/
   	function registerBook(book){
   		if( this.authors.includes(book.author) ){
   			this.books[book.author].push(book);
   		} else {
   			this.books[book.author] = [book];
   			this.authors.push(book.author);
   		}
   	}

   	function getAllAuthors(){
   		for(i in this.authors){
   			console.log(this.authors[i]);
   			/*Vonca linum tpum@?*/
   		}
   	}

   	function getBooksOfAuthor(author_name){
   		if(author_name in this.books){
   			for(let i in this.books[author_name]){
   				console.log(this.books[author_name][i]);
   			}
   		}
   	}

   	function authorReport(){
   		for(i in this.authors){
   			author = this.authors[i];
   			console.log(author.name);
   			console.log(this.books[name].length);
   		}
   	}

   	function searchBookBycontent(contentText){
   		let books = [];
   		contentText = contentText.toLowerCase();

   		for(let auther in this.books ){
   			
   			let authorBooks = this.books[author];
			
			for( book in authorBooks){
				
				let bookContent = authorBooks[book].content.toLowerCase();
				
				if(bookContent.indexOf(contentText) >= 0 ){
					books.push(authorBooks[book]);
				}

			}
		}

		if(books.length == 0){
			console.log('there are no such book');
			return null;
		}

		return books;
   	}

   	function searchBookById(bookId){
   		for(let auther in this.books ){
   			
   			let authorBooks = this.books[author];
			
			for( bookIndex in authorBooks){

				if( bookId == authorBooks[bookIndex].id ){
					return authorBooks[bookIndex];
				}

			}
		}
		return null;
   	}

   	function markBookAsTaken(book){
   		book.taken = true;
   		this.takenBooks[book.id] = book;
   	}

   	function remuveFromTakenBooks(book){
   		this.takenBooks.splice(book.id,1);
   		book.taken = false;
   	}

   	function takeBook(bookId){
   		book = this.searchBookById(bookId);
   		if(book.length){
   			console.log('Ther are no book with such id');
   		} else if(book.taken === true){
   			console.log('Sorry this book already taken')
   		} else {
   			this.markBookAsTaken(book);
   			return book;
   		}

   		return null;
   	}

   	function returnBook(bookId){
   		let book = this.takenBooks[bookId];
   		if( book !== undefined ){
   			this.remuveFromTakenBooks(book);
   		}
   	}

   	function getAllTakenBooks(){
   		return this.takenBooks;
   	}

}

library = new CreateNewLibrary();
author = new CreateNewAuther('Hayk',2000);
book1 = new CreateNewBook('a',author,455,"Hello World");
book2 = new CreateNewBook('a',author,455,"Hello Everyone");
library.registerBook(book1);
library.registerBook(book2);
