import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Button} from 'react-native';
import {useAppSelector} from '../store/hooks';
import {selectPhoto} from '../store/photosSlice';
import {useNavigation} from '@react-navigation/native';

const ImageScreen = () => {
  const [isContain, setIsContain] = useState(true);
  const photo = useAppSelector(selectPhoto);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: photo.user.name});
  }, [navigation, photo.user.name]);

  const toggleView = () => {
    setIsContain(prevState => !prevState);
  };

  let viewStyle = isContain ? styles.imageContain : styles.imageCover;

  return (
    <View style={styles.container}>
      <Image source={{uri: photo.urls.small}} style={viewStyle} />
      <Button title="Change view" onPress={toggleView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContain: {
    flex: 1,
    resizeMode: 'contain',
  },
  imageCover: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default ImageScreen;
