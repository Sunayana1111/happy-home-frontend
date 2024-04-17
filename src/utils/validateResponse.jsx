import { toast } from "react-toastify";

export const validateResponse = (response) => {
  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      toast.error("Authorization Access not granted for the user.");
      window.location.replace("/login");
    } else {
      // Handle other errors
      throw new Error("Network response failed");
    }
  }
};
