import { FC } from 'react';
import { NavigationProvider } from '../providers/NavigationProvider';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

export const Application: FC = () => {
  return (
    <NavigationProvider>
      <View className='flex-1'>
        <MapView
          initialRegion={{
            latitude: 40.353792,
            longitude: 43.9681024,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          className='w-full h-full'
        >
          <Marker
            coordinate={{ latitude: 40.353792, longitude: 43.9681024 }}
            title={"I'm here"}
          />
        </MapView>
      </View>
    </NavigationProvider>
  );
};
