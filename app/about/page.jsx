import EduCard from '@/components/educard';
import Heading from '@/components/heading';
import SkillCap from '@/components/skill-cap';

import { companies, institutions } from '@/app/data/data';
import { skills } from '@/app/data/skills';

export const metadata = {
  title: 'About',
  description:
    "Discover Ella's journey being a networking enthusiast."
};

export default function About() {
  return (
    <>
      <section>
        <Heading text={'Tech Stack'} />

        <div className="mt-3 flex w-full flex-wrap gap-4 lg:px-5">
          {skills.map((item) => (
            <SkillCap key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section>
        <Heading text={'Career'} />

        <div className="mt-3 space-y-4 lg:px-5">
          {companies.map((edu) => (
            <EduCard key={edu.id} {...edu} />
          ))}
        </div>
      </section>

      <section>
        <Heading text={'Education'} />

        <div className="mt-3 space-y-4 lg:px-5">
          {institutions.map((edu) => (
            <EduCard key={edu.id} {...edu} />
          ))}
        </div>
      </section>
    </>
  );
}
