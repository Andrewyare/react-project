import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import "./css/style.css"
import { AiFillFileText } from "react-icons/ai"
import { FcTodoList } from "react-icons/fc"

interface UserProps {
	id: number,
	name: string,
	username: string,
	email: string,
	website: string
}
const User: FC<UserProps> = ({ id, name, username, email, website }) => {
	return (
		<tr>
			<td>{name}</td>
			<td>{username}</td>
			<td>{email}</td>
			<td>{website}</td>
			<td>
				<Link to={"todo/" + id}><FcTodoList /></Link>
				<Link to={"/post/" + id}><AiFillFileText /></Link>
			</td>
		</tr>
	);
};

export default User;