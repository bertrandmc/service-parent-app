
export const loadScript = ({ host, componentName }) => {
  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script');
      script.src = `${host}/${componentName}.js`;
      script.onload = () => resolve();
      document.head.appendChild(script);
    } catch (err) {
      reject(err);
    }
  });
};
