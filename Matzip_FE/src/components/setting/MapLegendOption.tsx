import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CompoundOption} from '../common/CompoundOption';

interface MapLegendOptionProps {
  isVisible: boolean;
  hideOption: () => void;
}

function MapLegendOption({isVisible, hideOption}: MapLegendOptionProps) {
  return <CompoundOption></CompoundOption>;
}

export default MapLegendOption;
