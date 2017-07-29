export default function getBaseUrl() {
    const inDevelopment = window.location.hostname === 'localhost';
    // mock api is hosted on port 3001
    return inDevelopment ? 'http://localhost:3001/' : '/';
}
