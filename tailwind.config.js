/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Layout colors
        headerBackground: '#03122F',
        headerText: '#FFFFFF', // White for better contrast
        headerSubtext: '#0A7075',
        headerBorder: '#ED9E59',
        
        // Header Button
        headerButtonBackground: '#0A7075',
        headerButtonBackgroundHover: '#088C8C',  // Darker shade for better hover visibility
        headerButtonText: '#FFFFFF',
        headerButtonTextHover: '#333333',
        
        // Navbar
        navbarBackground: '#19305C',
        navbarText: '#FFFFFF',
        navbarTextHover: '#0A7075',
        navbarBorder: '#0A7075',
        
        // Body
        bodyBackground: '#F1916D',
        bodyText: '#333333',
        bodyTextHover: '#0A7075',

        //main Content
        mainContentBackground: '#FFFFFF',
        mainContentText: '#333333',
        mainContentTextHover: '#0A7075',
        mainContentBorder: '#0A7075',
        mainContentButtonBackground: '#0A7075',

        
        // Footer
        footerBackground: '#F3DADF',
        footerText: '#333333',
        
        // Navigation colors
        navLinkBackground: '#ED9E59',
        navLinkBackgroundHover: '#274D60',
        navLinkText: '#FFFFFF',
        navLinkTextHover: '#0A7075',
        
        // Menu
        menuBackground: '#19305C',
        menuBackgroundHover: '#0A7075',
        menuText: '#FFFFFF',
        menuTextHover: '#0C969C',
        
        // Menu items
        menuItemBackground: '#F3DADF',
        menuItemText: '#333333',
        menuItemActiveBackground: '#0A7075',
        menuItemTextHover: '#0C969C',
        menuItemBorder: '#0A7075',
        
        // Buttons
        loginButtonBackground: '#0A7075',
        loginButtonBackgroundHover: '#088C8C',  // Darker for better hover contrast
        loginButtonText: '#FFFFFF',
        loginButtonTextHover: '#333333',
        
        deleteButtonBackground: '#ED9E59',
        deleteButtonBackgroundHover: '#274D60',
        deleteButtonText: '#FFFFFF',
        deleteButtonTextHover: '#FFFFFF',
        
        updateButtonBackground: '#0A7075',
        updateButtonBackgroundHover: '#088C8C',  // Darker hover shade
        updateButtonText: '#FFFFFF',
        updateButtonTextHover: '#333333',
        
        // Form
        formBackground: '#F9F9F9',
        formText: '#333333',
        formTextHover: '#0A7075',
        
        // Table
        tableBackground: '#F3DADF',
        tableText: '#333333',
        tableTextHover: '#0A7075',
        
        // Cards
        firstCardBackground: '#FFFFFF',
        firstCardText: '#333333',
        firstCardSubtext: '#0A7075',
        firstCardTextHover: '#0C969C',
        firstCardIconColor: '#0A7075',
        firstCardIconBackground: '#274D60',
        firstCardLink: '#0A7075',
        firstCardLinkHover: '#0C969C',
        
        // Modal
        modalBackground: '#FFFFFF',
        modalText: '#333333',
        modalTextHover: '#0A7075',
        
        // Alerts
        alertBackground: '#0A7075',
        alertText: '#FFFFFF',
        alertTextHover: '#0C969C',
        
        // Icons
        iconBackground: '#E0E0E0',
        iconBackgroundHover: '#0A7075',
        iconText: '#333333',
        iconTextHover: '#0A7075',
        
        // Pagination
        paginationBackground: '#F3DADF',
        paginationText: '#0A7075',
        paginationTextHover: '#0C969C',
        
        // Not found
        notfoundBackground: '#F3DADF',
        notfoundText: '#333333',
        notfoundTextHover: '#0A7075',
    }
    
    },
  },
  plugins: [],
}

