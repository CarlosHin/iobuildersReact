import React from 'react';
import { connect } from 'react-redux';
import NoLogin from '../../components/NoLogin';


const  Transactions = props => {
    const {myUser, myTransactions,coins} = props;
    if(!myUser.email) return <NoLogin/>

    console.log(myTransactions)
    const rows = myTransactions.map((transaction,i) => {
        const classAmmount = transaction.type === "IN" ? "p-3 bg-success" : "p-3 bg-danger"
         const coin = coins.find(el => el.simbol === transaction.simbol);
        const img ="/img/"+ coin.logo;
        return  (
            <tr key={i}>
                <td className="p-3"><img src={img} className="m-3" width="20px" alt="coin_logo"/>{transaction.simbol}</td>
                <td className={classAmmount}>{transaction.ammount}</td>
                <td className="p-3">{transaction.from || transaction.to}</td>
            </tr>
        )
    });
    return (
        <>
            <table className="table container">
                <thead>
                    <tr>
                        <th scope="col">Cripto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">De/Para</th>
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
      myTransactions: state.myUser.transactions,
      coins: state.backend.coins
    }
  }

  
export default connect(mapStateToProps,null)(Transactions)