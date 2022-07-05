import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;
const Faq = () => {

    return (
        <section className='faq' id='faq'>

            <div className='container'>
                <h2 className='faqHeader'>FAQs</h2>
                <p>Frequently asked questions</p>
                <Collapse accordion expandIconPosition='end' defaultActiveKey={1}>
                    <Panel header="What is Mailersand?" key="1">
                        <p>Mailersand is a Real estate Company known for creating a quality lifestyles and building a strong communities for their clients.</p>
                    </Panel>
                    <Panel header="What currency can I pay in?" key="2">
                        <p>At this time, we can only receive payment in US Dollars ($).</p>
                    </Panel>
                    <Panel header="Who can leave a review?" key="3">
                        <p>Only those who are or have been a Mailersand resident or homeowner can leave a review.</p>
                    </Panel>
                    <Panel header="How is the ratings score calculated?" key="4">
                        <p>The ratings score displayed is simply an average of every site rating (1-5) that a Mailersand resident or homeowner has given.</p>
                    </Panel>
                    <Panel header="How are reviews moderated?" key="5">
                        <p>All reviews are moderated to ensure they align with our content and review policy. Only reviews that meet these policies will be published. </p>
                    </Panel>

                </Collapse>
            </div>
        </section>
    )
}

export default Faq