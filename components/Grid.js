import {View} from 'react-native';

const Grid = ({gridWidth, gridHeight, color}) => {
  return (
    <>
      <View
        style={{
          width: parseInt(gridWidth),
          height: parseInt(gridHeight),
          borderColor: 'black',
          borderWidth: 1,
          backgroundColor: color ? color : null,
        }}
      />
    </>
  );
};

export default Grid;
