import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {useGetPhotosQuery} from '../store/photosApi';
import {useAppDispatch} from '../store/hooks';
import {setPhoto} from '../store/photosSlice';

const ListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const {data} = useGetPhotosQuery('', {});

  const handlerOpenImage = (item: any) => {
    navigation.navigate('ImageScreen');
    dispatch(setPhoto(item));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={1}
        data={data}
        renderItem={({item}: any) => {
          return (
            <Pressable onPress={() => handlerOpenImage(item)}>
              <View style={styles.item}>
                {item.urls.small && (
                  <Image source={{uri: item.urls.small}} style={styles.image} />
                )}
                {item.user.name && (
                  <Text style={[styles.textBase, styles.title]}>
                    {item.user.name}
                  </Text>
                )}
                {item.description && (
                  <Text style={[styles.textBase, styles.description]}>
                    {item.description}
                  </Text>
                )}
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1 / 2,
    padding: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textBase: {
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 13,
  },
});

export default ListScreen;
