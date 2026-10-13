import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name."),
  email: z.email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Please write a short message (10+ characters).").max(3000),
});
