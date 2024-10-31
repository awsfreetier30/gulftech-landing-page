import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactInfoProps {
  content: {
    contact: string;
    phone: string;
    email: string;
    address: string;
  };
}

export function ContactInfo({ content }: ContactInfoProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
      <a href={`tel:${content.phone}`} className="group flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-all">
        <Phone className="w-6 h-6 mb-2 text-[#48C94F] group-hover:scale-110 transition-transform" />
        <span className="text-sm text-white/60">{content.contact}</span>
        <span className="font-medium">{content.phone}</span>
      </a>
      
      <a href={`mailto:${content.email}`} className="group flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-all">
        <Mail className="w-6 h-6 mb-2 text-[#48C94F] group-hover:scale-110 transition-transform" />
        <span className="text-sm text-white/60">Email</span>
        <span className="font-medium">{content.email}</span>
      </a>
      
      <div className="group flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-all">
        <MapPin className="w-6 h-6 mb-2 text-[#48C94F] group-hover:scale-110 transition-transform" />
        <span className="text-sm text-white/60">{content.contact}</span>
        <span className="font-medium">{content.address}</span>
      </div>
    </div>
  );
}