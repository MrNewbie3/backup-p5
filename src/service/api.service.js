import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";

const login = async (payload) => {
  try {
    const postData = await fetch("http://localhost:3000/api/v1/user/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      method: "POST",
    });
    const result = await postData.json();
    return result;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

const signUp = async (payload) => {
  try {
    const postData = await fetch("http://localhost:3000/api/v1/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      method: "POST",
    });
    const result = await postData.json();
    return result;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};
const logout = async (id) => {
  try {
    const postData = await fetch("http://localhost:3000/api/v1/user/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "LOGGED_OUT",
      }),
      method: "POST",
    });
    const result = await postData.json();
    return result;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

const isTokenValid = async (payload, id) => {
  try {
    const postData = await fetch("http://localhost:3000/api/v1/user/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      method: "POST",
    });
    const result = await postData.json();
    return result;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

const canteen = async () => {
  try {
    const postData = await fetch("http://localhost:3000/api/v1/canteen", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const result = await postData.json();
    return result;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

const menuById = async (id) => {
  try {
    const postData = await fetch(`http://localhost:3000/api/v1/canteen/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const result = await postData.json();
    return result;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

const updateCart = async (updatedOrder, user_id) => {
  try {
    const cartData = Object.keys(updatedOrder).map((key) => ({
      menu_id: key,
      quantity: updatedOrder[key].qty,
      price: updatedOrder[key].price,
    }));

    const response = await fetch("http://localhost:3000/api/v1/cart/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        cart: cartData,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update cart");
    }

    const responseData = await response.json();
  } catch (error) {
    console.error("Error updating cart:", error);
  }
};
const getCartUser = async (user_id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/cart/${user_id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to update cart");
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Error updating cart:", error);
  }
};

export { login, signUp, isTokenValid, logout, canteen, menuById, updateCart, getCartUser };
