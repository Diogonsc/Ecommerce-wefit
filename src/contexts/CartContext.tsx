import { createContext } from 'react';
import type { CartContextType } from './schema';

export const CartContext = createContext<CartContextType | undefined>(undefined);
