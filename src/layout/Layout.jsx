import React from "react";
import { useSelector } from "react-redux";
import { PreLoginRoutes, ClientRoutes, FreelancerRoutes } from "../routes";

export default function Layout() {
    const userType = useSelector((state) => state.user.userType)

    if ( userType === 'client' ) {
        return <ClientRoutes />
    } else if ( userType === 'freelancer' ) {
        return <FreelancerRoutes />
    } else {
        return <PreLoginRoutes />
    }
}