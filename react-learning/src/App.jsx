import PostLists from "./components/PostLists";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModalHandler() {
    setIsModalVisible(true);
  }
  function hideModalVisibility() {
    setIsModalVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostLists
          isPosting={isModalVisible}
          onStopPosting={hideModalVisibility}
        />
      </main>
    </>
  );
}

export default App;
