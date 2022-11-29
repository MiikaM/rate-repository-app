import { StyleSheet, View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignInContainer from './SignInContainer';
import SingleRepositoryItem from './SingleRepositoryItem';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#E1E5E8"

  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/repository/:repositoryId" element={<SingleRepositoryItem />} />
        <Route path="/signIn" element={<SignInContainer />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </View>
  );
};

export default Main;