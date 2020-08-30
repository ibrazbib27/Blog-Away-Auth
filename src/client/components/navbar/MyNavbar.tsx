import * as React from "react";
import { useEffect } from "react";
import * as $ from "jquery";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import MyLinks from "./MyLinks";
import { RouteComponentProps } from "react-router-dom";

interface NavbarProps extends RouteComponentProps<any> {}

const MyNavbar: React.FC<NavbarProps> = (props) => {
    const MAX_WIDTH: number = 991.98;
    useEffect(() => {}, []);
    let activeCheck = () => {
        $("#main-nav").find(".nav-active-color").addClass("nav-color");
        $("#main-nav").find(".nav-active-color").removeClass("nav-active-color");
    };
    let changeClass = (size: boolean) => {
        if (size) {
            if (localStorage.getItem("token") !== null) {
                if (localStorage.getItem("role") === "admin")
                    $("#main-nav").attr(
                        "class",
                        "ml-auto w-75 d-flex justify-content-between"
                    );
                else
                    $("#main-nav").attr(
                        "class",
                        "ml-auto w-50 d-flex justify-content-between"
                    );
            } else
                $("#main-nav").attr(
                    "class",
                    "ml-auto w-50 d-flex justify-content-between"
                );
            $("#main-nav")
                .find("a")
                .each(function () {
                    ["border", "border-white", "mx-3", "my-3"].map((removeClass) =>
                        $(this).removeClass(removeClass)
                    );
                });
        } else {
            $("#main-nav").attr(
                "class",
                "mx-auto w-100 text-center mx-5 my-3  border border-white rounded mb-2"
            );
            $("#main-nav")
                .find("a")
                .each(function () {
                    ["border", "border-white", "mx-3", "my-3"].map((addClass) =>
                        $(this).addClass(addClass)
                    );
                });
        }
    };
    $(document).ready(function () {
        $("#main-nav").removeAttr("class");
        switch (window.location.pathname) {
            case "/admin":
                activeCheck();
                $("a:nth-child(3)").removeClass("nav-color");
                $("a:nth-child(3)").addClass("nav-active-color");
                break;
            case "/about":
                activeCheck();
                $("a:nth-child(2)").removeClass("nav-color");
                $("a:nth-child(2)").addClass("nav-active-color");
                break;
            case "/login":
                activeCheck();
                $("a:nth-child(3)").removeClass("nav-color");
                $("a:nth-child(3)").addClass("nav-active-color");
                break;
            default:
                activeCheck();
                $("a:nth-child(1)").removeClass("nav-color");
                $("a:nth-child(1)").addClass("nav-active-color");
                break;
        }

        if ($(this).width() >= MAX_WIDTH) changeClass(true);
        else changeClass(false);

        $(window).resize(function () {
            if ($(this).width() >= MAX_WIDTH) changeClass(true);
            else changeClass(false);
        });
    });

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand>Blog Away</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id="main-nav" className="">
                        <MyLinks
                            history={props.history}
                            location={props.location}
                            match={props.match}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default MyNavbar;
