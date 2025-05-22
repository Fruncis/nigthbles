// components/DynamicForm.tsx
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";

export type FieldType = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "tel";
};

interface DynamicFormProps {
  fields: FieldType[];
  schema?: z.ZodType<any, any>; // opzionale
  defaultValues?: Record<string, string>;
  message: string;
  api: string;
}



export function DynamicForm({
  fields,
  schema,
  defaultValues = {},
  message,
  api
}: DynamicFormProps) {
  const API = api;
  function onSubmit(values: Record<string, string>) {
      const promise = fetch(API, {method: "POST", body: JSON.stringify(values)})
      toast.promise(promise, {
      loading: "Caricamento in corso...",
      success: () => {
        return {
          message: `Ciao ${values.full_name} ${message}`,
          
        };
      },
      error: "errore"
      });
    }
  
  const form = useForm({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full"
      >
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={field.placeholder}
                    type={field.type || "text"}
                    {...formField}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Invia</Button>
      </form>
    </Form>
  );
}
