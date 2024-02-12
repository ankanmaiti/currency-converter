import { useEffect, useState } from "react";

export default function useBrowserStorage(storageName = "sessionStorage") {
  const storage = storageName == "localStorage" ? localStorage : sessionStorage;
  const [storageKey, setStorageKey] = useState();
  const [storedData, setStoredData] = useState();

  function setNewStorageData(key, value) {
    storage.setItem(key, JSON.stringify(value));
    return value;
  }

  useEffect(() => {
    const data = storage.getItem(storageKey);
    data && setStoredData(JSON.parse(data));

    return () => {
      setStoredData(null);
    };
  }, [storageKey]);

  useEffect(() => {
    storedData && setNewStorageData(storageKey, storedData);
  }, [storedData]);

  return {
    storedData,
    setStorageKey,
    setStoredData,
    setNewStorageData,
  };
}
