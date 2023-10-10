<script setup lang="ts">
import { ref } from "vue";
import { objectToCssClasses as convert } from "../utils/objectToCssClasses";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

type Data = {
  name: string;
  tel: string;
  message: string;
  email: string;
};

const initialFormData = () => ({
  name: "",
  tel: "",
  message: "",
  email: "",
});

const data = ref<Data>(initialFormData());

const notify = (msg: string) => {
  toast.success(`${msg}!`, {
    autoClose: 1000,
  }); // ToastOptions
  return { notify };
};

const handlesubmit = () => {
  notify(`Usuário ${data.value.name} cadastrado com sucesso!`);

  data.value = initialFormData();
};

const { container, title, form, input, submit } = {
  container: {
    background: "bg-brand-light",
    spacing: "pt-16",
    sizes: "w-screen",
  },

  title: {
    tipograph: "text-dark-10 font-Merriweather text-[2rem]",
    alignments: "text-center",
  },

  form: {
    display: "flex",
    size: "w-[373px] max-w-[90vw]",
    alignments: "flex-col",
    spacing: "gap-5 px-3 pt-7 pb-10 mx-auto",
  },

  input: {
    background: "bg-dark-40",
    spacing: "ps-2 py-4",
    border: "rounded-[.3rem]",
    tipograph: "text-[18px]",
    placeholder:
      "placeholder:text-[18px] placeholder:text-dark-20 placeholder:opacity-75",
  },

  submit: {
    background: "bg-brand",
    spacing: "py-2",
    border: "rounded-[.3rem]",
    tipograph: "text-dark-40",
    states: "hover:brightness-95 active:brightness-90",
  },
};
</script>

<template>
  <div :class="convert(container)">
    <h2 :class="convert(title)">Entre em contato</h2>
    <form @submit.prevent="handlesubmit" :class="convert(form)">
      <input
        type="text"
        v-model="data.name"
        :class="convert(input)"
        required
        name="name"
        placeholder="Nome"
      />
      <input
        type="email"
        v-model="data.email"
        :class="convert(input)"
        required
        name="email"
        placeholder="E-mail"
      /><input
        type="text"
        v-model="data.tel"
        :class="convert(input)"
        required
        name="tel"
        placeholder="Telefone"
      />
      <textarea
        v-model="data.message"
        class="min-h-[10rem] resize-none"
        :class="convert(input)"
        name="message"
        placeholder="Messagem..."
      ></textarea>
      <input :class="convert(submit)" type="submit" value="Enviar mensagem" />
    </form>
  </div>
</template>
