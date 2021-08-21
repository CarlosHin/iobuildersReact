import React, { useState,  } from 'react';
import { connect } from 'react-redux';
import Home from '../../views/Home/Home';
import { setMyUser } from '../../actions/'
import { showError } from '../../utils';

const  LogIn = props => {
    const {myUser} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const handleSubmit = event =>{
        event.preventDefault()
        log_in();
    }

    const log_in = () => {
        const user = props.users.find(el => el.email === email && el.password === password);
        if(user){
            props.setMyUser(user);
        }else{
            showError("Datos no válidos")
        }
    }


    if(myUser.email) return (<Home/>)
    return (
        <div className="container">
            <h1>Iniciar Sesión</h1>
            <form className="container" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-control"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
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
  setMyUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)