import React from 'react';
import { connect } from 'react-redux';
import NoLogin from '../../components/NoLogin';
import Swal from 'sweetalert2'
import {addBalance} from '../../actions/'

const  Deposit = props => {
    const {myUser} = props;
    if(!myUser.email) return <NoLogin/>
    let buttons = props.coins.map(coin => {
        const img ="/img/"+ coin.logo;
        return (
            <div className="col-6" key={coin.simbol}>
                <button className="btn-lg btn-light mb-1" style={{"width":"100%", "height":"150px"}}
                    onClick={() => deposit_coin(coin)}
                > 
                    <img src={img} width="50px" alt="coin_logo" className="m-1"/>
                    {coin.name}
                </button> <br/>
            </div>
        )
        
    });
    const deposit_coin = async (coin) => {
        const { value} = await Swal.fire({
            title: 'Depositar '+ coin.name,
            showCancelButton: true,
            input: 'number',
            inputLabel: 'Cantidad',
            inputValidator: (value) => {
              if (!value) {
                return 'Cantidad no válida'
              }
            }
        })

        if (value) {
            props.addBalance({
                email: props.myUser.email,
                simbol: coin.simbol,
                value
            })
            Swal.fire(`Has depositado ${value} ${coin.simbol}`)
        }
        

    }
    return (
        <div className="container">
            <h1 className="mb-5">Depositar cripto</h1>
            <div className="text-center container row">
                {buttons}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
      myUser : state.myUser,
      coins: state.backend.coins

    }
}

const mapDispatchToProps = {
    addBalance,
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Deposit)