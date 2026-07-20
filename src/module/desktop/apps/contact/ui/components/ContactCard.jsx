import { Copy, Check } from "lucide-react";

const ContactCard = ({ _label, email, phone, copied, onCopy }) => (
  <>
    <img src={"/images/profile.jpg?v=3"} alt="vedant" className="w-20 rounded-full" />
    <h3 className="text-white">Let's Connect</h3>
    <p className="text-white/60">Full-stack developer building scalable apps—let's connect and create something impactful.</p>
    <div
      className="flex items-center gap-3 cursor-pointer group"
      onClick={() => onCopy(email, "email")}
    >
      <p className="text-white/80 hover:text-blue-400 transition-colors">{email}</p>
      {copied === "email" ? (
        <Check size={14} className="text-green-500 animate-in zoom-in" />
      ) : (
        <Copy
          size={14}
          className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      )}
      {copied === "email" && (
        <span className="text-xs text-green-500 font-medium animate-in fade-in slide-in-from-left-1">
          Copied!
        </span>
      )}
    </div>

    <div
      className="flex items-center gap-3 cursor-pointer group"
      onClick={() => onCopy(phone, "phone")}
    >
      <p className="text-white/80 hover:text-blue-400 transition-colors">{phone}</p>
      {copied === "phone" ? (
        <Check size={14} className="text-green-500 animate-in zoom-in" />
      ) : (
        <Copy
          size={14}
          className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      )}
      {copied === "phone" && (
        <span className="text-xs text-green-500 font-medium animate-in fade-in slide-in-from-left-1">
          Copied!
        </span>
      )}
    </div>
  </>
);

export default ContactCard;
