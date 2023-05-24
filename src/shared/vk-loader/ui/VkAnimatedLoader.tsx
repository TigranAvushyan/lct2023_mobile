import { FC, useEffect, useRef } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
// @ts-ignore
import { NodeJS } from 'timers';
import { VkIconClassComponent } from '../../icons/vk/VkIconClassComponent';
import cn from 'classnames';
import { useToggle } from '../../hooks/toggle/useToggle';

interface Props {
  isLoading: boolean;
  className?: string;
}

const AnimatedVk = Animated.createAnimatedComponent(VkIconClassComponent);
export const VkAnimatedLoader: FC<Props> = ({ isLoading, className }) => {
  const scale = useSharedValue(0);
  const rotate = useSharedValue(1);

  const animatedProps = useAnimatedProps(() => {
    return {
      width: withTiming(scale.value ? 3000 : 60, { duration: 300 }),
      height: withTiming(scale.value ? 3000 : 60, { duration: 300 }),
      transform: [{ rotate: withTiming(`${rotate.value * 10}deg`) }],
    };
  });

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isLoading) {
      interval = setInterval(() => {
        rotate.value *= -1;
      }, 300);
    } else {
      rotate.value = 0;
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      scale.value = 1;
    }
  }, [isLoading]);
  const isFirst = useRef(true);
  const { active: isFinishedAnimation, setTrue: finishedAnimation } =
    useToggle();

  const onExit = () => {
    if (!isFirst.current) {
      setTimeout(finishedAnimation, 500);
    }
    isFirst.current = false;
  };
  if (isFinishedAnimation) return null;

  return (
    <View className={cn('bg-vk flex-1 items-center justify-center', className)}>
      {/* @ts-ignore*/}
      <AnimatedVk exiting={onExit()} animatedProps={animatedProps} />
    </View>
  );
};
