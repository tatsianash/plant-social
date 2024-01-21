import React from "react";
import { Outlet } from "react-router-dom";
import MainContainer from "../containers/MainContainer";

const DetailsLayout = () => {
	return (
		<MainContainer>
			<div>DetailsLayout</div>
			<Outlet />
		</MainContainer>
	);
};

export default DetailsLayout;
