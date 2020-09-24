import React from 'react';
import { 
    Container, 
    Retweeted, 
    RocketseatIcon, 
    Body, 
    Avatar, 
    Content,
    Header, 
    Dot, 
    Description, 
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Feed : React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon/>
                Você retweetou
            </Retweeted>

            <Body >
                <Avatar />

                <Content>
                    <Header>
                        <strong>Paulo Macyszyn</strong>
                        <span>@PauloMcz</span>
                        <Dot />
                        <time> 24 de set</time>
                    </Header>

                    <Description>Os limites é você quem define</Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            18
                        </Status>
                        <Status>
                            <LikeIcon />
                            999
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}
export default Feed;