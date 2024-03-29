import cls from 'components/Pages/Profile/EditProfile/EditProfile.module.scss';
import { PageTemplate } from "components/common/PageTemplate/PageTemplate";
import { Button } from 'components/common/Button/Button';
import { Input } from 'components/common/Input/Input';
import { RiCheckFill } from 'react-icons/ri';

export const EditProfile = () => {

	const applyChanges = () => {
		alert('Sending changes...')
	}

	return (
		<PageTemplate pageTitle="Profile Settings">
			<div className={cls.header}>
				<div className={cls.photoBlock}>
					area for photo changing
				</div>
				<div className={cls.rightColumn}>
					<Input ID='fullName' title='Full Name' value={''} onChange={() => { }} />
				</div>
			</div>
			<div className={cls.footer}>
				<Button mainColor='Main' size='large' onClick={applyChanges}>Apply <RiCheckFill size={'1.125rem'} /></Button>
			</div>
		</PageTemplate>
	);
}