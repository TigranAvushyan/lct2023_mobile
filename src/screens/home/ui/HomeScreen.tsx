import { HomeLayout } from '../../../features/home/ui/HomeLayout';
import { PointProgressBar } from '../../../shared/ui/point-porgress-bar/ui/PointProgressBar';

export const HomeScreen = () => {
  return (
    <HomeLayout title={'Главная'}>
      <PointProgressBar progress={60} />
    </HomeLayout>
  );
};
