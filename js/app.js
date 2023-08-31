const notificationButton = document.getElementById('notificationButton');
const notifications = document.getElementById('notifications');

notificationButton.addEventListener('click', () => {
    notifications.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!notifications.contains(event.target) && event.target !== notificationButton) {
        notifications.classList.remove('active');
    }
});