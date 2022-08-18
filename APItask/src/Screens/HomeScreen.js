import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, updateUser} from '../Redux/action/action';
import { View, Text,TextInput,Button,StyleSheet,FlatList,Modal,TouchableOpacity } from 'react-native';

export default function App() {
 const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [selectedUserIndex, setSelectedUserIndex] = useState(undefined);
  const [isModalVisible, setisModalVisible] = useState(false);
  const dispatch = useDispatch();
  const userList = useSelector(state => state.userList);

//   const onPressSaveEdit = item => {
//     dispatch(
//       updateUser({name: name}, {age: age}, {hobbies: hobbies}, selectedUserIndex),
//       setSelectedUserIndex(undefined),
//     );
//     setisModalVisible(false);
//   };

  const submit = () => {
    dispatch(
      addUser({
        name: name,
        age: age,
        hobbies: hobbies,
      }),
    );
    setName('');
    setAge('');
    setHobbies('');
    setisModalVisible(true);
  };
  const editModal = item => {
    {item.name;}
    {item.age;}
    {item.hobbies;}
    setisModalVisible(true);
  }; 

  const onPressUser = item => {
    setName(item.name);
    setHobbies(item.hobbies);
    setAge(item.age)
   }

  const renderItem = ({item}) => {
    return (
        <TouchableOpacity onPress={() => onPressUser(item)}>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.hobbies}</Text>
          <Text>{item.age}</Text>
        </View>
        </TouchableOpacity>
    );
  };

  
  const Modalclose = ()=>{
    setisModalVisible(false)
    setData([...data,{name: name},{hobbies: hobbies},{age: age}])
  }
  const Modalopen = ()=>{
    setisModalVisible(true);
    submit()
  }

  return (
    <View style={styles.container}>

 
  
  <Modal animationType="fade" visible={isModalVisible}>

    <TextInput  style={styles.textinput} defaultValue={name} onChangeText={Name    => setName(Name)}       placeholder={'Name'} value={name}    />
    <TextInput style={styles.textinput}  defaultValue={hobbies} onChangeText={Hobbies => setHobbies(Hobbies)} placeholder={'Hobbies'} value={hobbies} />
    <TextInput  style={styles.textinput} defaultValue={age} onChangeText={Age     => setAge(Age)}         placeholder={'Age'} value={age} />

    <Button
        title={'Add Detail'}
        onPress={Modalclose}
      />
      <Button
        title={'Cancell'}
        onPress={Modalclose}
      />
  </Modal>
    <Button
        title={'Add'}
        onPress={Modalopen}
    />
  
    <FlatList data={data} renderItem={renderItem} />
    <View style={styles.bottomButton}>
      <View style={styles.floorbutton}><Button title="Edit" onPress={editModal}/></View>
      <View style={styles.floorbutton}><Button title="Delet" /></View>
    </View>
</View>
  );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
    textinput: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
      },
  bottomButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  floorbutton:{
    padding:50
  }
  
});

