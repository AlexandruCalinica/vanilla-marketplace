export const signOut = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userId');
  window.location.assign('/client/index.html');
}