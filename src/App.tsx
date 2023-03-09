import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import CommentsList from './components/CommentsList';
import CompletedTodoList from './components/CompletedTodoList';
import Header from './components/Header';
import PostList from './components/PostList';
import PostUserList from './components/PostUserList';
import TodoList from './components/TodoList';
import TodoUserList from './components/TodoUserList';
import UncompletedTodoList from './components/UncompletedTodoList';
import UsersList from './components/UsersList';
import { useActions } from './hooks/useAction';

function App() {
	const { fetchTodos, fetchComment, fetchPosts, fetchUsers } = useActions()
	useEffect(() => {
		fetchTodos()
		fetchComment()
		fetchPosts()
		fetchUsers()
	}, [])
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<UsersList />} />
				<Route path="/users" element={<UsersList />} />
				<Route path='/post/:userId' element={<PostUserList />} />
				<Route path="/comment/:postId" element={<CommentsList />} />
				<Route path='/todo' element={<TodoList />} />
				<Route path='/users/todo/completed/:id' element={<CompletedTodoList />} />
				<Route path='/users/todo/uncompleted/:id' element={<UncompletedTodoList />} />
				<Route path='/users/todo/:id' element={<TodoUserList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
