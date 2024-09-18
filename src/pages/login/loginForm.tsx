import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {PhoneInput} from "@/components/ui/phone-input";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {isValidPhoneNumber} from "react-phone-number-input";
import * as z from "zod";

const FormSchema = z.object({
  phone: z
    .string()
    .refine(isValidPhoneNumber, {message: "Invalid phone number"}),
});

type UserFormValue = z.infer<typeof FormSchema>;

type loginProps = {
  setFormType: React.Dispatch<React.SetStateAction<string>>;
};

export default function LoginFormComponent({setFormType}: loginProps) {
  const [loading] = useState(false);
  const form = useForm<UserFormValue>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
    },
    // defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {
    console.log("data", data);
    setFormType("otp");
    // router.push("/admin/dashboard");
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-2"
        >
          <FormField
            control={form.control}
            name="phone"
            render={({field}) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel className="text-left">Phone Number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder="Enter a phone number"
                    defaultCountry="IN"
                    international
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-left text-xs">
                  {`We respect privacy. Your number won't be shared.`}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="ml-auto w-full" type="submit">
            Continue With Phone
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </>
  );
}
