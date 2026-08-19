import { Check, XCircle } from "lucide-react";
import { Toaster } from "react-hot-toast";

const ToastContainer = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      containerClassName="font-iranSans"
      toastOptions={{
        duration: 4000,
        success: {
          icon: (
            <div className="flex size-6">
              <Check size="24" className="fill-green-500  flex" />
            </div>
          ),
        },
        error: {
          icon: (
            <div className="flex size-6">
              <XCircle size="24" className="fill-red-600" />
            </div>
          ),
        },
      }}
    />
  );
};

export default ToastContainer;
