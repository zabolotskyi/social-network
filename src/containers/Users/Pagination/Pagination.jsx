import React from 'react';

import styles from './Pagination.module.css';

const Pagination = props => (
  <div className={styles.pagination}>
    <div className={styles.pagination_navigation}>
      <div>
        <button
          className={styles.pagination_button}
          disabled={props.currentPage === 1}
          onClick={() => props.onSetCurrentPage(props.currentPage - 1)}
        >
          Previous
        </button>
      </div>
      <div>
        <input
          className={styles.page_input}
          type="number"
          value={props.currentPage}
          min="1"
          max={props.pagesCount}
          onChange={event => props.onSetCurrentPage(Number(event.target.value))}
        />
        <span>of {props.pagesCount}</span>
      </div>
      <div>
        <button
          className={styles.pagination_button}
          disabled={props.currentPage === props.pagesCount}
          onClick={() => props.onSetCurrentPage(props.currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
    <div className={styles.search_page}>
      <button
        className={styles.pagination_button}
        onClick={props.onLoadUsers}
      >
        Search
      </button>
    </div>
  </div>
);

export default Pagination;
