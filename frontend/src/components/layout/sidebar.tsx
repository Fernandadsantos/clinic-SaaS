import { Link, useNavigate } from 'react-router-dom';
import { Icons } from '../../icons/icons';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from "../../store/modules/auth/authSlice";
import { UserRoleBadge } from '../badges';
import { NavSideBarProps } from '../../interfaces/index';
import { Button } from '@mui/material';
import { useState } from 'react';

export function Sidebar() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const { isLoading, user } = useAppSelector((state) => state.auth);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navigation: NavSideBarProps[] = [
        { title: 'Dashboard', href: '/dashboard', icon: "BarChart", role: "ROLE_USER" },
        { title: 'Dashboard Plataforma', href: '/dashboard/plataforma', icon: "BarChart", role: 'ROLE_MASTER' },
        { title: '---', href: '#', icon: null, separator: true, role: 'ROLE_ALL' },
        { title: 'Pacientes', href: '/dashboard/patients', icon: "Users", role: 'ROLE_USER' },
        { title: 'Atendimentos', href: '/dashboard/atendimentos', icon: "Calendar", role: 'ROLE_USER' },
        { title: 'Relatórios', href: '/dashboard/relatorios', icon: "FileText", role: "ROLE_ADMIN" },
        { title: 'Usuários', href: '/dashboard/usuarios', icon: "UserCog", role: 'ROLE_ADMIN' },
        { title: '---', href: '#', icon: null, separator: true, role: 'ROLE_ALL' },
        { title: 'Clínicas', href: '/dashboard/clinicas', icon: "Building", role: 'ROLE_ADMIN' },
        { title: 'Planos', href: '/dashboard/planos', icon: "CreditCard", role: 'ROLE_ADMIN' },
    ];

    async function handleLogout(e: React.MouseEvent) {
        e.preventDefault();
        try {
            dispatch(logout());
            navigate("/login");
        } catch (error: Error | unknown) {
            console.error(error);
        }
    }

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            <aside
                className={`
                    h-screen bg-white border-r border-gray-200 z-50 flex flex-col
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? 'w-80 md:w-64 lg:w-72' : 'w-16'}
                `}
            >
                <div className="p-4 mb-4">
                    <div className={`flex items-center ${isOpen ? 'justify-between' : 'justify-center'}`}>
                        <h1
                            className={`text-2xl font-bold text-green-600 whitespace-nowrap transition-opacity duration-200 ${isOpen ? 'opacity-100 delay-100' : 'opacity-0 hidden'
                                }`}
                        >
                            ClinicOps
                        </h1>
                        <button
                            className='cursor-pointer text-gray-600 hover:text-green-600 transition-colors'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <Icons.X className='w-7 h-7' /> : <Icons.Menu className='w-6 h-6 mt-4' />}
                        </button>
                    </div>
                    {user && (
                        <div className={`mt-2 transition-opacity duration-300 ${isOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                            <UserRoleBadge role={user.role} />
                        </div>
                    )}
                </div>
                <div className={`flex-1 flex flex-col space-y-2 px-4 transition-opacity duration-200 ${isOpen ? 'opacity-100 delay-75' : 'opacity-0 invisible'}`}>
                    <nav className="space-y-2 flex-1 overflow-y-auto">
                        {navigation.filter((e) => e.role === user?.role).map((item, index) => {
                            if (item.separator) {
                                return <div key={`separator-${index}`} className="border-t border-gray-200 my-2" />
                            }
                            const IconComponent = item.icon ? Icons[item.icon] : null;

                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
                                >
                                    <span className="flex-1">{item.title}</span>
                                    {IconComponent && (
                                        <IconComponent className="w-5 h-5 text-gray-500" />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>
                    <div className='pb-3'>
                        {user && (
                            <div className="px-3 py-2 bg-gray-100 rounded-lg whitespace-nowrap mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-green-700 font-semibold text-sm">
                                            {user.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {user.name}
                                    </p>
                                </div>
                            </div>
                        )}
                        <Button
                            onClick={handleLogout}
                            variant="outlined"
                            color="success"
                            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 whitespace-nowrap"
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600 mr-2" />
                                    Saindo...
                                </>
                            ) : (
                                <>
                                    <Icons.LogOut className="h-5 w-5 mr-2" />
                                    Sair
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </aside>
        </>
    )
}