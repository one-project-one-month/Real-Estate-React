import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { LoginRequest, LoginResponse } from "@/types/types.auth";
import { useMutation } from "@tanstack/react-query";
import { loginAsync } from "@/services/services.auth";

const Login = () => {
  const form = useForm<LoginRequest>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const mutation = useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: loginAsync,
    onSuccess: (data) => {
      console.log("Logged in:", data);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const handleSubmit = async (data: LoginRequest) => {
    if (!data.email.trim() || !data.password.trim()) {
      toast.error("You have to fill all the fields.");
      return;
    }

    try {
      const res = await mutation.mutateAsync(data);

      // Set token in localStorage or zustand (depends)
      // Redirect accordingly
    } catch (error) {
      toast.error("Login failed. Check your credentials.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 p-6 bg-white rounded-xl shadow-md w-[350px]"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you.example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <PasswordInput field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default Login;
