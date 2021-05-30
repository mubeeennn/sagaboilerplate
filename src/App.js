import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';
import {getUsers} from './redux/actions/users';
import getPosts from './redux/actions/posts';

function App() {
  const user = useSelector(state=> state.user.users)
  const posts= useSelector(state=>state.posts.posts)
  const dispatch = useDispatch();

  useEffect(() => {
  
    dispatch(getPosts())
  }, [])

  return (
    <div >
        <button >increment</button>
        <button >decrement</button>

    </div>
  );
}

export default App;
