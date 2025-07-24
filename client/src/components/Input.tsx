import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1">
        {label && <label className="text-sm">{label}</label>}
        <input
          ref={ref}
          {...props}
          className={`text-sm px-3 py-2 border rounded-md outline-none focus:ring-1 focus:ring-primary border-border bg-gray-200 ${className}`}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', ...props }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <div className="flex flex-col w-full gap-1">
        {label && <label className="text-sm">{label}</label>}
        <div className="relative w-full">
          <Input
            ref={ref}
            type={show ? 'text' : 'password'}
            {...props}
            className={className}
          />
          <button
            type="button"
            onClick={() => setShow((prev) => !prev)}
            className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 focus:outline-none"
            tabIndex={-1}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1">
        {label && <label className="text-sm">{label}</label>}
        <textarea
          ref={ref}
          {...props}
          rows={props.rows || 4}
          className={`text-sm px-3 py-2 border rounded-md outline-none focus:ring-1 focus:ring-primary border-border bg-gray-200 resize-none ${className}`}
        />
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
