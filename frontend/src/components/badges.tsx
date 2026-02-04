import React from 'react';
import { UserRoleBadgeProps } from '../interfaces';

export const UserRoleBadge: React.FC<UserRoleBadgeProps> = ({ role }) => {

    const roleConfig: Record<string, { label: string; style: string }> = {
        'ROLE_MASTER': {
            label: 'Master / Super Admin',
            style: 'bg-purple-100 text-purple-800 border-purple-200'
        },
        'ROLE_ADMIN': {
            label: 'Admin da Clínica',
            style: 'bg-blue-100 text-blue-800 border-blue-200'
        },
        'ROLE_USER': {
            label: 'Profissional de Saúde',
            style: 'bg-emerald-100 text-emerald-800 border-emerald-200'
        }
    };

    const config = roleConfig[role] || {
        label: 'Visitante',
        style: 'bg-gray-100 text-gray-800 border-gray-200'
    };

    return (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${config.style}`}>
            {config.label}
        </span>
    );
};