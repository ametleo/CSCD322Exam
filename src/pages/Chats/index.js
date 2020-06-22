import React from 'react';

import { 
  Container, 
  ChatBox, 
  ImageBox, 
  Image, 
  Details, 
  Top, 
  TitleBox, 
  Title, 
  DateBox, 
  Date, 
  LastMessage, 
  Text 
} from './styles';

export default function Chats() {
  return (
  <Container>
    <ChatBox>
      <ImageBox>
        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://avatars3.githubusercontent.com/u/53618919?s=400&u=1685efc02d9f5f2a1e470efc7ce7e745e665967e&v=4' }}/>
      </ImageBox>
      <Details>
        <Top>
          <TitleBox>
            <Title>Amet</Title>
          </TitleBox>
          <DateBox>
            <Date>21:46</Date>
          </DateBox>
        </Top>
        <LastMessage>
          <Text>last sent messages</Text>
        </LastMessage>
      </Details>
    </ChatBox>
    <ChatBox>
      <ImageBox>
        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/p960x960/62041359_2118392804926769_8632197001473163264_o.jpg?_nc_cat=110&_nc_ohc=HM5d6vDdwIAAX-Kqw6z&_nc_ht=scontent-gru1-1.xx&_nc_tp=6&oh=ea88512a83842bcbcb19709565969af9&oe=5ED4A1BB' }}/>
      </ImageBox>
      <Details>
        <Top>
          <TitleBox>
            <Title>Soli</Title>
          </TitleBox>
          <DateBox>
            <Date>18:34</Date>
          </DateBox>
        </Top>
        <LastMessage>
          <Text>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
        </LastMessage>
      </Details>
    </ChatBox>
    <ChatBox>
      <ImageBox>
        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/11201501_875992355821703_5518613551995835957_n.jpg?_nc_cat=106&_nc_ohc=6yUDq2OJpFEAX8Q1NYY&_nc_ht=scontent-gru2-2.xx&oh=f93563c3dbf0c151ea2106907e33b821&oe=5ED9B35B' }}/>
      </ImageBox>
      <Details>
        <Top>
          <TitleBox>
            <Title>Constant</Title>
          </TitleBox>
          <DateBox>
            <Date>22:39</Date>
          </DateBox>
        </Top>
        <LastMessage>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
        </LastMessage>
      </Details>
    </ChatBox>
  </Container>
  );
}
