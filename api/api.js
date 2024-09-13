import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const fetchMeals = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
      console.log(response.data.meals);  
      setData(response.data.meals);  
      setLoading(false);  
    } catch (error) {
      console.error('API çağrısında bir hata oluştu:', error);
      setLoading(false);  
    }
  };

 
  useEffect(() => {
    fetchMeals();
  }, []);

  
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.idMeal.toString()}
        renderItem={({ item }) => {
        
          if (!item || !item.strMealThumb) {
            return <Text>Yemek bulunamadı</Text>;
          }

          return (
            <View style={styles.item}>
              <Text style={styles.text}>{item.strMeal}</Text>
              <Image
                source={{ uri: item.strMealThumb }}
                style={styles.image}
                onError={() => console.log('Resim yüklenemedi: ', item.strMealThumb)}  
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',  
  },
});

export default Api;
