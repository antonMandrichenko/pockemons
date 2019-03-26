import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getPock } from '../../actions'
import {NavLink} from "react-router-dom";

const Pockemon = ({ pockemon,
                    isLoad,
                    getPockFromLS
}) =>{

  const parsedUrl = new URL(window.location.href);
  const pockName = parsedUrl.pathname.slice(1);

  useEffect(() => {
    getPockFromLS(pockName)
  }, []);

  return (
    <div className={"container"}>
      <nav className={"navbar navbar-light bg-light"}>
        <NavLink to='/' className={"nav-link"}>
          To pockemons list
        </NavLink>
      </nav>
      {isLoad
        ? <div>Loading ... </div>
        : !pockemon
          ? null
          : <div>
            <h2>Name: {pockemon.name}</h2>
            <img  src={pockemon.sprites.back_default} alt={"back"}/>
            <img src={pockemon.sprites.front_default} alt={"front"}/>
            <ul>
              <li className={"list-group-item active"}>
                Abilities:
              </li>
              {pockemon.abilities.map((ability) =>
                <li className={"list-group-item"}
                    key={ability.ability.name}>
                  <strong>Name: </strong> {ability.ability.name}
                  <strong> Slot: </strong> {ability.slot}
                </li>
              )}
            </ul>
            <ul>
              <li className={"list-group-item active"}>
                Moves:
              </li>
              {pockemon.moves.map((item) =>
                <li className={"list-group-item"}
                    key={item.move.name}>
                  <strong>{item.move.name}</strong>
                </li>
              )}
            </ul>
            <ul>
              <li className={"list-group-item active"}>
                Moves:
              </li>
              {pockemon.stats.map((item) =>
                <li className={"list-group-item"}
                    key={item.stat.name}>
                  <strong>{item.stat.name} </strong>
                  Base stat: {item.base_stat}
                </li>
              )}
            </ul>
          </div>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  pockemon: state.getPockemon.pockemon,
  isLoad: state.getPockemon.isLoading
});

const mapDispatchToProps = dispatch => ({
  getPockFromLS: name => dispatch(getPock(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pockemon)
