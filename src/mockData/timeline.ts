// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TimelineItem = any

const timelineData: TimelineItem[] = [
    {
        id: 'db25479c-934b-459f-8646-54227f6ec20d',
        date: '2024-05-19T16:14:00.000Z',
        createdByUser: '7bfe9739-fbe8-45e7-935e-e29a0efab12e',
        type: 'appointment',
        data: {
            providerId: '11580d88-24fa-4f6a-b9f8-ed49fcb22d1b',
            isVirtual: false,
            dateStart: '2024-05-24T13:08:00.000Z'
        }
    }
]

export const useTimeline = () => {
    return { data: timelineData }
}