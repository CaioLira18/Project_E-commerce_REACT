import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  
  useEffect(() => {
    // Buscar o pedido do localStorage
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const foundOrder = orders.find(o => o.id === parseInt(orderId));
    
    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      alert("Pedido não encontrado");
      navigate("/");
    }
  }, [orderId, navigate]);
  
  if (!order) {
    return <div>Carregando informações do pedido...</div>;
  }

  return (
    <div className="confirmation-container" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      <div style={{ 
        background: "#f0f9f0", 
        padding: "20px", 
        borderRadius: "10px",
        marginBottom: "30px"
      }}>
        <i className="fas fa-check-circle" style={{ fontSize: "60px", color: "#4CAF50", marginBottom: "20px" }}></i>
        <h1>Pedido Confirmado!</h1>
        <p>Seu pedido foi realizado com sucesso.</p>
        <p>Número do pedido: <strong>#{orderId}</strong></p>
      </div>
      
      <div style={{ textAlign: "left", marginBottom: "30px" }}>
        <h2>Detalhes do Pedido</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <strong>Email:</strong> {order.userEmail}
          </div>
          <div>
            <strong>Data do Pedido:</strong> {new Date(order.orderDate).toLocaleString()}
          </div>
          <div>
            <strong>Status:</strong> {order.status === "pending" ? "Pendente" : order.status}
          </div>
          <div>
            <strong>Método de Pagamento:</strong> {
              order.paymentMethod === "credit" ? "Cartão de Crédito" :
              order.paymentMethod === "debit" ? "Cartão de Débito" :
              order.paymentMethod === "pix" ? "PIX" : "Boleto"
            }
          </div>
          <div>
            <strong>Endereço de Entrega:</strong> {order.shippingAddress.street}, {order.shippingAddress.number}, {order.shippingAddress.city}, {order.shippingAddress.state}, CEP {order.shippingAddress.zipCode}
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: "left", marginBottom: "30px" }}>
        <h2>Itens do Pedido</h2>
        <div style={{ marginTop: "10px" }}>
          {order.items.map(item => (
            <div key={item.id} style={{ 
              display: "flex", 
              alignItems: "center", 
              borderBottom: "1px solid #eee",
              padding: "10px 0"
            }}>
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "15px" }}
              />
              <div style={{ flex: 1 }}>
                <div><strong>{item.name}</strong></div>
                <div>Quantidade: {item.quantity}</div>
              </div>
              <div>{item.price}</div>
            </div>
          ))}
          
          <div style={{ 
            marginTop: "20px", 
            fontWeight: "bold", 
            fontSize: "18px", 
            textAlign: "right" 
          }}>
            Total: R$ {order.totalAmount.replace('.', ',')}
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: "30px" }}>
        <button 
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            background: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          <i className="fas fa-home" style={{ marginRight: "5px" }}></i>
          Voltar à Página Inicial
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;