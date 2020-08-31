import * as React from "react";
import Modal from "react-bootstrap/Modal";
import WarningAlert from "../alert/WarningAlert";
import { RouteComponentProps } from "react-router-dom";

export interface ModalProps extends RouteComponentProps<any> {
    open_mod: boolean;
    close_func: any;
    show_func: any;
}

const WarningAlertModal: React.FC<ModalProps> = (props) => {
    return (
        <>
            <Modal show={props.open_mod} onHide={props.close_func} className={"text-center"}>
                <WarningAlert
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
