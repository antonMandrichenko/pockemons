import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchPockemons, fetchPock, getPock } from '../../actions'
import Pagination from "../../components/Pagination";
import './PockemonsList.css'

const PockemonsList = ({  isLoading,
                          isFetched,
                          pockemons,
                          getPockemons,
                          getPocke,
                          getPockFromLS,
                          nextPockemons,
                          previousPockemons
}) =>{

  useEffect(() =>{
    if (isFetched) {
      pockemons = localStorage.getItem('Pockemons');
    } else {
      getPockemons('https://pokeapi.co/api/v2/pokemon?offset=10&limit=10')
    }
  }, []);

  return (
    <div className={"container"}>
      <h2>Pockemons list</h2>
      <ul className={"list-group PockemonList"}>
      {isLoading
        ? <div>Loading...</div>
        : pockemons.map((item) =>
            <li className={"list-group-item"}
              key={item.name}
              onClick={localStorage.getItem(item.name)
                ? getPockFromLS.bind(null, item.name)
                : getPocke.bind(null, item.url)}>
              <NavLink to={`/${item.name}`}>
                {item.name}
              </NavLink>
            </li>
        )
      }
      </ul>
      <Pagination getPockemons={getPockemons}
                  nextPockemons={nextPockemons}
                  previousPockemons={previousPockemons}/>
    </div>
  );
};

const mapStateToProps = state => ({
  pockemons: state.getPockemons.pockemons.results,
  nextPockemons: state.getPockemons.pockemons.next,
  previousPockemons: state.getPockemons.pockemons.previous,
  isLoading: state.getPockemons.isLoading,
  isFetched: state.getPockemons.isFetched
});

const mapDispatchToProps = dispatch => ({
  getPockemons: url => dispatch(fetchPockemons(url)),
  getPocke: url => dispatch(fetchPock(url)),
  getPockFromLS: name => dispatch(getPock(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PockemonsList)
