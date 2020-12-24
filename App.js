import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Button, View, Modal, Text } from "react-native";

export default function App() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <View style={styles.container}>
      <Button onPress={() => {}} title="This is a dummy button" />
      <Button onPress={() => setShowModal(true)} title="Open modal" />
      <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <Text>
            Closing this modal should return screenreader focus to the button
            which opened it
          </Text>
          <Button onPress={() => setShowModal(false)} title="Close modal" />
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
