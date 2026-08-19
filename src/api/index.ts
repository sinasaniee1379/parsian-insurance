import { api } from "@/utils/axios";
import { errorMessage, successMessage } from "@/utils/message";
import { LeadFormData } from "@/validation";
import { useMutation } from "@tanstack/react-query";

export async function createLead(data: LeadFormData) {
  const response = await api.post("/leads", {
    ...data,

    // برای Honeypot بک‌اند
    website: "",
  });

  return response.data;
}

export function useCreateLead() {
  return useMutation({
    mutationFn: createLead,

    onSuccess(data) {
      console.log(data);
      successMessage(data?.message);
    },
    onError(error) {
      errorMessage(error.message);
    },
  });
}
