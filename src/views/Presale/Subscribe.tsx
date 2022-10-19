import { joiResolver } from '@hookform/resolvers/joi';
import axios from 'axios';
import Joi from 'joi';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';

import { Button, InputGroup } from '@/components';

export interface SubscribeProps {
  firstname?: string;
  lastname?: string;
  email: string;
  telegram_id?: string;
  wallet_address: string;
}

export const subscribeSchema = Joi.object<SubscribeProps>({
  firstname: Joi.string().allow(''),
  lastname: Joi.string().allow(''),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({ 'string.empty': 'Email is required' }),
  telegram_id: Joi.string().allow(''),
  wallet_address: Joi.string()
    .required()
    .messages({ 'string.empty': 'Please connect your wallet' }),
});

export default function Subscribe() {
  const [loading, setLoading] = useState(false);
  const { address } = useAccount();
  const { register, handleSubmit, formState, setValue } =
    useForm<SubscribeProps>({
      mode: 'onTouched',
      resolver: joiResolver(subscribeSchema),
    });

  const onSubmit: SubmitHandler<SubscribeProps> = async (data) => {
    try {
      setLoading(true);
      const _ = await axios.post('/api/hbspt', data);
      setLoading(false);
      toast.success('Thank you for submitting your details.');
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
        {...register('firstname')}
        error={formState.errors.firstname?.message}
      />
      <InputGroup
        containerClassName="w-full lg:w-1/2"
        label="Last Name"
        {...register('lastname')}
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
      <p className="text-sm">
        We will only use this data to contact you in relation to the ALVA
        presale.
      </p>
      <Button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="min-w-[220px] justify-center"
        disabled={loading}
      >
        {loading ? 'Please wait...' : 'Submit'}
      </Button>
    </form>
  );
}
