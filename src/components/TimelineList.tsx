import { useTimeline } from "../mockData/timeline"

export const TimelineList = () => {
    const { data } = useTimeline()

    return (
        <>
        {data.map((timelineItem) => (
            <div key={timelineItem.id} className='bg-slate-100 p-4'>
                {timelineItem.date}: {timelineItem.type}
            </div>
        ))}
        </>
    )
}