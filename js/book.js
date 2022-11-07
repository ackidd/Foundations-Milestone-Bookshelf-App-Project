/**
 * Book represents information about a book.
 * @param {string[]} authors array of the book's authors
 * @param {string} language the language the book is written in
 * @param {string[]} subject  array of book topics
 * @param {string} title title of the book
 */
function Book(authors, language, subject, title) {
  this.authors = authors;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.isFavorite = false;
  this.comment = '';
  this.numPages = Math.floor(Math.random() * 1000);
  this.category = this.numPages > 100;

  /**
   * @returns a list item representing this Book
   */
  this.render = function () {
    const li = document.createElement("li");
    li.setAttribute("id", "booksli");

    const liContent = document.createElement("ul");

    const bookTitle = document.createElement("li");
    bookTitle.textContent = `Title: ${this.title}`;

    const bookAuth = document.createElement("li");
    bookAuth.textContent = `Author(s): ${this.authors}`;

    const bookLang = document.createElement("li");
    bookLang.textContent = `Language: ${this.language}`;

    const bookSubj = document.createElement("li");
    bookSubj.textContent = `Subjects: ${this.subject}`;

    const bookPages = document.createElement("li");
    bookPages.textContent = `Pages: ${this.numPages}`;

    const bookCategory = document.createElement("li");
    bookCategory.textContent = `Category: ${this.category ? "Novel" : "Short story"}`

    const bookComment = document.createElement("li");
    bookComment.textContent = `Comment(s): ${this.comment}`;
    bookComment.setAttribute("id", "bookComment");

    

    // Create favorite button
    const favButton = document.createElement("button");
    favButton.textContent = this.isFavorite ? "❤️" : "♡";
    li.append(favButton);

    // Toggle favorite property on click
    favButton.addEventListener("click", () => {
      this.isFavorite = !this.isFavorite;
      favButton.textContent = this.isFavorite ? "❤️" : "♡";
    });

    // Create comment button
    const commButton = document.createElement("button");
    commButton.textContent = "Comment";
    li.append(commButton);

    // Create send button and comment box
    const sendButton = document.createElement("button");
    sendButton.textContent = "Send";
    const commBox = document.createElement("input");
    commBox.placeholder = "Type comment";
    commBox.setAttribute("maxLength", "280");
    
    // console.log(this.comment)

    // Open comment box on click
    commButton.addEventListener("click", () => {
      li.append(commBox, sendButton);
    });

    // Didn't do what was wanted. This create one comment element 
    // and then appends to that same one every time.
    // Create comment element
    // const commElement = document.createElement("p");
    // commElement.setAttribute("id", "comments");
    // li.append(commElement);


    // Add comment when send button clicked
    sendButton.addEventListener("click", () => {
      const commElement = document.createElement("p");
      commElement.setAttribute("id", "comments");
      this.comment = commBox.value;
      commElement.append(this.comment);
      li.append(commElement);
    });

    liContent.append(bookTitle, bookAuth, bookLang, bookSubj, 
      bookPages, bookCategory, bookComment);
    li.append(liContent);

    return li;
  };
}
