export const toastNotification = ({title, description, status}) => {
    // toast notification logic
    console.log(`Toast Notification: ${title} - ${description} - ${status}`);
};

export const sendNativeNotification = ({title, body}) => {
    // native notification logic
    console.log(`Native Notification: ${title} - ${body}`);
};