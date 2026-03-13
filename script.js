let cart = [];

// ── Add to Cart ───────────────────────────────
function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartUI();
  showToast(`🌿 ${name} added to cart!`);
}

// ── Update Cart Display ───────────────────────
function updateCartUI() {
  const list = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!list || !totalEl) return;

  list.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} × ${item.quantity} — Ksh ${(item.price * item.quantity).toLocaleString()}
      <button onclick="removeFromCart(${index})" style="margin-left:10px;color:red;background:none;border:none;cursor:pointer;">✕</button>
    `;
    list.appendChild(li);
  });

  totalEl.textContent = total.toLocaleString();
}

// ── Remove from Cart ──────────────────────────
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

// ── Checkout ──────────────────────────────────
// ── Checkout ──────────────────────────────────
async function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  const customerName = prompt('Enter your name:');
  if (!customerName) return;
  const customerEmail = prompt('Enter your email:');
  if (!customerEmail) return;

  try {
    const res = await fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerName,
        customerEmail,
        items: cart.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price
        }))
      })
    });

    const result = await res.json();

    if (res.ok) {
      alert(`✅ Order placed! Thank you, ${customerName}! Check your email for confirmation.`);
      cart = [];
      updateCartUI();
    } else {
      alert(`❌ Order failed: ${result.error}`);
    }
  } catch (err) {
    alert('Could not connect to server. Please try again.');
    console.error(err);
  }
}

// ── Toast Notification ─────────────────────────
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position:fixed;bottom:30px;right:30px;
      background:#2d7a4f;color:white;
      padding:12px 20px;border-radius:6px;
      font-family:'Poppins',sans-serif;font-size:14px;
      opacity:0;transition:opacity 0.3s ease;z-index:9999;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

// ── Init ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', updateCartUI);