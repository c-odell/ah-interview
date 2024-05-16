// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TimelineItem = any

const timelineData: TimelineItem[] = [
    {
        id: '49ccf121-1de3-4ffe-a769-a27aae7d9ac5',
        date: '2024-05-19T16:22:00.000Z',
        createdByUser: '7bfe9739-fbe8-45e7-935e-e29a0efab12e',
        type: 'outreach',
        data: {
            modality: 'phone',
            note: 'Called a couple times but no one picked up. Left a voicemail reminder for upcoming appointment.'
        }
    },
    {
        id: 'db25479c-934b-459f-8646-54227f6ec20d',
        date: '2024-05-19T16:14:00.000Z',
        createdByUser: '7bfe9739-fbe8-45e7-935e-e29a0efab12e',
        type: 'appointmentScheduled',
        data: {
            providerId: '11580d88-24fa-4f6a-b9f8-ed49fcb22d1b',
            type: 'lcswFollowUp',
            isVirtual: true,
            startTime: '2024-05-24T13:08:00.000Z'
        }
    },
    {
        id: 'c39db607-bdca-48fc-a340-e2b0e2d00b2f',
        date: '2024-05-12T20:44:00.000Z',
        createdByUser: '2191f682-9b37-47c2-afbb-2caee2334d19',
        type: 'carePlanUpdated',
        data: {
            careGoals: ['Medication adherence', 'Find new apartment', 'Walks with neighbor each week'],
            phaseOfCare: 2,
        }
    },
    {
        id: '0a6f257c-8f1c-44d9-a70a-c126a4695b96',
        date: '2024-05-05T20:02:00.000Z',
        createdByUser: '2191f682-9b37-47c2-afbb-2caee2334d19',
        type: 'appointmentScheduled',
        data: {
            providerId: '4e229e8b-623e-4141-9d2f-b1b8bde15c26',
            type: 'chwFacilitate',
            isVirtual: false,
            startTime: '2024-05-12T20:00:00.000Z'
        }
    },
    {
        id: '49ccf121-1de3-4ffe-a769-a27aae7d9ac5',
        date: '2024-04-29T16:22:00.000Z',
        createdByUser: '7bfe9739-fbe8-45e7-935e-e29a0efab12e',
        type: 'outreach',
        data: {
            modality: 'inPerson',
            note: "Stopped by patient's home, discussed recent hospitalization and gave details for how to reach out to care team if a similar situation comes up. Will call within the week to schedule CHW facilitation."
        }
    },
    {
        id: '49ccf121-1de3-4ffe-a769-a27aae7d9ac5',
        date: '2024-04-28T02:39:00.000Z',
        createdByUser: 'system',
        type: 'hospitalization',
        data: {
            facility: 'Keralty Hospital Miami',
            admissionNote: 'S52.101A Closed fracture of proximal end of radius. X-Ray completed, referral to orthopedic care.'
        }
    },
]

export const useTimeline = () => {
    return { data: timelineData }
}