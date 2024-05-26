import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Box m="20px">
				<Outlet />
			</Box>
		</>
	);
};

export default Layout;
