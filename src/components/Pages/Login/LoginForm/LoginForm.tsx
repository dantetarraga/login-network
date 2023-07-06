import cls from 'components/Pages/Login/LoginForm/LoginForm.module.scss';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Button } from 'components/common/Button/Button';
import { FC } from 'react';

export type FormDataType = {
	login: string,
	password: string,
	rememberMe: boolean
}

const Form: FC<InjectedFormProps<FormDataType>> = (props) => {

	return (
		<form className={cls.wrapper} onSubmit={props.handleSubmit}>
			<Field name="login" component={'input'} autoComplete='username' placeholder='Login' />
			<Field name="password" component={'input'} type="password" autoComplete='current-password' placeholder='Password' />
			<label htmlFor="rememberMe">
				<Field id="rememberMe" name="rememberMe" component={'input'} type="checkbox" />
				Remember me
			</label>
			<Button mainColor='Main' onClick={() => { }}>Log In</Button>
		</form>
	);
}

export const LoginForm = reduxForm<FormDataType>({
	form: 'login'
})(Form)