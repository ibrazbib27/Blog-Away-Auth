import * as React from "react";
import Modal from "react-bootstrap/Modal";
import SuccessAlert from "../alert/SuccessAlert";
import { RouteComponentProps } from "react-router-dom";

export interface ModalProps extends RouteComponentProps<any> {
    open_mod: boolean;
    close_func: any;
    show_func: any;
    heading: string;
    body: string;
}

const WarningAlertModal: React.FC<ModalProps> = (props) => {
    return (
        <>
            <Modal
                className={"text-center"}
                show={props.open_mod}
                onHide={props.close_func}
            >
                <SuccessAlert
                    heading={props.heading}
                    body={props.body}
                    open_alert={props.open_mod}
                    close_func={props.close_func}
                    show_func={props.show_func}
                    history={props.history}
                    location={props.location}
                    match={props.match}
                />
            </Modal>
        </>
    );
};

export default WarningAlertModal;
