import { AgentProfile, AgentProfileStatus } from '../types/model.type';

export const agentProfiles: AgentProfile[] = [
  {
    id: 1,
    userId: 2,
    cnaNumber: 'CNA123456',
    licenseNumber: 987654,
    status: AgentProfileStatus.Approved,
    approvedById: 1,
    approvedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 2,
    userId: 4,
    cnaNumber: 'CNA234567',
    licenseNumber: 876543,
    status: AgentProfileStatus.Approved,
    approvedById: 1,
    approvedAt: '2025-01-16T10:00:00Z',
  },
  {
    id: 3,
    userId: 6,
    cnaNumber: 'CNA345678',
    licenseNumber: 765432,
    status: AgentProfileStatus.Approved,
    approvedById: 10,
    approvedAt: '2025-01-17T10:00:00Z',
  },
  {
    id: 4,
    userId: 5,
    cnaNumber: 'CNA456789',
    licenseNumber: 654321,
    status: AgentProfileStatus.Pending,
    approvedById: null,
    approvedAt: null,
  },
];
