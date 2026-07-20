import { CalendarDays, ChartColumn, House, Settings, UserRound, Users } from 'lucide-react'

import { ROUTES } from '@/app/router/routes'

export const navigation = [
  {
    label: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: House,
  },
  {
    label: 'Agenda',
    path: ROUTES.APPOINTMENTS,
    icon: CalendarDays,
  },
  {
    label: 'Pacientes',
    path: ROUTES.APPOINTMENTS,
    icon: Users,
  },
  {
    label: 'Psicólogos',
    path: ROUTES.PSYCHOLOGISTS,
    icon: UserRound,
  },
  {
    label: 'Reportes',
    path: ROUTES.REPORTS,
    icon: ChartColumn,
  },
  {
    label: 'Configuration',
    path: ROUTES.SETTINGS,
    icon: Settings,
  },
]
