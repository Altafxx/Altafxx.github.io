import Link from "next/link";
import Badge from "./badge"

interface VolunteerProps {
    open_source: {
        name: string;
        site: string[];
        description: string;
    }[];
};

export default function Volunteer({ open_source }: VolunteerProps) {
    return <div className="p-3 transition-all duration-300 ease-in-out rounded-lg group text- hover:bg-lavender-macaron/30 hover:ring-2 ring-lavender-macaron/30">
        <Badge className="px-2 text-transparent transition-all duration-300 ease-in-out bg-white shadow-md bg-gradient-to-r from-lavender-macaron to-raspberry-ganache bg-clip-text group-hover:bg-clip-border shadow-lavender-macaron group-hover:scale-105 group-hover:from-lavender-macaron group-hover:to-raspberry-ganache group-hover:text-white">Volunteer Work and Interests</Badge>
        {
            open_source.map((item, index) => (
                <div key={index} className={`${open_source.length != index + 1 ? "mb-4" : ""}`}>
                    <Link href={item.site.join("")}>
                        <h3 className="text-left">
                            {item.name} ({item.site[1]})
                        </h3>
                    </Link>
                    <p>{item.description}</p>
                </div>
            ))
        }
    </div>
}