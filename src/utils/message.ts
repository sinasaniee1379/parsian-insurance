import toast from "react-hot-toast";

export const loadingMessage = (message: string) => {
  toast.loading(message, {});
};

export const errorMessage = (message: string) => {
  toast.error(message, {});
};

export const successMessage = (message: string) => {
  toast.success(message, {});
};
