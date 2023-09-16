import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [Goals, setGoals] = useState([]);
  const [ModalVisible, setModalVisible] = useState(false);

  function goalslisthandler(EnteredGoalText) {
    setGoals((currentgoals) => [
      ...currentgoals, { text: EnteredGoalText, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  }
  function deleteGoalHandler(id) {
    setGoals((currentgoals) => {
      return currentgoals.filter((goal) => goal.id !== id);
    });

  }

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function stopAddGoalHandler() {
    setModalVisible(false);
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button title='Add Goal' color="#b180f0" onPress={startAddGoalHandler} />
        <GoalInput showModal={ModalVisible} onAddGoals={goalslisthandler} onCancel={stopAddGoalHandler} />
        <View style={styles.goalscontainer}>
          <FlatList data={Goals} renderItem={(itemData) => {
            return <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} />;
          }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#1e085a'
  },
  firsttext: {
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'red',
    padding: 10,
  },
  goalscontainer: {
    flex: 3
  }
});
