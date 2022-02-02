import { writable } from 'svelte/store';

export const store = writable(null);
export const signedUp = writable(false);
export const signedIn = writable(false);
export const confirmed = writable(false);