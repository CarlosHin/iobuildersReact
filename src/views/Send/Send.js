import React from 'react';
import { connect } from 'react-redux';
import NoLogin from '../../components/NoLogin';
import Swal from 'sweetalert2'
import {addBalance, sendCoins} from '../../actions/'
import {showError} from '../../utils/'


const  Send = props => {
    const {myUser, myBalance} = props;
    if(!myUser.email) return <NoLogin/>
    let buttons = props.coins.map(coin => {
        const img ="/img/"+ coin.logo;
        return (
            <div className="col-6" key={coin.simbol}>
                <button className="btn-lg btn-secondary mb-1" style={{"width":"100%", "height":"150px"}}
                    onClick={() => send_coin(coin)}
                > 
                    <img src={img} width="50px" alt="coin_logo" className="m-1"/>
                    {coin.name}
                </button> <br/>
            </div>
        )
        
    });
    const send_coin = async (coin) => {
        const { value: formValues } = await Swal.fire({
            title: 'Enviar ' + coin.simbol,
            html:
              'Email: <input id="email" class="swal2-input">' +
              'Cantidad: <input id="value" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
              return {
                myEmail: myUser.email,
                email: document.getElementById('email').value,
                value: document.getElementById('value').value,
                simbol: coin.simbol
              }
            }
        });
        const check = checkSend(formValues);
        if(!check.error){
            console.log("Se envia")
            props.sendCoins(formValues)
            Swal.fire(`Has enviado ${formValues.value} ${coin.simbol} a ${formValues.email}`)
        }else{
            showError(check.msg);
        }
    }
    const checkSend = data =>{
        if(data.email === myUser.email){
            return {
                error: true,
                msg: "Mismo email"
            }
        }
        let user = props.users.find(el => el.email === data.email)
        if(!user){
            return {
                error: true,
                msg: "Email no encontrado"
            }
        }
        console.log("user", user, data.simbol,data.value)
        if(!myBalance.find(el => el.simbol === data.simbol && el.ammount >= data.value)){
            return {
                error: true,
                msg: "Cantidad insuficiente de " + data.simbol
            }
        }
        return { error: false }
    }
    return (
        <div className="container">
            <h1 className="mb-5">Enviar cripto</h1>
            <div className="text-center container row">
                {buttons}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
      myUser : state.myUser,
      myBalance: state.myUser.balance,
      coins: state.backend.coins,
      users: state.backend.users,

    }
}

const mapDispatchToProps = {
    addBalance,sendCoins
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Send)