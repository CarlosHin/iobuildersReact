import React from 'react';
import { connect } from 'react-redux';
import NoLogin from '../../components/NoLogin';


const  Balance = props => {
    const {myUser, myBalance,coins} = props;
    if(!myUser.email) return <NoLogin/>

    let balance = coins.map(coin => {
        const name= coin.name;
        const simbol= coin.simbol;
        let myAmmount = myBalance.find(el => el.simbol === simbol);
        const spot= myAmmount ? myAmmount.ammount : 0;
        const logo = coin.logo;
        const value = myAmmount ? myAmmount.ammount * coin.dollarValue: 0;
        return {
            name,
            simbol,
            spot,
            logo,
            value
        }
        
    });
    balance = balance.sort((a,b) => b.value - a.value);
    const rows = balance.map(coin => {
        const img ="/img/"+ coin.logo;
        return  (
            <tr key={coin.simbol}>
                <th scope="row"><img src={img} className="m-3" width="20px" alt="coin_logo"/>{coin.simbol}</th>
                <td className="p-3">{coin.name}</td>
                <td className="p-3">{coin.spot}</td>
                <td className="p-3">{coin.value} $</td>
            </tr>
        )
    });
    return (
        <>
            <table className="table container">
                <thead>
                    <tr>
                    <th scope="col">Simbol</th>
                    <th scope="col">Crypto</th>
                    <th scope="col">Spot</th>
                    <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    )
}


const mapStateToProps = state => {
    return {
      myUser: state.myUser,
      myBalance: state.myUser.balance,
      coins: state.backend.coins
    }
  }

  
export default connect(mapStateToProps,null)(Balance)