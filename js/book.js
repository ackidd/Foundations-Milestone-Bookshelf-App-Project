/**
 * Book represents information about a book.
 * @param {string[]} authors array of the book's authors
 * @param {string} language the language the book is written in
 * @param {string[]} subject  array of book topics
 * @param {string} title title of the book
 */
function Book(authors, language, subject, title, comment) {
  this.authors = authors;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.isFavorite = false;
  this.comment = false;

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
    bookSubj.textContent = `Subjects: ${subject}`;

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
    commBox.setAttribute("maxLength", "280");

    // Open comment box on click
    commButton.addEventListener("click", () => {
      li.append(commBox, sendButton);
    });

    // Create comment element
    const commElement = document.createElement("p");
    commElement.setAttribute("id", "comments")
    li.append(commElement);

    // Add comment when send button clicked
    sendButton.addEventListener("click", () => {
      commElement.append(commBox.value);
    });

    liContent.append(bookTitle, bookAuth, bookLang, bookSubj);
    li.append(liContent);

    return li;
  };
}
