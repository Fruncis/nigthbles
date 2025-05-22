"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { NextResponse } from "next/server";

const formSchema = z.object({
  full_name: z.string().min(3, 
    {
      message: "Il nome deve contenere almeno 8 caratteri",
    }).max(50, 
    {
      message: "Il nome non può superare i 50 caratteri"
    }),
  email: z.string().email({message: "Email non valida"}),
  password_hash: z.string().min(8, 
    {
      message: "La password deve contenere almeno 8 caratteri"
    })
  .max(50, 
    {
      message: "La password non può superare i 50 caratteri"
    }),
  phone_number: z.string().length(10, {message: "Il numero di telefono deve avere 10 numeri"}),
})

  // 1. Define your form.
  


export default function HomePage() {
  const [open, setOpen] =  useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password_hash: "",
      phone_number: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const promise = fetch("/server/api/v1/auth/register", {method: "POST", body: JSON.stringify(values)})
    .then(async (res)=>{
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Errore generico");
      return data;
    })
    .catch((err)=>{
      throw new Error("Errore: " + err.message);
    })
    toast.promise(promise, {
    loading: "Caricamento in corso...",
    success: () => {
      return {
        message: `Ciao ${values.full_name} benvenuto in Nightbles🎇`,
      };
    },
    error: "errore"
    });
  }
  return (
    <main className="bg-[#0A0025] min-h-screen text-white px-4 md:px-20 py-10">
      <Toaster position="top-center"></Toaster>
      {/* HERO SECTION */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          La tua notte <br /> inizia qui.
        </h1>
        <p className="text-lg md:text-xl text-white/80">
          Prenota, entra, vivi la notte senza attese.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          {/*<Button className="bg-[#7C0CC1] hover:bg-[#6601a4] text-white text-lg px-6 py-2 rounded-2xl">
            Scopri i locali
          </Button>
          <Button className="text-black bg-white text-lg px-6 py-2 rounded-2xl hover:bg-gray-200">
            Scarica l'app
          </Button>*/}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="bg-[#7C0CC1] hover:bg-[#6601a4] text-white text-lg px-6 py-2 rounded-2xl">
              Registrati
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Inserisci i tuoi dati</DialogTitle>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="full_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome completo</FormLabel>
                          <FormControl>
                            <Input placeholder="nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password_hash"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Num. di telefono</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="numero di telefono" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" onClick={()=> setOpen(false)}>Registrati</Button>
                  </form>
                </Form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog >
            <DialogTrigger className="text-black bg-white text-lg px-6 py-2 rounded-2xl hover:bg-gray-200">
              Login
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Inserisci i tuoi dati</DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>

        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-10">Come funziona nightbles?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white/90">
          <div className="flex flex-col items-center space-y-2">
            <MapPin className="w-10 h-10 text-[#7C0CC1]" />
            <p>1. Scegli il locale</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Calendar className="w-10 h-10 text-[#7C0CC1]" />
            <p>2. Prenota in anticipo</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Clock className="w-10 h-10 text-[#7C0CC1]" />
            <p>3. Entra e divertiti!</p>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS SECTION */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10">Locali in evidenza</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <Card key={i} className="bg-[#12003E] border-none text-white rounded-2xl overflow-hidden">
              <img
                src="/club-night.jpg"
                alt="Evento"
                className="w-full h-52 object-cover"
              />
              <CardContent className="p-4 space-y-1">
                <div className="flex justify-between text-sm text-white/60">
                  <span>Ven 30 Mar</span>
                  <span>23:00</span>
                </div>
                <h3 className="text-lg font-semibold">Saturday Night Fever</h3>
                <p className="text-sm text-[#9b8bff]">@Club Eclipse🔥</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
