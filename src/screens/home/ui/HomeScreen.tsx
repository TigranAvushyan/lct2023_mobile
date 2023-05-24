import { HomeLayout } from '../../../features/home/ui/HomeLayout';
import { Container } from '../../../shared/ui/container/ui/Container';
import { PointProgressBar } from '../../../shared/ui/point-porgress-bar/ui/PointProgressBar';
import { Card } from '../../../shared/ui/card/ui/Card';
import { useEffect } from 'react';
import { http } from '../../../entities/server/model/http';

export const HomeScreen = () => {
  useEffect(() => {
    (async () => {
      const res = await http.get('/v1/auth/users/me/');
      console.log(res.data);
    })();
  }, []);

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
