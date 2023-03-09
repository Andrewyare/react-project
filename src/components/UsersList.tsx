import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import User from './User';

const UsersList: FC = () => {
	const { users, loading, error } = useTypedSelector(state => state.users)
	return (
		<table id="customers">
			<tr>
				<th>Name</th>
				<th>Username</th>
				<th>Email</th>
				<th>Website</th>
				<th>Links</th>
			</tr>
			{users.map(user =>
				<User
					id={user.id}
					name={user.name}
					username={user.username}
					email={user.email}
					website={user.website}
				/>
			)}

		</table>
	);
};

export default UsersList;