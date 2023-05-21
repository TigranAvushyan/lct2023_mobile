import { FC } from 'react';
import { View, Text } from 'react-native';
import { Star } from '../../../icons/star/Star';

interface Props {
  progress: number;
  start?: number;
  finish?: number;
  startText?: string;
  finishText?: string;
  description?: string;
}
export const PointProgressBar: FC<Props> = ({
  progress,
  start = 0,
  finish = 100,
  startText = 'startText',
  finishText = 'finishText',
  description = 'Выполнить задания и заработать очки знаний!',
}) => {
  return (
    <View>
      <View className={'flex-row justify-between px-3'}>
        <Text className={'text-lg text-burst ml-[55px] font-bold'}>
          {startText}
        </Text>
        <Text className={'text-lg text-burst font-bold'}>{finishText}</Text>
      </View>
      <View
        className={
          'border-4 border-green-300 ml-3 h-10 justify-center relative rounded-full'
        }
      >
        <View
          className={
            'absolute -left-3 z-10 h-[55px] w-[55px] justify-center items-center  bg-green-300 rounded-full'
          }
        >
          <Star />
        </View>
        <Text className={'ml-auto text-burst pr-3 font-bold'}>{finish}</Text>
        <View
          style={{ width: `${progress}%` }}
          className={`h-full absolute rounded-full bg-green-200 pr-4 items-end justify-center`}
        >
          <Text className={'font-bold text-burst'}>{progress}</Text>
        </View>
      </View>
      <Text className={'w-full text-center text-burst mt-2'}>
        {description}
      </Text>
    </View>
  );
};
