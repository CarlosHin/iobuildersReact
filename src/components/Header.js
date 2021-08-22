import React from 'react';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { setMyUser } from '../actions/'
import {Link} from 'react-router-dom'

const  Header = props => {
    const {myUser,myBalance,coins} = props;
    const history = useHistory();
    const log_out = () => {
        props.setMyUser({});
        history.push('/')
    }
    if(!myUser.email){
        return (
            <nav className="navbar navbar-light bg-light justify-content-between p-2 mb-5" >
                <Link to="/home">
                    <h1 className="navbar-brand">CriptoWallet</h1>
                </Link>
                <div className="form-inline">
                    <Link to="/logIn">
                        <button className="btn btn-info m-3" id="nav-logIn">
                            Iniciar Sesión
                        </button>
                    </Link>
                    <Link to="/signIn">
                        <button className="btn btn-info m-3" id="nav-signIn">
                            Registrarse
                        </button>
                    </Link>
                </div>
            </nav>  
        )
    }

    let totalBalance = 0;
    for (let i = 0; i < myBalance.length; i++) {
        const coin = myBalance[i];
        
        let searchedCoin = coins.find(el => el.simbol === coin.simbol);
        const value = coin.ammount * searchedCoin.dollarValue;
        totalBalance += value;
    }
    return (
        <nav className="navbar navbar-light bg-light justify-content-between p-2 mb-5" >
            <Link to="/home">
                    <h1 className="navbar-brand">CriptoWallet</h1>
            </Link>
            <div className="form-inline">
                <b className="m-3">
                  Balance total: { totalBalance} $
                </b>
                <button onClick={log_out} className="btn btn-danger" id="nav-logOut">
                    Cerrar Sesión
                </button>
            </div>
        </nav>   
    )
}


const mapStateToProps = state => {
    return {
      myUser: state.myUser,
      myBalance: state.myUser.balance,
      coins: state.backend.coins
    }
}
const mapDispatchToProps = {
    setMyUser,
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Header)