import { PropsWithChildren, ReactNode } from "react";

type SectionType = 'news' | 'search' | 'info'

const styleByType: Record<SectionType, string> = {
  news: 'news-section',
  search: 'search-section',
  info: 'info-section',
}

interface PropsChildren {
  children: ReactNode;
  style: SectionType,
}

const Section = ({ style, children }: PropsWithChildren<PropsChildren>) => {
  return (
    <section className={styleByType[style]}>
      {children}
    </section>
  )
}

export default Section;

// Обертка секций, отвечает за расположение детей