import React from 'react';
import Title from '../components/Title';
import Container from '../components/Container';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {
  BrowserRouter as ReactRouter,
  Route,
  Link
} from 'react-router-dom';

export default class Login extends React.Component {
  render(){
    return(

        <div className="row middle-xs">
          <div className="col-xs-12 col-sm-6">
            <Container>
              <div style={{'textAlign': 'left'}}>
                <Title />
                <TextField
                  floatingLabelText="Correo electronico"
                  type="email"
                  className="textfield"
                  />
                <TextField
                    floatingLabelText="Contraseña"
                    type="password"
                    className="textfield"
                    />


                  <div className="Login-actions">
                    <Route path="/login" exact render={()=>{
                        return(
                          <div>
                            <Link to="/signup" style={{"marginRight":"1em"}}>Crear nueva cuenta</Link>
                            <RaisedButton label="ingresar" secondary={true}></RaisedButton>
                          </div>
                        )
                      }}>
                    </Route>

                    <Route path="/signup" exact render={()=>{
                        return(
                          <div>
                            <Link to="/login" style={{"marginRight":"1em"}}>Ya tengo cuenta</Link>
                            <RaisedButton label="Crear cuenta" secondary={true}></RaisedButton>
                          </div>
                        )
                      }}>
                    </Route>
                    
                  </div>


              </div>
            </Container>
          </div>
          <div className="col-xs-12 col-sm-6">

              <div>
                <Route path="/login" exact render={()=>

                      <div className="Login-Background" style={{'backgroundImage': "url("+process.env.PUBLIC_URL + '/images/login1.jpg'+")"}}></div>

                  }>
                </Route>

                <Route path="/signup" exact render={()=>

                      <div className="Login-Background" style={{'backgroundImage': "url("+process.env.PUBLIC_URL + '/images/login4.jpeg'+")"}}></div>

                  }>
                </Route>
              </div>



          </div>
        </div>

    )
  }
}
