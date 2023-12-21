import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cartItems, totalCartItems, clearCartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    whatsapp: "",
    address: "",
  });

  const MySwal = withReactContent(Swal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
  };

  const validatePhoneNumber = () => {
    return /^\d+$/.test(formData.whatsapp);
  };

  const validateForm = () => {
    // Validar correo electrónico
    if (!validateEmail()) {
      MySwal.fire({
        icon: 'error',
        title: 'Por favor, ingrese un correo electrónico válido.',
      });
      return false;
    }

    // Validar número de teléfono
    if (!validatePhoneNumber()) {
      MySwal.fire({
        icon: 'error',
        title: 'Por favor, ingrese un número de teléfono válido.',
      });
      return false;
    }

    // Validar que las direcciones de correo coincidan
    if (formData.email !== formData.confirmEmail) {
      MySwal.fire({
        icon: 'error',
        title: 'Las direcciones de correo electrónico no coinciden.',
      });
      return false;
    }

    return true; // El formulario es válido
  };

  const handleSubmit = async () => {
    // Validar el formulario antes de procesar el pedido
    if (!validateForm()) {
      return;
    }

    // Crear una referencia a la colección de "orders" en Firestore
    const ordersCollectionRef = collection(db, "orders");

    // Construir los datos de la orden
    const orderData = {
      buyer: {
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        address: formData.address,
      },
      items: cartItems,
      total: totalCartItems,
    };

    try {
      // Agregar la orden a Firestore y obtener el ID generado
      const docRef = await addDoc(ordersCollectionRef, orderData);

      const orderId = docRef.id; // Obtener el ID de la orden generada

      MySwal.fire({
        icon: 'success',
        title: 'Su pedido fue procesado',
        html: renderOrderSummary(orderId),  // Pasa el ID de la orden a la función
      }).then(() => {
        // Limpiar el carrito y restablecer el formulario después de realizar el pedido
        clearCartItems();

        // Imprimir el ID de la orden generada
        console.log('ID de la orden generada:', orderId);
      });
    } catch (error) {
      console.error('Error al realizar el pedido:', error);
    }
  };

  const renderOrderSummary = (orderId) => {
    const orderSummary = cartItems.map((item) => (
      <p key={item.id}>
        {item.name} - Cantidad: {item.quantity} - Subtotal: ${item.subTotal}
      </p>
    ));

    return (
      <>
        {orderSummary}
        <p>Total a abonar: ${totalCartItems}</p>
        <p>Recibirá un correo de confirmación en {formData.email}</p>
        <p>Código de Identificación del pedido: {orderId}</p>
      </>
    );
  };

  return (
    <div className="checkout-container">
      <div className="checkout">
        <h2>Complete los siguientes datos personales para procesar la compra</h2>
        <form>
          <label className="name">
            Nombre:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label className="email">
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label className="confirm-email">
            Confirmar Email:
            <input type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} />
          </label>
          <label className="whatsapp">
            WhatsApp:
            <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
          </label>
          <label className="address">
            País de residencia:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
        </form>
        <button onClick={handleSubmit} className="checkout-btn add-btn">
          Realizar el Pedido
        </button>
      </div>
    </div>
  );
};

export { Checkout };
