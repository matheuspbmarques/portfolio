type LevelsTypes = 'basic' | 'intermedium' | 'advanced'

interface TechnologiesListProps{
    name: string,
    level: LevelsTypes
}

const technologiesList:Array<TechnologiesListProps> = [
    {
        name: 'HTML',
        level: 'advanced'
    },
    {
        name: 'CSS',
        level: 'advanced'
    },
    {
        name: 'JavaScript',
        level: 'advanced'
    },
    {
        name: 'Node',
        level: 'advanced'
    },
    {
        name: 'Express',
        level: 'advanced'
    },
    {
        name: 'React/Next',
        level: 'advanced'
    },
    {
        name: 'Tailwind',
        level: 'advanced'
    },
    {
        name: 'TypeScript',
        level: 'advanced'
    },
    {
        name: 'Git',
        level: 'advanced'
    },
    {
        name: 'Nest',
        level: 'advanced'
    },
    {
        name: 'Linux',
        level: 'advanced'
    },
    {
        name: 'Docker',
        level: 'advanced'
    },
    {
        name: 'PHP',
        level: 'intermedium'
    },
    {
        name: 'Jest',
        level: 'intermedium'
    },
    {
        name: 'Laravel',
        level: 'intermedium'
    },
    {
        name: 'MySQL',
        level: 'intermedium'
    },
    {
        name: 'PostgreSQL',
        level: 'intermedium'
    },
    {
        name: 'MariaDB',
        level: 'intermedium'
    },
    {
        name: 'OracleDB',
        level: 'intermedium'
    },
    {
        name: 'MongoDB',
        level: 'intermedium'
    },
    {
        name: 'React Native',
        level: 'intermedium'
    },
    {
        name: 'AWS',
        level: 'intermedium'
    },
    {
        name: 'Prisma',
        level: 'basic'
    }
]

export default technologiesList
export type { LevelsTypes }