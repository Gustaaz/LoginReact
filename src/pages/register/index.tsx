import React from "react";
import GlobalStyle from "./../../styles/global"
import { ButtonLogin, CardLogin, FormLogin, InputLogin, LabelLogin, TextFild, TextFildLink } from "./style";
import { Link } from "react-router-dom";
import ContainerBody from "../../components/Container";


const Register: React.FC = () =>{
    return(
        <div className="Login">
            <GlobalStyle/>
            <ContainerBody>
                <CardLogin>
                    <h1>Registre-se</h1>
                    <FormLogin>
                        <TextFild>
                            <LabelLogin htmlFor='email'>E-mail</LabelLogin>
                            <InputLogin id='email' type={'email'} placeholder='E-mail' />
                        </TextFild>
                        <TextFild>
                            <LabelLogin htmlFor='fistName'>Primeiro Nome</LabelLogin>
                            <InputLogin id='fistName' type={'text'} placeholder='Semha'/>
                        </TextFild>
                        <TextFild>
                            <LabelLogin htmlFor='lastName'>Ultimo Nome</LabelLogin>
                            <InputLogin id='lastName' type={'text'} placeholder='Semha'/>
                        </TextFild>
                        <TextFild>
                            <LabelLogin htmlFor='password'>Senha</LabelLogin>
                            <InputLogin id='password' type={'password'} placeholder='Semha'/>
                        </TextFild>
                        <TextFild>
                            <LabelLogin htmlFor='confirmPassword'>Confirme a senha</LabelLogin>
                            <InputLogin id='confirmPassword' type={'password'} placeholder='Semha'/>
                        </TextFild>
                    </FormLogin>
                    <ButtonLogin>Cadastrar</ButtonLogin>
                    <TextFildLink>
                        <Link to='/' className="link">ir para o login</Link>
                    </TextFildLink>
                </CardLogin>
            </ContainerBody>
        </div>
    )
}

export default Register