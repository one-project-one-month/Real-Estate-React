import { Button } from '@ui';
import { Phone, MessageCircle } from 'lucide-react';
import { Input, TextArea } from './Input';

export const AgentContactForm = () => (
  <form className="flex flex-col w-full max-w-md gap-4 px-10 py-6 border rounded-lg shadow-md bg-background border-border">
    <h4 className="text-xl font-semibold text-center">
      Contact Agency for More Information
    </h4>

    {[
      { label: 'Name:', placeholder: 'Your full name' },
      { label: 'Email', placeholder: 'Your email address' },
      { label: 'Contact Number', placeholder: 'Your phone number' },
    ].map((field) => (
      <div key={field.label}>
        <Input
          label={`${field.placeholder}`}
          type={field.label === 'Email' ? 'email' : 'text'}
          id={field.label.toLowerCase()}
          name={field.label.toLowerCase()}
          required={field.label !== 'Contact Number'}
        />
      </div>
    ))}

    <div>
      <TextArea
        id="description"
        name="description"
        label="Description:"
        rows={6}
      ></TextArea>
    </div>

    <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
      <Button size="lg">
        <Phone size={16} /> Call
      </Button>
      <Button size="lg">
        <MessageCircle size={16} /> Message
      </Button>
    </div>
  </form>
);
