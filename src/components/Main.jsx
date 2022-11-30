import { StyleSheet, View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router-native';
import AppBar from './AppBar';
import CreateReviewContainer from './CreateReviewContainer';
import MyReviews from './MyReviews';
import RepositoryList from './RepositoryList';
import SignInContainer from './SignInContainer';
import SignUpContainer from './SignUpContainer';
import SingleRepositoryItem from './SingleRepositoryItem';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#E1E5E8"
  }
});

const Main = () => {
  // let navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/user/create");
  // }, [])

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/repository/:repositoryId" element={<SingleRepositoryItem />} />
        <Route path="/me/reviews" element={<MyReviews />} />
        <Route path="/signIn" element={<SignInContainer />} />
        <Route path="/review/create" element={<CreateReviewContainer />} />
        <Route path="/user/create" element={<SignUpContainer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;