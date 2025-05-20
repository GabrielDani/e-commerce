import type { FormCheckout } from "@/types/formCheckout";
import { useState, useCallback } from "react";

export const useFormCheckout = () => {
  const [form, setForm] = useState<FormCheckout>({
    personalData: {
      name: "",
      surname: "",
      email: "",
      phone: "",
    },
    paymentData: {
      cardNumber: "",
      cvv: "",
      expiresAt: "",
    },
    address: {
      postalCode: "",
      street: "",
      number: 0,
      complement: "",
    },
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormCheckout, string>>
  >({});

  const updateField = useCallback(
    <T extends keyof FormCheckout>(
      section: T,
      field: keyof FormCheckout[T],
      value: FormCheckout[T][keyof FormCheckout[T]]
    ) => {
      setForm((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    },
    []
  );

  const validateForm = useCallback(() => {
    const newErrors: Partial<Record<keyof FormCheckout, string>> = {};

    if (!form.personalData.name.trim()) {
      newErrors.personalData = "Nome é obrigatório";
    }
    if (
      !form.personalData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.personalData.email)
    ) {
      newErrors.personalData = "Email inválido";
    }

    if (
      !form.paymentData.cardNumber.trim() ||
      form.paymentData.cardNumber.replace(/\s/g, "").length !== 16
    ) {
      newErrors.paymentData = "Número do cartão inválido";
    }
    if (
      !form.paymentData.cvv.trim() ||
      !/^\d{3,4}$/.test(form.paymentData.cvv)
    ) {
      newErrors.paymentData = "CVV inválido";
    }

    if (
      !form.address.postalCode.trim() ||
      form.address.postalCode.replace(/\D/g, "").length !== 8
    ) {
      newErrors.address = "CEP inválido";
    }
    if (!form.address.street.trim()) {
      newErrors.address = "Endereço é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  const resetForm = useCallback(() => {
    setForm({
      personalData: {
        name: "",
        surname: "",
        email: "",
        phone: "",
      },
      paymentData: {
        cardNumber: "",
        cvv: "",
        expiresAt: "",
      },
      address: {
        postalCode: "",
        street: "",
        number: 0,
        complement: "",
      },
    });
    setErrors({});
  }, []);

  return {
    form,
    errors,
    updateField,
    validateForm,
    resetForm,
    setForm,
  };
};
