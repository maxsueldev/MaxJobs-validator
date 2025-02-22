import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Vantagem from "../../components/Vantagem";
import Input from "../../components/Input";

const registerSchema = z.object({
  name: z.string().min(1, { message: "Informe seu nome" }),
  email: z
    .string()
    .min(1, { message: "Informe seu email" })
    .email({ message: "Informe um email válido" }),
  password: z
    .string()
    .min(1, { message: "Informe sua senha" })
    .min(5, { message: "Sua senha deve conter pelo menos 5 caracteres" }),
  cep: z
    .string()
    .min(1, { message: "Informe seu CEP" })
    .min(8, { message: "Seu CEP deve conter pelo menos 8 carateres" })
    .max(10, { message: "Seu CEP deve conter no máximo 10 caracteres" }),
  role: z.string().min(1, { message: "Informe seu cargo" }),
  privacyTerms: z.literal(true, {
    errorMap: () => ({ message: "Você deve aceitar os termos de privacidade" }),
  }),
  autorization: z.boolean(),
});

type RegisterSchema = z.infer<typeof registerSchema>;

export default function MaxJobs() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema): void => console.log(data);

  return (
    <div className="w-full h-dvh flex flex-col md:flex-row">
      <div className="bg-[url(/assets/add-candidate.jpg)] bg-center bg-cover bg-no-repeat w-full h-dvh text-white py-7 px-5 md:w-[33%]">
        <h1 className="text-4xl font-bold">MaxJobs</h1>
        <div className="mt-84 md:mt-45">
          <h2 className="font-semibold text-2xl">
            O emprego que você procura está no MaxJobs!
          </h2>
          <div className="ml-6 mt-4 text-[1.05rem] space-y-1">
            <Vantagem text="Candidate-se às melhores vagas do país." />
            <Vantagem text="Fique visível para milhares de empresas." />
            <Vantagem text="Receba vagas adequadas ao seu perfil." />
            <Vantagem text="Conheça as empresas por dentro." />
          </div>
        </div>
      </div>
      <div className="w-full h-dvh px-9 py-9 md:w-[67%]">
        <p className="text-right text-sm">
          Já usa o MaxJobs?
          <a href="#" className="text-blue-800">
            Login
          </a>
        </p>
        <h1 className="text-center text-3xl font-bold mt-8">
          O seu próximo emprego está aqui.
        </h1>
        <p className="text-center text-xl mt-2">
          Acesse e candidate-se à milhares de vagas.
        </p>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-3 mt-12 xl:w-[50%]"
          >
            <div>
              <Input
                className={errors?.name && "input-error"}
                type="text"
                placeholder="Nome:"
                {...register("name")}
              />

              {errors?.name && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Input
                className={errors?.email && "input-error"}
                type="email"
                placeholder="Email:"
                {...register("email")}
              />

              {errors?.email && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Input
                className={errors?.password && "input-error"}
                type="password"
                placeholder="Senha:"
                {...register("password")}
              />

              {errors?.password && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <Input
                className={errors?.cep && "input-error"}
                type="text"
                placeholder="CEP:"
                {...register("cep")}
              />

              {errors?.cep && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.cep.message}
                </p>
              )}
            </div>
            <div>
              <Input
                className={errors?.role && "input-error"}
                type="text"
                placeholder="Cargo:"
                {...register("role")}
              />

              {errors?.role && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.role.message}
                </p>
              )}
            </div>

            <div>
              <input
                className="mr-2"
                type="checkbox"
                {...register("privacyTerms")}
              />
              Lí e aceito as Condições Legais e a Política de Privacidade do
              MaxJobs.
              {errors?.privacyTerms && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.privacyTerms.message}
                </p>
              )}
            </div>

            <div>
              <input
                className="mr-2"
                type="checkbox"
                {...register("autorization")}
              />
              Autorizo o Maxjobs a enviar comunicações comerciais sobre
              produtos, serviços e eventos dos seus parceiros e colaboradores.
            </div>
            <button
              className="border rounded-[.4rem] px-8 py-1 bg-blue-600 text-white cursor-pointer"
              type="submit"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
