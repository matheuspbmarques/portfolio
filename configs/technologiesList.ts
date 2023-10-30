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
        name: 'TypeScript',
        level: 'intermedium'
    },
    {
        name: 'Jest',
        level: 'intermedium'
    },
    {
        name: 'Tailwind',
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
        name: 'PHP',
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
        name: 'Git',
        level: 'intermedium'
    },
    {
        name: 'Linux',
        level: 'intermedium'
    },
    {
        name: 'Prisma',
        level: 'basic'
    },
    {
        name: 'Flutter',
        level: 'basic'
    },
    {
        name: 'Nest',
        level: 'basic'
    },
    {
        name: 'Flutter',
        level: 'basic'
    },
    {
        name: 'MongoDB',
        level: 'basic'
    }
]

export default technologiesList
export type { LevelsTypes }