const request = (() => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const send = async <T>(url: string, options?: {}) => {
    const result = await fetch(url, { ...options, ...defaultOptions });
    const data = await result.json();
    return data as T;
  };

  return {
    get: <T>(url: string) => send<T>(url),
  };
})();

export default request;
