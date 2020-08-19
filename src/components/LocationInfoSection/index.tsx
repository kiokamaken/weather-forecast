import React from 'react';
import { Location } from 'models';
import Typo from 'components/Typo';
import { LocationSection } from './Styled';
import { formatTime } from 'utils/datetime';

interface LocationInfoSectionProps {
  info: Location;
}

const LocationInfoSection: React.FC<LocationInfoSectionProps> = ({ info }) => {


  return (
    <LocationSection>
      <div>
        <Typo size="large" color="white" fontWeight="500">
          {info.title}, {formatTime(info.time)}
        </Typo>
      </div>
      <div>
        <Typo size="medium" color="white" fontWeight="400">
          {info.parent?.title}
        </Typo>
      </div>
    </LocationSection>
  );
};

export default LocationInfoSection;
