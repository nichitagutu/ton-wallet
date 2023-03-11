import React from "react";

class MenuDropdown extends React.Component {
  render() {
    return (
      <div id="menuDropdown" className="visibility-hidden">
        <div id="menu_extension_chrome" className="dropdown-item">
          Chrome Extension
        </div>
        <div id="menu_extension_firefox" className="dropdown-item">
          Firefox Add-on
        </div>
        <div id="menu_about" className="dropdown-item">
          About
        </div>
        <div id="menu_magic" className="dropdown-item">
          TON Magic <div className="dropdown-toggle" />
        </div>
        <div id="menu_telegram" className="dropdown-item">
          Open Telegram Web »
        </div>
        <div id="menu_proxy" className="dropdown-item">
          TON Proxy <div className="dropdown-toggle" />
        </div>
        <div id="menu_changePassword" className="dropdown-item">
          Change password
        </div>
        <div id="menu_backupWallet" className="dropdown-item">
          Back up wallet
        </div>
        <div id="menu_delete" className="dropdown-item">
          Log Out
        </div>
      </div>
    );
  }
}

export default MenuDropdown;
