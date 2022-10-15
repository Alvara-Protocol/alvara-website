import { joiResolver } from '@hookform/resolvers/joi';
import axios from 'axios';
import Joi from 'joi';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';

import { Button, InputGroup } from '@/components';

export interface SubscribeProps {
  name: string;
  email: string;
  telegram: string;
  address: string;
}

export const subscribeSchema = Joi.object<SubscribeProps>({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  telegram: Joi.string().required(),
  address: Joi.string().required(),
});

export default function Subscribe() {
  const { address } = useAccount();
  const { register, handleSubmit, formState, setValue } =
    useForm<SubscribeProps>({
      mode: 'onTouched',
      resolver: joiResolver(subscribeSchema),
    });

  const onSubmit: SubmitHandler<SubscribeProps> = async (data) => {
    try {
      const _ = await axios.post('/api/hbspt', data);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.error);
      }
    }
  };

  useEffect(() => {
    if (address) setValue('address', address);
  }, [address, setValue]);

  return (
    <form className="flex w-full flex-col items-center gap-4 pt-16">
      <p className="text-center text-[20px] text-black">
        To receive updates on the presale please fill out the form below.
      </p>
      <InputGroup
        containerClassName="w-1/2"
        label="Name"
        required
        {...register('name', { required: true })}
        error={formState.errors.name?.message}
      />
      <InputGroup
        containerClassName="w-1/2"
        label="Email Address"
        required
        {...register('email')}
        error={formState.errors.email?.message}
      />
      <InputGroup
        containerClassName="w-1/2"
        label="Telegram ID"
        required
        {...register('telegram')}
        error={formState.errors.telegram?.message}
      />
      <InputGroup
        containerClassName="w-1/2"
        label="Wallet Address"
        required
        readOnly
        {...register('address')}
        error={formState.errors.address?.message}
      />
      <Button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="min-w-[220px] justify-center"
      >
        Submit
      </Button>
    </form>
  );
}
