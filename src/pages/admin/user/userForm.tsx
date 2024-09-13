import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

const studentFormSchema = z
  .object({
    firstname: z
      .string({required_error: "First name is required"})
      .min(1, {message: "firstname is should be at least 1 character"}),
    lastname: z.string().min(1, {message: "lastname is required"}),
    username: z.string().min(1, {message: "username is required"}),
    school: z.string().min(1, {message: "school is required"}),
    email: z.string().email({message: "Enter a valid email address"}),
    phone: z.string().min(1, {message: "Enter a valid phone number"}),
    password: z.string().min(1, {message: "Password is required"}),
    confirmPassword: z
      .string()
      .min(1, {message: "Confirm Password is required"}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type StudentFormSchemaType = z.infer<typeof studentFormSchema>;

const StudentCreateForm = () => {
  const form = useForm<StudentFormSchemaType>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {},
  });

  const onSubmit = (values: StudentFormSchemaType) => {
    console.log(values);
  };

  return (
    <div className="px-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          autoComplete="off"
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your firstname"
                      {...field}
                      className=" px-4 py-6 shadow-inner drop-shadow-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your lastname"
                      {...field}
                      className=" px-4 py-6 shadow-inner drop-shadow-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      {...field}
                      className=" px-4 py-6 shadow-inner drop-shadow-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="school"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your school"
                      {...field}
                      className=" px-4 py-6 shadow-inner drop-shadow-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className=" px-4 py-6 shadow-inner drop-shadow-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone"
                      {...field}
                      className=" px-4 py-6 shadow-inner drop-shadow-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      {...field}
                      className=" px-4 py-6 shadow-inner drop-shadow-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your confirmPassword"
                      {...field}
                      className=" px-4 py-6 shadow-inner drop-shadow-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-center gap-4 pt-3">
            <Button
              type="button"
              variant="outline"
              className="rounded-full "
              size="lg"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="rounded-full"
              size="lg"
              variant="destructive"
            >
              Create Student
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default StudentCreateForm;
