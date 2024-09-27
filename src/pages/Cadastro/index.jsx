import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, 
        Title, 
        Column, 
        TitleLogin, 
        SubtitleLogin, 
        Row, 
        Wrapper,
        PoliticasDePrivacidade,
        JaTenhoConta,
        FazerLogin,
    } from './styles';



const Cadastro = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

  return (<>
    <Header />
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais 
                rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome"  control={control} />
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    <Input placeholder="Password" leftIcon={<MdLock />} name="password"  control={control} />
                    <Button title="Criar minha conta" variant="secondary" type="submit" />
                </form>
                <Row>
                    <PoliticasDePrivacidade>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de 
                        Privacidade e os Termos de Uso da DIO.
                    </PoliticasDePrivacidade>
                </Row>
                <Row>
                    <JaTenhoConta>
                        Já tenho conta.
                        <FazerLogin href="../login" >Fazer login</FazerLogin>
                    </JaTenhoConta>
                    
                </Row>
            </Wrapper>
        </Column>
    </Container>
    
    </>)
}



export { Cadastro };
