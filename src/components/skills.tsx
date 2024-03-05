// skills.tsx
import React from 'react';
import Badge from "@/components/badge";

interface SkillsProps {
    skill: {
        language: string[];
        framework: string[][];
        ui: string[];
        database: string[];
        other: string[];

    };
}

export default function Skills({ skill }: SkillsProps) {
    return (
        <div className="p-3 text-left transition-all duration-300 ease-in-out rounded-lg group hover:bg-lavender-macaron/30 hover:ring-2 ring-lavender-macaron/30">
            <Badge className="px-2 text-transparent transition-all duration-300 ease-in-out bg-white shadow-md bg-gradient-to-r from-lavender-macaron to-raspberry-ganache bg-clip-text group-hover:bg-clip-border shadow-lavender-macaron group-hover:scale-105 group-hover:from-lavender-macaron group-hover:to-raspberry-ganache group-hover:text-white">Relevant Skills</Badge>
            <h3>Language:</h3>
            <ul className="pl-5 mb-4">
                {skill.language.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>Framework:</h3>
            <ul className="pl-5 mb-4">
                {skill.framework.map((item, index) => (
                    <li key={index}>{item[0]} ({item[1]})</li>
                ))}
            </ul>
            <h3>UI:</h3>
            <ul className="pl-5 mb-4">
                {skill.ui.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>Databases:</h3>
            <ul className="pl-5 mb-4">
                {skill.database.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>Others:</h3>
            <ul className="pl-5 mb-4">
                {skill.other.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
