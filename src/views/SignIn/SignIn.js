import React, { useState,  } from 'react';
import { connect } from 'react-redux';
import Home from '../../views/Home/Home';
import { setMyUser,addUser } from '../../actions/'
import { showError } from '../../utils';

const  SignIn = props => {
    const {myUser} = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const handleSubmit = event =>{
        event.preventDefault()
        sign_in();
    }

    const sign_in = () => {
        const exist = props.users.find(el => el.email === email);
        if(!name || !email || !password){
            showError("Por favor, rellena todos los datos del formulario");
            return;
        }
        if(exist){
            showError("El usuario ya existe");
            return;
        }
        props.addUser({name,email,password});
        props.setMyUser({name,email,password, balance:[],transactions: []});
    }


    if(myUser.email) return (<Home/>)
    return (
        <div className="container">
            <h1>Registrarse</h1>
            <form className="container" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name"
                value={name} 
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button id="submit" type="submit" className="btn btn-primary">Registrarse</button>
            </form>

            
        </div>
    )
}


const mapStateToProps = state => {
    return {
      myUser : state.myUser,
      users: state.backend.users
    }
  }

const mapDispatchToProps = {
  setMyUser,addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)