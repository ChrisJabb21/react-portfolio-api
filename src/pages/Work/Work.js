import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph} from '../../styles';
import { WorkItem, WorkTitle, JobTitle} from './styles';

const Work = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                    <SectionTitle>Work</SectionTitle>
                    <i>(Current Job if end year is empty)</i>
                <ul>
                    {user.work.map((work, i) => (
                    <WorkItem key={i}>
                        <WorkTitle>
                            {work.position}
                        </WorkTitle>
                    <div>
                    <JobTitle>{work.company} </JobTitle>
                    <span>  {work.location}</span>
                    <span>  &sdot; </span>
                        <span>
                        Start: {work.start.month}/{work.start.year}, to end: {work.end.year}
                        </span>
                        <br></br><span>Total months: {work.start.month +work.start.month}</span>
                    </div>
                    <Paragraph>{work.summary}</Paragraph>
                </WorkItem>
            ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Work;