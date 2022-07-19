import React from "react";
import GlobalStyle from "./../../styles/global"
import { ButtonLogin, CardLogin, FormLogin, InputLogin, LabelLogin, TextFild, TextFildLink } from "./style";
import { Link } from "react-router-dom";
import ContainerBody from "../../components/Container";


const RecoverPassword: React.FC = () =>{
    return(
        <div className="Login">
            <GlobalStyle/>
            <ContainerBody>
                <CardLogin>
                    <h1>Recuperar senha</h1>
                    <FormLogin>
                        <TextFild>
                            <LabelLogin htmlFor='email'>E-mail</LabelLogin>
                            <InputLogin id='email' type={'email'} placeholder='E-mail' />
                        </TextFild>
                    </FormLogin>
                    <ButtonLogin>enviar</ButtonLogin>
                    <TextFildLink>
                        <Link to='/' className="link">ir para o login</Link>
                    </TextFildLink>
                </CardLogin>
            </ContainerBody>
        </div>
    )
}

export default RecoverPassword