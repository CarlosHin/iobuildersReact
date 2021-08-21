const reducer = (state,action) => {
    
    const {email,simbol, value, myEmail,name, password} = action.payload ? action.payload : {} ;
    let {backend} = state;
    let balanceCopy = [];
    switch(action.type){
        
        case 'SET_MYUSER':
            return {
                ...state,
                myUser : action.payload
            }
        case 'ADD_USER':
            backend.users.push({
                name, email, password, 
                balance: []
            })
            return {
                ...state,
                backend
            }
            
        case 'ADD_BALANCE':
            for (let i = 0; i < backend.users.length; i++) {
                const user = backend.users[i];
                let finded = false;
                if(user.email === email){
                    for (let x = 0; x < user.balance.length; x++) {
                        const coin = user.balance[x];
                        if(coin.simbol === simbol){
                            let floatAmmount =  parseFloat(coin.ammount);
                            let floatValue =  parseFloat(value);
                            coin.ammount = floatAmmount + floatValue;
                            finded = true;
                        }
                    }
                    
                    if(!finded) user.balance.push({
                        simbol, ammount: value
                    })
                    balanceCopy = user.balance;
                }
            }
            sessionStorage.setItem("backend", JSON.stringify(backend));
            return {
                ...state,
                backend: backend,
                myUser: {
                    ...state.myUser,
                    balance: balanceCopy
                }
            }

        case 'SEND_COINS':
            for (let i = 0; i < backend.users.length; i++) {
                const user = backend.users[i];
                if(user.email === myEmail){
                    for (let x = 0; x < user.balance.length; x++) {
                        const coin = user.balance[x];
                        if(coin.simbol === simbol){
                            let floatAmmount =  parseFloat(coin.ammount);
                            let floatValue =  parseFloat(value);
                            coin.ammount = floatAmmount - floatValue;
                        }
                    }
                    balanceCopy = user.balance;
                }
                if(user.email === email){
                    let finded = false;
                    for (let x = 0; x < user.balance.length; x++) {
                        const coin = user.balance[x];
                        if(coin.simbol === simbol){
                            let floatAmmount =  parseFloat(coin.ammount);
                            let floatValue =  parseFloat(value);
                            coin.ammount = floatAmmount + floatValue;
                            finded = true;
                        }
                    }
                    if(!finded) user.balance.push({
                        simbol, ammount: value
                    })
                }
            }
            sessionStorage.setItem("backend", JSON.stringify(backend));
            return {
                ...state,
                backend: backend,
                myUser: {
                    ...state.myUser,
                    balance: balanceCopy
                }
            }
            
        default: return state;
  
    }
  
  }
  export default reducer;
  