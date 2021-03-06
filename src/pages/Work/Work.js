import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph} from '../../styles';
import { WorkItem, WorkTitle, JobTitle} from './styles';

const Work = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                    <SectionTitle>Work</SectionTitle>
                <ul>
                    {user.work.map((work, i) => (
                    <WorkItem key={i}>
                        <WorkTitle>
                            {work.position}
                        </WorkTitle>
                    <div>
                    <JobTitle>{work.company} </JobTitle>
                    <br></br><span>{work.location}</span>
                    <br></br>
                        <span>
                        Start: {work.start.month}/{work.start.year}, to end: {work.end.year}
                        </span>
                        <br></br><span>Current role: {work.isCurrentRole.toString()} </span>
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