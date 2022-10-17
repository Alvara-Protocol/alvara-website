import { joiResolver } from '@hookform/resolvers/joi';
import axios from 'axios';
import Joi from 'joi';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';

import { Button, InputGroup } from '@/components';

export interface SubscribeProps {
  firstname: string;
  lastname: string;
  email: string;
  telegram_id: string;
  wallet_address: string;
}

export const subscribeSchema = Joi.object<SubscribeProps>({
  firstname: Joi.string()
    .required()
    .messages({ 'string.empty': 'First Name is required' }),
  lastname: Joi.string()
    .required()
    .messages({ 'string.empty': 'Last Name is required' }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({ 'string.empty': 'Email is required' }),
  telegram_id: Joi.string()
    .required()
    .messages({ 'string.empty': 'Telegram is required' }),
  wallet_address: Joi.string()
    .required()
    .messages({ 'string.empty': 'Please connect your wallet' }),
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
    if (address) setValue('wallet_address', address);
  }, [address, setValue]);

  return (
    <form className="flex w-full flex-col items-center gap-4 pt-16">
      <p className="text-center text-[20px] text-black">
        To receive updates on the presale please fill out the form below.
      </p>
      <InputGroup
        containerClassName="w-full lg:w-1/2"
        label="First Name"
        required
        {...register('firstname', { required: true })}
        error={formState.errors.firstname?.message}
      />
      <InputGroup
        containerClassName="w-full lg:w-1/2"
        label="Last Name"
        required
        {...register('lastname', { required: true })}
        error={formState.errors.lastname?.message}
      />
      <InputGroup
        containerClassName="w-full lg:w-1/2"
        label="Email Address"
        required
        {...register('email')}
        error={formState.errors.email?.message}
      />
      <InputGroup
        containerClassName="w-full lg:w-1/2"
        label="Telegram ID"
        required
        {...register('telegram_id')}
        error={formState.errors.telegram_id?.message}
      />
      <InputGroup
        containerClassName="w-full lg:w-1/2"
        label="Wallet Address"
        required
        readOnly
        {...register('wallet_address')}
        error={formState.errors.wallet_address?.message}
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
