export const validEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    return false;
  }

  return true;
};

export const handleOpenLink = (url) => {
  window.open(url, "_blank");
};
