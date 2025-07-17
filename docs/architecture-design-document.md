# Architecture Design Document

## 1. System Architecture

The Amazon Removal Fee Calculator is a client-side, single-page web application.

- **Frontend:** The user interface is built with HTML, CSS, and vanilla JavaScript. The application dynamically manipulates the DOM to provide a responsive and interactive user experience.
- **Data:** The fee schedule is hardcoded in the JavaScript code. This can be updated manually as Amazon's fees change.
- **Deployment:** The application is hosted as a static website on any standard web server.