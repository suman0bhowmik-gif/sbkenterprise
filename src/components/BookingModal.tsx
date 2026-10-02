import React, { useState } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  MapPin, 
  ExternalLink,
  MessageCircle,
  Download
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/designs';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    timeSlot: '11:00 AM',
    service: 'Custom Picture Framing',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:30 PM',
    '2:30 PM',
    '4:00 PM',
    '5:30 PM',
    '7:00 PM',
  ];

  const services = [
    'Custom Picture Framing & Wood Selection',
    'Special Store Offer Fitting (8×11 ₹218 / 8×12 ₹327)',
    'Glass Works Consultation (Bevelled / Float / Anti-Reflective)',
    'Canvas Stretched Mounting & Float Frames',
    'Certificate & Diploma Conservation Framing',
    '3D Shadow Box for Keepsakes & Medals',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleAddToGoogleCalendar = () => {
    const title = encodeURIComponent(`In-Store Visit: SBk Enterprise Framing`);
    const details = encodeURIComponent(
      `Appointment for ${formData.service} at SBk Enterprise.\nLocation: Aralia, Shib Mandir Para, Opposite Gate Water Tank, Agartala.\nContact: ${BUSINESS_INFO.phone}`
    );
    const location = encodeURIComponent(BUSINESS_INFO.fullAddress);
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank');
  };

  const handleSendWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hello SBk Enterprise! I booked an in-store visit on your website:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Date: ${formData.date}\n- Time: ${formData.timeSlot}\n- Service: ${formData.service}\nNotes: ${formData.notes || 'None'}\nLooking forward to visiting your Aralia workshop!`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phoneNumeric}?text=${text}`, '_blank');
  };

  const handleDownloadICS = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SBk Enterprise//In-Store Visit Booking//EN
BEGIN:VEVENT
SUMMARY:SBk Enterprise In-Store Visit
DESCRIPTION:${formData.service} consultation at SBk Enterprise
LOCATION:${BUSINESS_INFO.fullAddress}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'SBk_Enterprise_Visit.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-2xl border border-[#dadce0] max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#dadce0] flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-[#202124] text-base">
                Book In-Store Visit
              </h3>
              <span className="text-[11px] text-[#5f6368] block">
                SBk Enterprise Workshop · Aralia, Agartala
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

        {/* Content Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="text-xs font-bold text-[#202124] block mb-1.5">
                  Select Framing Service / Requirement
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                >
                  {services.map((s, idx) => (
                    <option key={idx} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#202124] block mb-1.5">
                    Visit Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                  />
                  <span className="text-[10px] text-[#5f6368] mt-0.5 block">
                    Mon–Sat: 9:30 AM–8 PM · Sun: 10 AM–4 PM
                  </span>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#202124] block mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                  >
                    {timeSlots.map((ts, idx) => (
                      <option key={idx} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#202124] block mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-[#80868b] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suman Bhowmik"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#202124] block mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-[#80868b] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                    />
                  </div>
                </div>
              </div>

              {/* Email Optional */}
              <div>
                <label className="text-xs font-bold text-[#202124] block mb-1.5">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-[#80868b] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-bold text-[#202124] block mb-1.5">
                  Artwork / Photo Details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Bringing two 12x18 photographs to frame in teakwood..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#dadce0] bg-[#f8fafd] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                />
              </div>

              {/* Workshop Location Notice */}
              <div className="p-3 bg-[#f8f9fa] rounded-xl border border-[#dadce0] text-xs text-[#3c4043] flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d93025] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#202124] block">Showroom Location</span>
                  <span>Aralia, Shib Mandir Para, Gate Water Tank Opposite Side (Near Dr. B.R. Ambedkar Vidya Bhaban School), Agartala – 799004</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1a73e8] hover:bg-[#1557bf] text-white text-xs font-bold shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirm In-Store Appointment</span>
              </button>
            </form>
          ) : (
            /* Confirmation View */
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#e6f4ea] text-[#188038] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#202124]">
                  Appointment Confirmed!
                </h4>
                <p className="text-xs text-[#5f6368] mt-1">
                  We have reserved your visit with our master framer in Aralia.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 bg-[#f8f9fa] rounded-xl border border-[#dadce0] text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#5f6368]">Client:</span>
                  <span className="font-bold text-[#202124]">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5f6368]">Date & Time:</span>
                  <span className="font-bold text-[#202124]">{formData.date} at {formData.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5f6368]">Service:</span>
                  <span className="font-bold text-[#1a73e8] text-right">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5f6368]">Location:</span>
                  <span className="text-right text-[#202124]">Opposite Gate Water Tank, Aralia</span>
                </div>
              </div>

              {/* Calendar & WhatsApp Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleAddToGoogleCalendar}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#1a73e8] hover:bg-[#1557bf] text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>Add to Google Calendar</span>
                </button>

                <button
                  onClick={handleSendWhatsAppConfirmation}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25d366] hover:bg-[#1ebc57] text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation to WhatsApp</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={handleDownloadICS}
                    className="py-2 px-3 rounded-lg border border-[#dadce0] hover:bg-[#f1f3f4] text-[11px] font-medium text-[#3c4043] flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .ICS</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="py-2 px-3 rounded-lg border border-[#dadce0] hover:bg-[#f1f3f4] text-[11px] font-medium text-[#3c4043] cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
