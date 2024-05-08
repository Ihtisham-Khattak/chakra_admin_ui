## Table of Contents

- [Purity UI Dashboard](https://demos.creative-tim.com/purity-ui-dashboard/#/admin/dashboard?ref=readme-pud)
- [Table of Contents](#table-of-contents)
- [Versions](#versions)
- [Demo](#demo)
- [Quick start](#quick-start)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Licensing](#licensing)
- [Useful Links](#useful-links)
- [Social Media](#social-media)

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/react-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/purity-ui-dashboard?ref=readme-pud)[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/figma-logo.jpg?raw=true" width="60" height="60" />](https://www.creative-tim.com/product/purity-ui-dashboard?ref=readme-pud)

| React                                                                                                                                                                                        | Figma                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Purity Free ReactJS Chakra Dashboard](https://i.ibb.co/Ct9RvRZ/Cover-Purity-Chakra-FREE-Thumbnail-React-JS.png)](https://www.creative-tim.com/product/purity-ui-dashboard?ref=readme-pud) | [![Purity Free Figma Chakra Dashboard](https://i.ibb.co/wRK0jbK/Cover-Purity-Chakra-FREE-Thumbnail-Figma.png)](https://www.creative-tim.com/product/purity-ui-dashboard?ref=readme-pud) |


## Quick Start

- Clone the repo: `git clone https://github.com/Ihtisham-Khattak/chakra_admin_ui.git`.
- `cd chakra_admin_ui`
- `npm install`
- `npm start`

## File Structure

Within the download you'll find the following directories and files:

```
purity-ui-dashboard/
├── .gitattributes
├── .gitigonore
├── CHANGELOG.md
├── commit.sh
├── gulpfile.js
├── ISSUE_TEMPLATE.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
├── documentation
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── img
    │   └── svg
    ├── components
    │   ├── Card
    │   │   ├── Card.js
    │   │   ├── CardBody.js
    │   │   └── CardHeader.js
    │   ├── Charts
    │   │   ├── BarChart.js
    │   │   └── LineChart.js
    │   ├
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Icons
    │   │   ├── IconBox.js
    │   │   └── Icons.js
    │   ├── Layout
    │   │   ├── MainPanel.js
    │   │   ├── PanelContainer.js
    │   │   └── PanelContent.js
    │   ├── Menu
    │   │   └── ItemContent.js
    │   ├── Navbars
    │   │   ├── AdminNavbar.js
    │   │   ├── AdminNavbarLinks.js
    │   │   └── AuthNavbar.js
    │   ├── Other
    │   │   ├── BillingRow.js
    │   │   ├── InvoicesRow.js
    │   │   └── TransactionRow.js
    │   ├── Separator
    │   │   └── Separator.js
    │   ├── Sidebar
    │   │   ├── Sidebar.js
    │   │   └── SidebarHelp.js
    │   └── Tables
    │       ├── BillingRow.js
    │       ├── DashboardTableRow.js
    │       ├── InvoicesRow.js
    │       ├── TablesProjectRow.js
    │       ├── TablesTableRow.js
    │       ├── TimelineRow.js
    │       └── TransactionRow.js
    ├── layouts
    │   ├── Admin.js
    │   ├── Auth.js
    │   └── RTL.js
    ├── theme
    │   ├── additions
    │   │   ├── card
    │   │   │   ├── Card.js
    │   │   │   ├── CardBody.js
    │   │   │   └── CardHeader.js
    │   │   ├── layout
    │   │   │   ├── MainPanel.js
    │   │   │   ├── PanelContainer.js
    │   │   │   └── PanelContent.js
    │   ├── components
    │   │   ├── button.js
    │   │   ├── link.js
    │   │   └── drawer.js
    │   ├── foundations
    │   │   ├── breakpoints.js
    │   │   └── text.js
    │   ├── styles.js
    │   └── theme.js
    ├── variables
    │   ├── charts.js
    │   └── general.js
    ├── views
    │   ├── Dashboard
    │   │   ├── Billing.js
    │   │   ├── Dashboard.js
    │   │   ├── Profile.js
    │   │   └── Tables.js
    │   ├── Pages
    │       ├── SignIn.js
    │       └── SignUp.js
    │   └── RTL
    │       └── RTLPage.js
    ├── index.js
    └── routes.js