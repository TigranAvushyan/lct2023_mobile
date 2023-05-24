import { Component } from 'react';
import { IconProps } from '../types';
import { Path, Svg } from 'react-native-svg';
import { getIconColor } from '../helper';

export class VkIconClassComponent extends Component<IconProps> {
  render() {
    return (
      <Svg
        width='24'
        height='14'
        viewBox='0 0 24 14'
        fill='none'
        {...this.props}
      >
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.3869 13.3343H12.7504C12.7504 13.3343 13.1622 13.289 13.3728 13.0624C13.5663 12.8542 13.5601 12.4635 13.5601 12.4635C13.5601 12.4635 13.5334 10.6339 14.3824 10.3645C15.2197 10.0989 16.2946 12.1327 17.4338 12.9148C18.2953 13.5064 18.95 13.3769 18.95 13.3769L21.9965 13.3343C21.9965 13.3343 23.5901 13.236 22.8344 11.983C22.7726 11.8807 22.3942 11.0562 20.5692 9.36222C18.6588 7.58919 18.9149 7.87605 21.2159 4.80916C22.6173 2.94143 23.1774 1.80123 23.0024 1.31291C22.8356 0.847645 21.8048 0.970549 21.8048 0.970549L18.3748 0.991756C18.3748 0.991756 18.1203 0.957135 17.9318 1.06992C17.7475 1.18021 17.6292 1.4379 17.6292 1.4379C17.6292 1.4379 17.0861 2.88311 16.3623 4.11239C14.8349 6.70589 14.2241 6.84318 13.9744 6.68188C13.3936 6.3065 13.5387 5.17418 13.5387 4.36952C13.5387 1.85602 13.92 0.808043 12.7963 0.536772C12.4235 0.446803 12.1489 0.387279 11.1953 0.377559C9.97129 0.365108 8.93561 0.381335 8.34904 0.668672C7.95881 0.859776 7.65773 1.28552 7.8412 1.31002C8.06797 1.34022 8.58128 1.44859 8.85343 1.81891C9.20503 2.29727 9.19274 3.37111 9.19274 3.37111C9.19274 3.37111 9.39477 6.32987 8.72105 6.6973C8.25875 6.94937 7.62448 6.43478 6.26273 4.08178C5.56516 2.87652 5.03828 1.5441 5.03828 1.5441C5.03828 1.5441 4.93682 1.29516 4.7556 1.16189C4.53582 1.00043 4.22872 0.949262 4.22872 0.949262L0.96912 0.970549C0.96912 0.970549 0.479914 0.984205 0.300138 1.197C0.140202 1.38641 0.287366 1.7777 0.287366 1.7777C0.287366 1.7777 2.8391 7.74792 5.72871 10.7566C8.37853 13.5154 11.3869 13.3343 11.3869 13.3343Z'
          fill={getIconColor(this.props)}
        />
      </Svg>
    );
  }
}
