import {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Grid from './Grid';
import {colors} from '../_utils/colors';
import Svg, {Rect} from 'react-native-svg';

const Rectangle = () => {
  const [rectangleHeight, setRectangleHeight] = useState(0);
  const [rectangleWidth, setRectangleWidth] = useState(0);
  const [gridWidth, setGridWidth] = useState(0);
  const [gridHeight, setGridHeight] = useState(0);
  const [grids, setGrids] = useState([]);
  const [gridView, setGridView] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const divideRectangle = () => {
    const numColumns = Math.floor(
      parseInt(rectangleWidth) / parseInt(gridWidth),
    );
    const numRows = Math.floor(
      parseInt(rectangleHeight) / parseInt(gridHeight),
    );
    const data = [];

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        data.push({
          key: `${row}-${col}`,
          x: parseInt(gridWidth) * col,
          y: parseInt(gridHeight) * row,
        });
      }
    }
    setGrids(data);
    setGridView(true);
  };

  const handelGridWidth = num => {
    setGridView(false);
    setGridWidth(num);
  };

  const handelGridHeight = num => {
    setGridView(false);
    setGridHeight(num);
  };

  return (
    <ScrollView>
      <View style={styles.viewBox}>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.textClass}>Define Rectangle Size</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 8}}>
          <View style={{flex: 1}}>
            <Text style={{color: '#000', fontSize: 12, marginTop: 12}}>
              Width
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={num => setRectangleWidth(num)}
              value={rectangleWidth}
              placeholder="width"
              keyboardType="numeric"
            />
          </View>

          <View style={{flex: 1}}>
            <Text style={{color: '#000', fontSize: 12, marginTop: 12}}>
              Height
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={num => setRectangleHeight(num)}
              value={rectangleHeight}
              placeholder="height"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      {rectangleHeight && rectangleWidth ? (
        <View style={styles.viewBox}>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.textClass}>Define Grid Size</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 8}}>
            <View style={{flex: 1}}>
              <Text style={styles.titleText}>Width</Text>
              <TextInput
                style={styles.input}
                onChangeText={num => handelGridWidth(num)}
                value={gridWidth}
                placeholder="width"
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.titleText}>Height</Text>
              <TextInput
                style={styles.input}
                onChangeText={num => handelGridHeight(num)}
                value={gridHeight}
                placeholder="height"
                keyboardType="numeric"
              />
            </View>
          </View>

          <Text style={{color: '#000', fontSize: 12, marginTop: 12}}>
            Select Color
          </Text>
          <ScrollView horizontal={true}>
            {colors.map(color => (
              <TouchableOpacity
                onPress={event => {
                  event.persist();
                  setSelectedColor(color);
                }}
                key={color}
                style={[
                  color === selectedColor
                    ? styles.colorSelected
                    : styles.colorNormal,
                  {
                    backgroundColor: color,
                  },
                ]}>
                <Text></Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Button title="Divide Rectangle" onPress={divideRectangle} />
        </View>
      ) : null}

      {rectangleHeight && rectangleWidth && gridWidth && gridHeight ? (
        <>
          <Text style={styles.titleText}>Grid Output</Text>
          <ScrollView style={{marginHorizontal: 16}} horizontal={true}>
            {gridView && (
              <FlatList
                key={Math.floor(parseInt(rectangleWidth) / parseInt(gridWidth))}
                data={grids}
                numColumns={Math.floor(
                  parseInt(rectangleWidth) / parseInt(gridWidth),
                )}
                renderItem={({item, index}) => (
                  <Grid
                    key={item}
                    gridHeight={gridHeight}
                    gridWidth={gridWidth}
                    rectangleHeight={rectangleHeight}
                    rectangleWidth={rectangleWidth}
                    color={selectedColor}
                    item={item}
                  />
                )}
              />
            )}
          </ScrollView>
        </>
      ) : rectangleHeight && rectangleWidth ? (
        <>
          <Text style={styles.titleText}>Rectangle Output</Text>
          <ScrollView horizontal={true} style={{marginHorizontal: 16}}>
            <Svg width={rectangleWidth} height={rectangleHeight}>
              <Rect
                x={0}
                y={0}
                width={rectangleWidth}
                height={rectangleHeight}
                fill="none"
                stroke="black"
                strokeWidth={4}
              />
            </Svg>
          </ScrollView>
        </>
      ) : null}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  viewBox: {
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderRadius: 16,
  },
  titleText: {
    color: '#000',
    fontSize: 12,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  textClass: {
    backgroundColor: 'cyan',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    fontSize: 16,
    position: 'absolute',
    top: -28,
    color: '#111',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#E2E8F0',
    borderRadius: 8,
    marginVertical: 12,
    height: 42,
    paddingHorizontal: 16,
    color: '#333',
    fontSize: 14,
    flex: 1,
  },
  colorNormal: {
    height: 30,
    width: 30,
    flexDirection: 'row',
    marginRight: 12,
    marginVertical: 12,
  },
  colorSelected: {
    height: 40,
    width: 40,
    borderRadius: 25,
    flexDirection: 'row',
    marginRight: 12,
    marginVertical: 12,
  },
});

export default Rectangle;
