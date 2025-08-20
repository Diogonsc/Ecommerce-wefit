import { z } from "zod";

export const cartItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  image: z.string(),
  quantity: z.number(),
});

export const cartStateSchema = z.object({
  items: z.array(cartItemSchema),
});

export const cartActionSchema = z.union([
  z.object({
    type: z.literal('ADD_ITEM'),
    payload: z.object({
      id: z.number(),
      title: z.string(),
      price: z.number(),
      image: z.string(),
    }),
  }),
  z.object({
    type: z.literal('REMOVE_ITEM'),
    payload: z.number(),
  }),
  z.object({
    type: z.literal('UPDATE_QUANTITY'),
    payload: z.object({
      id: z.number(),
      quantity: z.number(),
    }),
  }),
  z.object({
    type: z.literal('CLEAR_CART'),
  }),
]);

export type CartItem = z.infer<typeof cartItemSchema>;
export type CartState = z.infer<typeof cartStateSchema>;
export type CartAction = z.infer<typeof cartActionSchema>;
  
export type CartItemWithoutQuantity = Omit<CartItem, 'quantity'>;

export interface CartContextType {
  state: CartState;
  addItem: (item: CartItemWithoutQuantity) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getItemQuantity: (id: number) => number;
  getTotalPrice: () => number;
}
