export default function isAuthenticated() {
  return localStorage.getItem('login') !== null;
}
