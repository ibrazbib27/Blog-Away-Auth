import * as React from "react";
import { useState } from "react";
import SignOut from "../modal/SignOut";
import { Link, RouteComponentProps } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

interface LinksProps extends RouteComponentProps<any> {}

const MyLinks: React.FC<LinksProps> = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Nav.Link
                as={Link}
                to={{ pathname: "/", state: { prevPath: props.location.pathname } }}
                eventKey="1"
                className="nav-color"
            >
                Home
            </Nav.Link>

            <Nav.Link
                as={Link}
                to={{
                    pathname: "/about",
                    state: { prevPath: props.location.pathname },
                }}
                eventKey="2"
                className="nav-color"
            >
                About
            </Nav.Link>

            {localStorage.getItem("token") !== null ? (
                localStorage.getItem("role") === "member" ? null : (
                    <Nav.Link
                        as={Link}
                        className="nav-color"
                        to={{
                            pathname: "/admin",
                            state: { prevPath: props.location.pathname },
                        }}
                        eventKey="3"
                    >
                        Admin Management
                    </Nav.Link>
                )
            ) : (
                <Nav.Link
                    as={Link}
                    className="nav-color"
                    to={{
                        pathname: "/login",
                        state: { prevPath: props.location.pathname },
                    }}
                    eventKey="3"
                >
                    Login
                </Nav.Link>
            )}
            {localStorage.getItem("token") !== null ? (
                <Nav.Link
                    as={Link}
                    className="nav-color"
                    to={{ pathname: props.location.pathname, state: {} }}
                    onClick={handleShow}
                    eventKey="4"
                >
                    Sign Out
                </Nav.Link>
            ) : null}

            <SignOut
                open_mod={show}
                close_func={handleClose}
                show_func={handleShow}
                location={props.location}
                match={props.match}
                history={props.history}
            />
        </>
    );
};

export default MyLinks;
