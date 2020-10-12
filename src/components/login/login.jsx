import React from 'react';
import loginImg from '../../Images/mmt-white';

export class login extends React.Component {

  render() {

    return (
        <div className="base-container">

        <div className="header">Acessar</div>
             <div className="content">
                 <div className="image">
                    <img src={loginIMg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Usuário</label>
                        <input type="text" name="username" placeholder="Usuário"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input type="text" name="password" placeholder="Senha"/>
                    </div>
                    
                </div>
            </div>

            <div className="footer">
                <button type="submit" className="btn">Acessar</button>

            </div>

        </div>
    )
  }
}