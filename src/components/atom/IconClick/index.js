import {TouchableOpacity} from 'react-native';

const IconClick = ({icon, onPress}) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
};

export default IconClick;
