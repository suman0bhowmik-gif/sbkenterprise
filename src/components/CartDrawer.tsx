import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Truck, 
  ShoppingBag, 
  CheckCircle2, 
  MessageCircle, 
  MapPin, 
  Phone,
  ShieldCheck
} from 'lucide-react';
import { CartItem } from '../types';
import { BUSINESS_INFO } from '../data/designs';
import { Discount33Option } from './Discount33Option';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  isDiscount33Applied: boolean;
  onToggleDiscount33: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  isDiscount33Applied,
  onToggleDiscount33,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'address' | 'success'>('cart');
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: 'Aralia, Agartala',
    pincode: '799004',
    paymentMethod: 'cod',
  });
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = isDiscount33Applied ? Math.round(subtotal * 0.33) : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrder = `SBK-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedOrder);
    setCheckoutStep('success');
  };

  const handleSendOrderWhatsApp = () => {
    const itemsText = items
      .map((item) => `- ${item.title} (${item.dimension}, ${item.frameName}) x ${item.quantity} = ₹${item.price * item.quantity}`)
      .join('\n');

    const discountText = isDiscount33Applied ? `\n*33% Discount Applied:* -₹${discountAmount}` : '';

    const msg = encodeURIComponent(
      `Hello SBk Enterprise! I placed an order on your website:\n*Order ID: ${orderNumber}*\n*Customer:* ${customer.name}\n*Phone:* ${customer.phone}\n*Address:* ${customer.address}, Pincode: ${customer.pincode}\n*Items:*\n${itemsText}${discountText}\n*Total:* ₹${finalTotal} (Free Home Delivery in Agartala)\nPayment: Cash on Delivery`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phoneNumeric}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#dadce0] flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-[#202124] text-base">Your Order</h3>
              <span className="text-[11px] text-[#188038] font-medium flex items-center gap-1">
                <Truck className="w-3 h-3" /> Free Home Delivery in Agartala
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
          {checkoutStep === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="text-center py-16 text-[#5f6368] space-y-3">
                  <ShoppingBag className="w-12 h-12 text-[#dadce0] mx-auto" />
                  <p className="text-sm font-medium">Your order bag is empty.</p>
                  <p className="text-xs">
                    Explore our Store Offers (Small 8×11 for ₹218 / Large 8×12 for ₹327) or customize a frame in our Studio.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* 33% Store Discount Option */}
                  <Discount33Option
                    isApplied={isDiscount33Applied}
                    onToggle={onToggleDiscount33}
                    compact={true}
                    className="mb-3"
                  />

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl border border-[#dadce0] bg-[#f8fafd] flex gap-3 items-start justify-between"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold text-[#202124] text-xs sm:text-sm">
                          {item.title}
                        </h4>
                        <div className="text-[11px] text-[#5f6368] space-y-0.5 mt-1">
                          <div>Size: <strong className="text-[#202124]">{item.dimension}</strong></div>
                          <div>Moulding: {item.frameName}</div>
                          <div>Glass: {item.glassType}</div>
                        </div>

                        {/* Quantity and Price */}
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center border border-[#dadce0] rounded-lg bg-white overflow-hidden text-xs">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="px-2 py-1 text-[#5f6368] hover:bg-[#f1f3f4] cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-2.5 py-1 font-bold text-[#202124] tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="px-2 py-1 text-[#5f6368] hover:bg-[#f1f3f4] cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="font-bold text-sm text-[#202124] tabular-nums">
                              ₹{item.price * item.quantity}
                            </span>
                            <span className="block text-[10px] text-[#5f6368]">
                              (₹{item.price} each)
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#80868b] hover:text-[#d93025] p-1 cursor-pointer transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {/* Free delivery callout */}
                  <div className="p-3 rounded-xl bg-[#e6f4ea] border border-[#ceead6] text-xs text-[#137333] flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#188038] shrink-0" />
                    <span>Free Home Delivery across Agartala applied automatically!</span>
                  </div>
                </div>
              )}
            </>
          )}

          {checkoutStep === 'address' && (
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#dadce0]">
                <span className="text-xs font-bold text-[#202124]">Delivery Details</span>
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="text-xs text-[#1a73e8] hover:underline cursor-pointer"
                >
                  ← Edit Items
                </button>
              </div>

              <div>
                <label className="text-xs font-bold text-[#202124] block mb-1">
                  Recipient Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suman Bhowmik"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#202124] block mb-1">
                  Phone Number (for Delivery Confirmation)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 7005843906"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#202124] block mb-1">
                  Home / Office Address in Agartala
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="House number, Street, Landmark near Aralia / Banamalipur..."
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#202124] block mb-1">
                  Pincode (West Tripura)
                </label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  value={customer.pincode}
                  onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                />
                <span className="text-[10px] text-[#188038] mt-1 block">
                  ✓ Verified Free Home Delivery Zone
                </span>
              </div>

              {/* Payment Option */}
              <div>
                <label className="text-xs font-bold text-[#202124] block mb-1.5">
                  Payment Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#dadce0] bg-[#f8fafd] text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={customer.paymentMethod === 'cod'}
                      onChange={() => setCustomer({ ...customer, paymentMethod: 'cod' })}
                      className="accent-[#1a73e8]"
                    />
                    <span className="font-semibold text-[#202124]">
                      Cash on Delivery (Pay upon doorstep inspection)
                    </span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#dadce0] bg-[#f8fafd] text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={customer.paymentMethod === 'store'}
                      onChange={() => setCustomer({ ...customer, paymentMethod: 'store' })}
                      className="accent-[#1a73e8]"
                    />
                    <span className="font-semibold text-[#202124]">
                      Pay at Workshop (Pickup at Aralia Showroom)
                    </span>
                  </label>
                </div>
              </div>
            </form>
          )}

          {checkoutStep === 'success' && (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#e6f4ea] text-[#188038] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#202124]">Order Confirmed!</h4>
                <p className="text-xs text-[#5f6368] mt-1 font-mono">Order ID: {orderNumber}</p>
              </div>

              <div className="p-4 bg-[#f8f9fa] rounded-xl border border-[#dadce0] text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#5f6368]">Customer:</span>
                  <span className="font-bold text-[#202124]">{customer.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5f6368]">Delivery To:</span>
                  <span className="text-right text-[#202124]">{customer.address} ({customer.pincode})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5f6368]">Total Amount:</span>
                  <span className="font-bold text-[#202124] text-sm tabular-nums">₹{finalTotal}</span>
                </div>
                {isDiscount33Applied && (
                  <div className="flex justify-between text-[#188038]">
                    <span>33% Store Discount:</span>
                    <span className="font-bold">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#188038]">
                  <span>Home Delivery:</span>
                  <span className="font-bold">FREE (₹0)</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={handleSendOrderWhatsApp}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25d366] hover:bg-[#1ebc57] text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order to WhatsApp Dispatch</span>
                </button>

                <button
                  onClick={() => {
                    onClearCart();
                    setCheckoutStep('cart');
                    onClose();
                  }}
                  className="w-full py-2 px-4 rounded-xl border border-[#dadce0] hover:bg-[#f1f3f4] text-xs font-medium text-[#3c4043] cursor-pointer"
                >
                  Close & Back to Store
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {checkoutStep !== 'success' && items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#dadce0] bg-[#f8fafd] space-y-3">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-[#5f6368]">
                <span>Items Subtotal:</span>
                <span className="font-bold text-[#202124] tabular-nums">₹{subtotal}</span>
              </div>
              {isDiscount33Applied && (
                <div className="flex justify-between text-[#188038] font-semibold">
                  <span>33% Store Discount Option:</span>
                  <span className="tabular-nums">-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between text-[#188038]">
                <span>Home Delivery:</span>
                <span className="font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#202124] pt-2 border-t border-[#dadce0]">
                <span>Total:</span>
                <div className="text-right">
                  <span className="tabular-nums">₹{finalTotal}</span>
                  {isDiscount33Applied && (
                    <span className="block text-[10px] text-[#188038] font-normal">
                      ✓ 33% discount applied
                    </span>
                  )}
                </div>
              </div>
            </div>

            {checkoutStep === 'cart' ? (
              <button
                onClick={() => setCheckoutStep('address')}
                className="w-full py-3 rounded-xl bg-[#1a73e8] hover:bg-[#1557bf] text-white text-xs font-bold shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Free Delivery Address (₹{finalTotal})</span>
              </button>
            ) : (
              <button
                type="submit"
                form="checkout-form"
                className="w-full py-3 rounded-xl bg-[#188038] hover:bg-[#137333] text-white text-xs font-bold shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirm Order with Free Delivery (₹{finalTotal})</span>
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
