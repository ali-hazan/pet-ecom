import type { ICartItem } from "@/types/product";
import { defineStore } from "pinia";
import { toast, type ToastOptions } from "vue3-toastify";
import type { IDiscount } from "@/types/product";

const VAT = 5;

export const useCartStore = defineStore(
  "cart",
  () => {
    const cart = ref<Array<ICartItem>>([]);
    const selectedDiscount = ref<IDiscount | null>(null);

    const addItemToCart = (item: ICartItem) => {
      const itemInCart = cart.value.find((cartItem) => cartItem.id === item.id);
      if (itemInCart) {
        itemInCart.qty = itemInCart.qty + 1;
      } else {
        cart.value.push(item);
      }
    };

    const removeCartItem = (index: number) => {
      const cartItem = cart.value.find((item) => item.id === index);
      if (cartItem) {
        cart.value = JSON.parse(
          JSON.stringify(cart.value.filter((item) => item.id !== index))
        );
        toast(`${cartItem.name} removed!`);
      }
    };

    const substractQty = (index: number) => {
      const itemInCart = cart.value.find((cartItem) => cartItem.id === index);
      if (itemInCart) {
        if (itemInCart.qty > 1) {
          itemInCart.qty = itemInCart.qty - 1;
          toast(`${itemInCart.name} quantity -1!`);
        } else {
          removeCartItem(index);
        }
      }
    };

    const addQty = (index: number) => {
      const itemInCart = cart.value.find((cartItem) => cartItem.id === index);
      if (itemInCart) {
        itemInCart.qty = itemInCart.qty + 1;
        toast(`${itemInCart.name} quantity +1!`);
      }
    };

    const emptyCart = () => {
      cart.value = [];
      selectedDiscount.value = null;
      toast("Your cart is cleared!");
    };

    const subTotal = computed(() => {
      const initialValue = 0;
      const sum = cart.value.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.qty,
        initialValue
      );
      return sum;
    });

    const discountPrice = computed(() => {
      if (selectedDiscount.value) {
        if (selectedDiscount.value.isPercentage) {
          return subTotal.value * (selectedDiscount.value.value / 100);
        } else {
          return selectedDiscount.value.value;
        }
      }
      return 0;
    });

    const vat = computed(() => {
      const vatAmount = ((subTotal.value - discountPrice.value) * 5) / 100;
      return { VAT, vatAmount };
    });

    const total = computed(()=>{
      return subTotal.value - discountPrice.value + vat.value.vatAmount
    })

    const totalItemsInCart = computed(()=>{
      return cart.value.length
    })

    return {
      cart,
      subTotal,
      selectedDiscount,
      vat,
      discountPrice,
      total,
      totalItemsInCart,
      addItemToCart,
      removeCartItem,
      substractQty,
      addQty,
      emptyCart,
    };
  },
  { persist: true }
);
