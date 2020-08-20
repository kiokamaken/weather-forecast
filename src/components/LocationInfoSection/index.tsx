import React from 'react';
import { Location } from 'models';
import Typo from 'components/Typo';
import { LocationWrapper } from './Styled';
import { formatTime } from 'utils/datetime';

export interface LocationInfoSectionProps {
  info: Pick<Location, 'title' | 'time' | 'parent'>;
}

const LocationInfoSection: React.FC<LocationInfoSectionProps> = ({ info }) => {
  return (
    <LocationWrapper>
      <section>
        <Typo size="large" color="white" fontWeight="500">
          {info.title}, {formatTime(info.time)}
        </Typo>
      </section>
      <section>
        <Typo size="medium" color="white" fontWeight="400">
          {info.parent?.title}
        </Typo>
      </section>
    </LocationWrapper>
  );
};

export default LocationInfoSection;
