import cls from 'components/Layout/Sidebar/Sidebar.module.scss';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { RiNewspaperLine } from 'react-icons/ri';
import { RiSettings3Line } from 'react-icons/ri';
import { RiMusic2Line } from 'react-icons/ri';
import { RiUser3Line } from 'react-icons/ri';
import { RiTeamLine } from 'react-icons/ri';
import classNames from 'classnames';

export const Sidebar = () => {

	const match = useRouteMatch<{ userID: string }>('/profile/:userID?');

	const isActive = classNames('', {
		[cls.activeLink]: !match?.params.userID,
	});

	return (
		<aside className={cls.sidebar}>
			<nav>
				<ul>
					<li>
						<NavLink
							activeClassName={isActive}
							className={cls.link}
							to={'/social-network/profile'}
						>
							<RiUser3Line size={'1.125rem'} /> Profile
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={cls.activeLink}
							className={cls.link}
							to={'/social-network/messages'}
						>
							<RiQuestionAnswerLine size={'1.125rem'} />Messages
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={cls.activeLink}
							className={cls.link}
							to={'/social-network/users'}
						>
							<RiTeamLine size={'1.125rem'} />Users
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={cls.activeLink}
							className={cls.link}
							to={'/social-network/news'}
						>
							<RiNewspaperLine size={'1.125rem'} />News
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={cls.activeLink}
							className={cls.link}
							to={'/social-network/music'}
						>
							<RiMusic2Line size={'1.125rem'} />Music
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={cls.activeLink}
							className={cls.link}
							to={'/social-network/settings'}
						>
							<RiSettings3Line size={'1.125rem'} />Settings
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}