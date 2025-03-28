import CoreConcept from './CoreConcept'; 
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
            <h2>Core concept</h2>
            <ul>
            {
                CORE_CONCEPTS.map((concept) => {
                return (
                    <CoreConcept key={concept.title}
                    {...concept}
                    />
                )  
                })
            }
            </ul>
        </section>
    )
}
