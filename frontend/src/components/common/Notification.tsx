import { Store } from "react-notifications-component"

function Notification(type: string, message: string): void {
    Store.addNotification({
        title: type === "success" ? "Success" : "Warning!",
        message: message || "",
        type: type === "success" ? "success" : "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true
        }
    })
}

export default Notification
