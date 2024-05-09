import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const successAlert = (message) => {
    toast.success(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

const errorAlert = (message) => {
    toast.error(message, {
        position: "bottom-center",
        autoClose: 15000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

export {
    successAlert,
    errorAlert
}