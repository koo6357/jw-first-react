declare global {
  interface Window {
    onChildWindowClose?: () => void;
  }
}

export default global;
