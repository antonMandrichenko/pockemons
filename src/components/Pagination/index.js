import React from 'react';

const Pagination = ({ getPockemons,
                      nextPockemons,
                      previousPockemons
}) =>{

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item  ${previousPockemons ? null : 'disabled'}`}
            onClick={previousPockemons ? getPockemons.bind(null, previousPockemons) : null}>
          <a className="page-link"
             href="#">
            Previous
          </a>
        </li>
        <li className="page-item"
            onClick={getPockemons.bind(null, nextPockemons)}>
          <a className="page-link"
             href="#">
            Next
          </a>
        </li>
      </ul>
     </nav>

  );
};

export default Pagination
