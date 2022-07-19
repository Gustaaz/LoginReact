import React from "react";
import GlobalStyle from "./../../styles/global"
import { Container, LeftImage, LeftLogin, RightLogin } from "./style";

import ImagemLogin from "./img/imagemLogin.svg"


type Props = {
    children: React.ReactNode
}

const ContainerBody: React.FC<Props> = (props) =>{

    return(
        <div className="body">
            <GlobalStyle/>
            <Container>
            <LeftLogin>
                <LeftImage src={ImagemLogin} alt="Imagem Login" />
            </LeftLogin>
            <RightLogin>       
                    {props.children}
            </RightLogin>
        </Container>
        </div>
    )
}

export default ContainerBody