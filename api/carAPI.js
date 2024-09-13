import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const carAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

 
  const fetchCars = async () => {
    try {
      const response = await axios.get('https://freetestapi.com/api/v1/cars');
      console.log(response.data);  
      setData(response.data);  
    } catch (error) {
      console.error('API çağrısında hata:', error);
    } finally {
      setLoading(false);  
    }
  };

  
  useEffect(() => {
    fetchCars();
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
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.make} {item.model}</Text>
          </View>
        )}
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    flex: 1,
  },
});

export default carAPI;
