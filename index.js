// --------------------------
//#region Initialization
// --------------------------
const bookshelfElement = document.querySelector(".books");
const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);
bookshelf.render();

//#endregion Initialization

// --------------------------
//#region Favorite Feature
// --------------------------
const favCount = document.querySelector(".favCount");
const updateBtn = document.querySelector(".favUpdateBtn");

updateBtn.addEventListener("click", () => {
  favCount.textContent = bookshelf.countFavoriteBooks();
});

//#endregion Favorite Feature

// --------------------------
//#region Searching
// --------------------------
const searchInput = document.querySelector("nav input");
const searchBtn = document.querySelector(".searchBtn");

// NOTE: This only searches through the titles of the books!
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  modQuery = query.replace(/the/g, "");
  // console.log(modQuery);
  const searchFn = (b) => b.title.toLowerCase().includes(modQuery);
  bookshelf.filterVisibleBooks(searchFn);
});

//#endregion Searching

// --------------------------
//#region Sorting
// --------------------------
const sortBy = document.querySelector(".sortBy");

// NOTE: This only sorts by the titles of the books!
sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  let sortFn;

  if (query === "titleaz") {
    sortFn = (a, z) => a.title.localeCompare(z.title);
  } else if (query === "titleza") {
    sortFn = (a, z) => z.title.localeCompare(a.title);
  }

  bookshelf.sortVisibleBooks(sortFn);
});

//#endregion Sorting

// --------------------------
//#region Adding Books
// --------------------------
const addTitle = document.querySelector("#title");
const addAuthor = document.querySelector("#author")
const addLanguage = document.querySelector("#language")
const addSubjects = document.querySelector("#subjects")
const addBtn = document.querySelector(".addBtn")

addBtn.addEventListener("click", () => {
  const query = new Book(
    [addAuthor.value],
    addLanguage.value,
    [addSubjects.value],
    addTitle.value,
  )
 
  bookshelf.addBook(query);
  bookshelf.render();
})

//#endregion Adding Books



