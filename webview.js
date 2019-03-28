const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const inbox = document.querySelector('.SidebarTopNavLinks-notificationsButton--hasNewNotifications');
    const passiveCount = inbox === null ? 0 : 1;
    Franz.setBadge(0, passiveCount);
  };

  Franz.injectCSS(path.join(__dirname, 'style.css'));
  Franz.loop(getMessages);
};