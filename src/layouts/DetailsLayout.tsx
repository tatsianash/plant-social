import React from "react";
import { Outlet } from "react-router-dom";

const DetailsLayout = () => {
	return (
		<>
			<div>DetailsLayout</div>
			<Outlet />
		</>
	);
};

export default DetailsLayout;
