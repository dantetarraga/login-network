import { EditProfileContainer } from 'components/Pages/Profile/EditProfile/EditProfileContainer';
import { MessagesContainer } from 'components/Pages/Messages/MessagesContainer';
import { SettingsContainer } from 'components/Pages/Settings/SettingsContainer';
import { ProfileContainer } from 'components/Pages/Profile/ProfileContainer';
import { UsersContainer } from 'components/Pages/Users/UsersContainer';
import { Music } from 'components/Pages/Music/Music';
import { Login } from 'components/Pages/Login/Login';
import { News } from 'components/Pages/News/News';
import { Redirect, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Component } from 'react';

const rutaServidor = "/social-network";

export class App extends Component {

	UNSAFE_componentWillMount() {
		document.body.setAttribute('data-theme', 'light');
	}

	render() {
		return (
			<Layout>
				<Route path='/social-network' exact render={() => <Redirect to={'/social-network/profile'} />} />
				<Route path='/social-network/profile-settings' render={() => <EditProfileContainer />} />
				<Route path='/social-network/profile/:userID?' render={() => <ProfileContainer />} />
				<Route path='/social-network/messages/:userID?' render={() => <MessagesContainer />} />
				<Route path='/social-network/users' render={() => <UsersContainer />} />
				<Route path='/social-network/news' component={News} />
				<Route path='/social-network/music' component={Music} />
				<Route path='/social-network/settings' component={SettingsContainer} />
				<Route path='/social-network/login' component={Login} />
			</Layout>
		);
	}
}