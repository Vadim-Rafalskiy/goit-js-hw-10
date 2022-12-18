import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const failMessage = () =>
  Notify.failure(`Oops, there is no country with that name`, {
    timeout: 2000,
  });

export const infoMessage = () =>
  Notify.info(`Too many matches found. Please enter a more specific name.`, {
    timeout: 2000,
  });
