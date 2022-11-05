import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return <Breadcrumb separator=' ' p={20} fontWeight={700}>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {isLoggedIn && (
            <BreadcrumbItem>
                <BreadcrumbLink href="/contacts">Contacts</BreadcrumbLink>
            </BreadcrumbItem>)}
        </Breadcrumb>;
};

export default Navigation;