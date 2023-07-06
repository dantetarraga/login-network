import { FormDataType, LoginForm } from "components/Pages/Login/LoginForm/LoginForm";
import { PageTemplate } from "components/common/PageTemplate/PageTemplate"

export const Login = () => {

	const onSubmit = (formData: FormDataType) => {
		console.log(formData);
	}

	return (
		<PageTemplate pageTitle="Login">
			<LoginForm onSubmit={onSubmit} />
		</PageTemplate>
	);
}