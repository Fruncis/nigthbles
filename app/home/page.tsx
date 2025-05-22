"use client"

import { toast, Toaster } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import { z } from "zod"
import { DynamicForm, FieldType } from "@/components/ui/dynamicForm";
import { ReusableDialog } from "@/components/ui/reusableDialog";



const formSchemaRegistrazione = z.object({
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

const formSchemaLogin = z.object({
  email: z.string().email({message: "Email non valida"}),
  password_hash: z.string().min(8, 
    {
      message: "La password deve contenere almeno 8 caratteri"
    })
  .max(50, 
    {
      message: "La password non può superare i 50 caratteri"
    }),

})

const fields: FieldType[] = [
    { name: "email", label: "Email", placeholder: "Inserisci la tua email", type: "email" },
    { name: "full_name", label: "Nome completo", placeholder: "Mario Rossi" },
    { name: "password_hash", label: "Password", placeholder: "●●●●●", type: "password" },
    { name: "phone_number", label: "Numero di telefono", placeholder: "331..." },
  ];

  const fieldsLogin: FieldType[] = [
    { name: "email", label: "Email", placeholder: "Inserisci la tua email", type: "email" },
    { name: "password_hash", label: "Password", placeholder: "●●●●●", type: "password" },
  ];
  


export default function HomePage() {
  

  // 2. Define a submit handler.
  
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
          <ReusableDialog 
            style="bg-[#7C0CC1] hover:bg-[#6601a4] text-white text-lg px-6 py-2 rounded-2xl"
            triggerLabel="Registrati"
            title="Inserisci i tuoi dati"
          >
            <DynamicForm fields={fields} schema={formSchemaRegistrazione} message="benvenuto in Nightbles 🎇" api="/server/api/v1/auth/register"></DynamicForm>

          </ReusableDialog>
          <ReusableDialog 
            style="text-black bg-white text-lg px-6 py-2 rounded-2xl hover:bg-gray-200"
            triggerLabel="Login"
            title="Inserisci i tuoi dati"
          >
            <DynamicForm fields={fieldsLogin} schema={formSchemaLogin} message="bentornato! Ti stavamo aspettando 🤩" api="/server/api/v1/auth/login"></DynamicForm>

          </ReusableDialog>

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
