import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getMovies } from './gallery';
const getMovies = getMovies();

const container = document.getElementById('pagination');

function makePaginationOptions(totalResults = 10000) {
  return {
    totalItems: totalResults,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
}

const options = makePaginationOptions();

export const pagination = new Pagination(container, options);

pagination.on('afterMove', updateMoviesList);

function updateMoviesList(event) {
  const currentPage = event.page;

  console.log('currentPage -->', currentPage);

  getMovies(currentPage);
}