import { useState } from 'react';
import axios from 'axios';

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (config) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, sendRequest };
};

export default useApi;
