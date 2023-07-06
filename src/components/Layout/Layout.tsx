import HeaderContainer from "./Header/HeaderContainer";
import { FC, ReactNode } from "react";
import { Sidebar } from "./Sidebar/Sidebar";


type LayoutType = {
	children: ReactNode
}

export const Layout: FC<LayoutType> = ({ children }) => {

	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<Sidebar />
			<main className='content'>
				{children}
			</main>
		</div>
	);
}