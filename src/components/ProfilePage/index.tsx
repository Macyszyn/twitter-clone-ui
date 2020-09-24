import React from 'react';
import Feed from '../Feed';
import {
    Container,
    Banner, 
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage : React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar Perfil</EditButton>

                <h1>Paulo Macyszyn</h1>
                <h2>@paulomcz</h2>

                <p>Desenvolvedor full stack</p>

                <ul>
                    <li>
                        <LocationIcon />
                        Curitiba - PR, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 29 de junho de 1990
                    </li>
                </ul>

                <Followage >
                    <span>
                        seguindo <strong>10</strong>                    
                    </span>
                    <span>
                        <strong>810 </strong> seguidores
                    </span>
                </Followage>            
            </ProfileData>

            <Feed />
        </Container>
);
}

export default ProfilePage;