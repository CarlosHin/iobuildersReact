import React from 'react';
import { connect } from 'react-redux';
import NoLogin from '../../components/NoLogin';
import {Link} from 'react-router-dom'


const  Home = props => {
    const {myUser} = props;
    if(!myUser.email) return <NoLogin/>
    return (
        <>
            <div className="text-center container">
                <Link to="/balance">
                    <button className="btn-lg btn-primary mb-5">Ver balance</button> <br/>
                </Link>
                <Link to="/transactions">
                    <button className="btn-lg btn-primary mb-5">Ver movimientos</button> <br/>
                </Link>
                <Link to="/deposit">
                    <button className="btn-lg btn-primary mb-5">Depositar Crypto</button> <br/>
                </Link>
                <Link to="/send">
                    <button className="btn-lg btn-primary mb-5">Enviar Criptomonedas</button> <br/>
                </Link>
            </div>
        </>
    )
}


const mapStateToProps = state => {
    return {
      myUser : state.myUser
    }
  }

  
export default connect(mapStateToProps,null)(Home)