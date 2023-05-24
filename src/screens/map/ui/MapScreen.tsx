import { View } from 'react-native';
import MapView from 'react-native-maps';

export const MapScreen = () => {
  return (
    <View>
      <MapView className={'w-full h-full'} />
    </View>
  );
};
