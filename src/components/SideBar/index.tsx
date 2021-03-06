import React from 'react';
import StickyBox from 'react-sticky-box';
import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,

} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar : React.FC = () => {
return (
    <Container>
       <SearchWrapper>
           <SearchInput placeholder="Buscar no Twitter" />
           <SearchIcon />
       </SearchWrapper>

<StickyBox>
       <Body>
            <List 
                title="Talvez você curta" 
                elements={[
                    <FollowSuggestion name="Paulo Macyszyn" nickname="@paulomcz" />,
                    <FollowSuggestion name="Juhh Macyszyn" nickname="@juhhmcz" />,
                    <FollowSuggestion name="Rute Macyszyn" nickname="@rutemcz"
                    />,
                  ]}
            />

            <List
                title="O que está acontecendo"
                elements={[<News />, <News />, <News />]}
            />
            <List
                title="O que está acontecendo"
                elements={[<News />, <News />, <News />]}
            />
            <List
                title="O que está acontecendo"
                elements={[<News />, <News />, <News />]}
            />
            <List
                title="O que está acontecendo"
                elements={[<News />, <News />, <News />]}
            />
       </Body>
    </StickyBox>
    </Container>
);
}

export default SideBar;