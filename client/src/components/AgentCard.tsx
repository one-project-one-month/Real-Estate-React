import { CalendarCheck, Mail, MessageCircle, Phone } from 'lucide-react';
import { AgentProfile } from '../types/model.type';
import { Button, Card, CardImage, CardContent } from '@ui';
import { useNavigate } from 'react-router-dom';
import mockData from '@mocks';

export const AgentCard: React.FC<{ agent: AgentProfile }> = ({ agent }) => {
  const nav = useNavigate();
  const matchedUser = mockData.users.find((user) => user.id === agent.userId);

  return (
    <Card className="relative flex flex-col gap-4 p-4 border sm:flex-row border-border">
      <span className="absolute text-sm top-4 right-4 text-destructive">
        REF. {agent.id}
      </span>

      <div className="flex flex-col items-center gap-4 sm:items-start sm:w-40">
        <CardImage
          src="/agent/woman.png"
          alt={`${matchedUser?.username} profile`}
          className="rounded-lg object-cover h-[160px] w-[160px]"
        />
        <div className="flex flex-col w-full gap-2">
          <Button className="w-full">
            <Phone size={16} className="mr-2" />
            Call
          </Button>
          <Button className="w-full">
            <MessageCircle size={16} className="mr-2" />
            Message
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 text-center sm:text-left">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            {matchedUser?.username || 'Unknown Agent'}
          </h3>

          <div className="flex items-center justify-center gap-2 text-sm text-secondary-foreground sm:justify-start">
            <Mail size={14} />
            <span>{matchedUser?.email || 'noemail@example.com'}</span>
          </div>

          <div className="text-sm text-gray-600">
            <span className="font-medium">CNA:</span> {agent.cnaNumber || 'N/A'}
          </div>

          <div className="text-sm text-gray-600">
            <span className="font-medium">License:</span>{' '}
            {agent.licenseNumber || 'N/A'}
          </div>

          {matchedUser?.createdAt && (
            <div className="flex items-center justify-center gap-1 text-sm text-gray-500 sm:justify-start">
              <CalendarCheck size={14} />
              <span>
                Joined{' '}
                {new Date(matchedUser.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
          )}
        </div>

        <div className="mt-4 sm:mt-0 sm:text-right">
          <button
            onClick={() => nav(`/agents/${agent.id}`)}
            className="px-4 py-2 text-xs font-semibold text-gray-700 transition border border-gray-300 rounded-md hover:bg-gray-100"
          >
            View Details
          </button>
        </div>
      </div>
    </Card>
  );
};
