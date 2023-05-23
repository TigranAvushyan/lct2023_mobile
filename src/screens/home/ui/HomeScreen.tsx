import { HomeLayout } from '../../../features/home/ui/HomeLayout';
import * as AuthSession from 'expo-auth-session';
import { Button } from '../../../shared/ui/button/ui/Button';
import * as Linking from 'expo-linking';
import { WebViewNavigation } from 'react-native-webview';
import Url from '../../../entities/url/Url';

// https://oauth.vk.com/oauth/authorize?response_type=code&scope=4259842&
// client_id=51651252&
// redirect_uri=https://lev4ek.ru/auth/oauth2/vk/

export const HomeScreen = () => {
  return (
    <HomeLayout title={'Главная'}>
      {/*<Container>*/}
      {/*  <PointProgressBar progress={60} />*/}
      {/*  <Card*/}
      {/*    title={'Прошёл мажор в Берлине!'}*/}
      {/*    description={*/}
      {/*      'БетБум опять всё проиграли, впрочем ничего удивительного, ведь у них в миду дед инсай...'*/}
      {/*    }*/}
      {/*    background={require('../../../shared/assets/img/card_img.jpg')}*/}
      {/*  />*/}
      {/*  <Card*/}
      {/*    title={'Прошёл мажор в Берлине!'}*/}
      {/*    description={*/}
      {/*      'БетБум опять всё проиграли, впрочем ничего удивительного, ведь у них в миду дед инсай...'*/}
      {/*    }*/}
      {/*    background={require('../../../shared/assets/img/card_img.jpg')}*/}
      {/*  />*/}
      {/*  <Card*/}
      {/*    title={'Прошёл мажор в Берлине!'}*/}
      {/*    description={*/}
      {/*      'БетБум опять всё проиграли, впрочем ничего удивительного, ведь у них в миду дед инсай...'*/}
      {/*    }*/}
      {/*    background={require('../../../shared/assets/img/card_img.jpg')}*/}
      {/*  />*/}
      {/*</Container>*/}
    </HomeLayout>
  );
};
