import { UserPhotosType } from "redux/users/users-reducer";
import { authThunkCreator } from "redux/auth/auth-thunks";
import { Header } from "components/Layout/Header/Header";
import { AppStateType } from "redux/redux-store";
import { connect } from "react-redux";
import { Component } from "react";

class HeaderContainer extends Component<HeaderType> {

	componentDidMount() {
		this.props.authThunkCreator();
	}

	render() {
		return <Header {...this.props} />
	}
}

type MapStateToPropsType = {
	isAuth: boolean,
	login: string | null,
	photos: UserPhotosType
}

type MapDispatchToPropsType = {
	authThunkCreator: () => void;
}

export type HeaderType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		photos: state.auth.photos
	}
}

export default connect(mapStateToProps, {
	authThunkCreator
} as MapDispatchToPropsType)(HeaderContainer);