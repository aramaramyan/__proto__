"use strict";

// Write Pagination object that will get an array and pageSize, then will return the following.

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const Pagination = {
  book: [],
  currentPage: 0,
  init(arr, pageSize) {
    if (!Array.isArray(arr)) {
      return console.log("The first argument of function mut be an array!");
    } else  if(typeof(pageSize) !== "number" || isNaN(pageSize)) {
      return console.log("The second argument of function must be a number!");
    } else if (pageSize > arr.length) {
      return console.log("The pageSize should be less than arr.length");
    }

    for(let i = 0; i < arr.length; i += pageSize) {
      Pagination.book.push(arr.slice(i, i + pageSize));
    }
  },
  getPageItems() {
    return console.log(`Page: ${Pagination.currentPage + 1} |`, Pagination.book[Pagination.currentPage]);
  },
  nextPage() {
    Pagination.currentPage++;

    if(Pagination.currentPage === Pagination.book.length) {
      Pagination.currentPage = 0;
    }

    return Pagination;
  },
  prevPage() {
    Pagination.currentPage--;

    if(Pagination.currentPage < 0) {
      Pagination.currentPage = Pagination.book.length - 1;
    }

    return Pagination;
  },
  firstPage() {
    Pagination.currentPage = 0;

    return Pagination;
  },
  lastPage() {
    Pagination.currentPage = Pagination.book.length - 1;

    return Pagination;
  },
  goToPage(pageNum) {
    Pagination.currentPage = pageNum - 1;
    return Pagination;
  }
}

Pagination.init(alphabetArray, 4);
Pagination.getPageItems(); // Page: 1 | [ 'a', 'b', 'c', 'd' ]
Pagination.nextPage();
Pagination.getPageItems(); // Page: 2 | [ 'e', 'f', 'g', 'h' ]
Pagination.nextPage().prevPage().nextPage();
Pagination.getPageItems() // Page: 3 | [ 'i', 'j', 'k', 'l' ]
Pagination.firstPage();
Pagination.getPageItems(); // Page: 1 | [ 'a', 'b', 'c', 'd' ]
Pagination.lastPage();
Pagination.getPageItems(); // Page: 7 | [ 'y', 'z' ]
Pagination.goToPage(5);
Pagination.getPageItems(); // Page: 5 | [ 'q', 'r', 's', 't' ]