import { HomeLayout } from '../../../features/home/ui/HomeLayout';
import { PointProgressBar } from '../../../shared/ui/point-porgress-bar/ui/PointProgressBar';
import { Container } from '../../../shared/ui/container/ui/Container';
import { Card } from '../../../shared/ui/card/ui/Card';
import MapView from 'react-native-maps';

export const HomeScreen = () => {
  return (
    <HomeLayout title={'Главная'}>
      <Container>
        <PointProgressBar progress={60} />
        <Card
          title={'Прошёл мажор в Берлине!'}
          description={
            'БетБум опять всё проиграли, впрочем ничего удивительного, ведь у них в миду дед инсай...'
          }
          background={require('../../../shared/assets/img/card_img.jpg')}
        />
        <Card
          title={'Прошёл мажор в Берлине!'}
          description={
            'БетБум опять всё проиграли, впрочем ничего удивительного, ведь у них в миду дед инсай...'
          }
          background={require('../../../shared/assets/img/card_img.jpg')}
        />
        <Card
          title={'Прошёл мажор в Берлине!'}
          description={
            'БетБум опять всё проиграли, впрочем ничего удивительного, ведь у них в миду дед инсай...'
          }
          background={require('../../../shared/assets/img/card_img.jpg')}
        />
      </Container>
    </HomeLayout>
  );
};
