import React from "react";
import GlobalStyle from "./../../styles/global"
import { ButtonLogin, CardLogin, FormLogin, InputLogin, LabelLogin, TextFild, TextFildLink } from "./style";
import { Link } from "react-router-dom";
import ContainerBody from "../../components/Container";

const Login: React.FC = () =>{
    
    return(
        <div className="Login">
            <GlobalStyle/>
            <ContainerBody>
                <CardLogin>
                    <h1>Login</h1>
                    <FormLogin>
                        <TextFild>
                            <LabelLogin htmlFor='email'>E-mail</LabelLogin>
                            <InputLogin id='email' type={'email'} placeholder='E-mail'/>
                        </TextFild>
                        <TextFild>
                            <LabelLogin htmlFor='password'>Senha</LabelLogin>
                            <InputLogin id='password' type={'password'} placeholder='Semha'/>
                        </TextFild>
                    </FormLogin>
                    <ButtonLogin>Entrar</ButtonLogin>
                    <TextFildLink>
                        <Link to='registrar' className="link">Registre-se</Link>
                        <Link to='recuperarSenha' className="link">Recuperar senha</Link>
                    </TextFildLink>
                </CardLogin>
            </ContainerBody>
        </div>
    )
}

export default Login