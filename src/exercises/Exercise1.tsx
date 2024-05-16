import { Card } from "../components/Card"
import { useTimeline } from "../mockData/timeline"

export const Exercise1 = () => {
    const { data } = useTimeline()
    return (
        <Card className='flex flex-col gap-2'>
            <h2 className="font-semibold">Exercise 1</h2>
            <p>
                <span className="italic">User Story: </span>
                As an outreach liaison, I want to see any recent events related to a patient,
                so that I have all the relevant information in front of me when I'm calling them.
            </p>
            <p>
                <span className="italic">Dev Notes: </span>
                Endpoint <pre className="inline">/v1/timeline</pre> will return all timeline items in desc chronological order. (mocked for this exercise)
            </p>
            {data.map((timelineItem) => (
                <div key={timelineItem.id} className='bg-slate-100 p-4'>
                    {timelineItem.date}: {timelineItem.type}
                </div>
            ))}
        </Card>
    )
}