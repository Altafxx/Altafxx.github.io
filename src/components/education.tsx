import Badge from "./badge"

interface EducationProps {
    education: {
        qualification: string;
        course: string;
        location: string;
        cgpa: number;
        start: { month: string; year: number; };
        end: { month: string; year: number; };
        achievement: { position: string; association: string; }[];
    }[]
};

export default function Education({ education }: EducationProps) {
    return <div className="p-3 text-left transition-all duration-300 ease-in-out rounded-lg group hover:bg-lavender-macaron/30 hover:ring-2 ring-lavender-macaron/30">
        <Badge className="px-2 text-transparent transition-all duration-300 ease-in-out bg-white shadow-md bg-gradient-to-r from-lavender-macaron to-raspberry-ganache bg-clip-text group-hover:bg-clip-border shadow-lavender-macaron group-hover:scale-105 group-hover:from-lavender-macaron group-hover:to-raspberry-ganache group-hover:text-white">Education History</Badge>
        {education.map((item, index) => (
            <div key={index} className="mb-4">
                <h3>
                    {item.qualification} {item.course}
                </h3>
                <h4>{item.location} ({item.start.month} {item.start.year} to {item.end.month} {item.end.year})</h4>
                <ul className="pl-5">
                    {item.achievement.map((item, i) => (
                        <li key={i}>• {item.position}, {item.association}</li>
                    ))}
                </ul>
            </div>
        ))}

    </div>
}