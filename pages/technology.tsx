import React from 'react';
import Link from 'next/link';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import { ListItemUnderlined } from '../components/ListItem';
import ServiceItem from '../components/ServiceItem';
import { LeftArrow, RightArrow } from '../components/arrows';
import { TimelineItem } from '../components/TimelineItem';
import useDrag from '../components/useDrag';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = 'test';
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () => Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function TechPage() {
    const [items] = React.useState(getItems);

    // NOTE: for drag by mouse
    const { dragStart, dragStop, dragMove, dragging } = useDrag();
    const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => (
        ev: React.MouseEvent,
    ) => dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += posDiff;
        }
    });

    const [selected, setSelected] = React.useState<string>('');
    const handleItemClick = (itemId: string) => () => {
        if (dragging) {
            return false;
        }
        setSelected(selected !== itemId ? itemId : '');
    };

    return (
    <>
        <Page title={Constants.titles.technology} canonical="technology">
            <div className="hero d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                <Header/>
                <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 justify-content-start pt-5">
                                <h5 className="title--light mb-0">Our Tech</h5>
                                <h1 className="hero__title mb-4">React Native <span className="text-primary bold">Specialists</span></h1>
                                <p className="text-light">We use React Native to build amazing mobile apps. Why? React Native is a real mobile app. Unlike web app wrappers, React Native uses native platform libraries, creating a completely native experience for your users.
                                </p>
                            </div>
                            <div
                              className="flex-1 align-items-center justify-content-center hero__blob-container hidden-sm-down"
                            >
                                <img src="/static/images/hero-blob-3.svg" alt="hero-blob" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section--dark">
                <div className="container pr-5">
                    {/* <h2 className="section__title--light text-center"><span */}
                    {/*  className="text-primary" */}
                    {/* >Innovators */}
                    {/* </span> since the beginning */}
                    {/* </h2> */}
                    {/* <p className="text-light">Since React Native's inception in 2015, we've built blah blah blah */}
                    {/* </p> */}
                </div>
                <div className="ml-md-5 ml-0 pl-5 pl-md-5 pb-0">
                    {/* Timeline goes here */}
                    <div className="example timeline pb-5">
                        <div onMouseLeave={dragStop}>
                            <ScrollMenu
                              LeftArrow={LeftArrow}
                              RightArrow={RightArrow}
                              onWheel={onWheel}
                              onMouseDown={() => dragStart}
                              onMouseUp={() => dragStop}
                              onMouseMove={handleDrag}
                            >
                                <div className="d-flex timeline-year-container">
                                    <h5 className="text-light mr-3">2022</h5>
                                </div>

                                {/* {items.map(({ id }) => ( */}
                                {/*      <TimelineItem */}
                                {/*        title={id} */}
                                {/*        itemId={id} // NOTE: itemId is required for track items */}
                                {/*        key={id} */}
                                {/*        onClick={handleItemClick(id)} */}
                                {/*        selected={id === selected} */}
                                {/*        year={id} */}
                                {/*        text={id} */}
                                {/*        img="/static/images/ssg-mark-white.svg" */}
                                {/*      /> */}
                                {/*  ))} */}
                                <TimelineItem
                                // title={'hello'}
                                  itemId={0} // NOTE: itemId is required for track items
                                  key={0}
                                // onClick={handleItemClick(id)}
                                // selected={id === selected}
                                  year="October 2021"
                                  text="Sports Gambling, Picks & Odds for iOS and Android"
                                  img="/static/images/clients/white/Pickswise-Logo-white.svg"
                                />
                                <TimelineItem
                                  itemId={1} // NOTE: itemId is required for track items
                                  key={1}
                                  year="September 2021"
                                  text="Construction Processes made easy on iOS and Android"
                                  img="/static/images/clients/white/site-assist-white.svg"
                                />
                                <TimelineItem
                                  itemId={2} // NOTE: itemId is required for track items
                                  key={2}
                                  year="June 2020"
                                  text="Legal support when you need it on iOS and Android"
                                  img="/static/images/clients/white/legal-utopia.png"
                                />
                                <TimelineItem
                                  itemId={3}
                                  key={3}
                                  year="June 2020"
                                  text="Corporate health and wellbeing tracker on iOS and Android"
                                  img="/static/images/clients/white/hero-logo-white.png"
                                />
                                <TimelineItem
                                  itemId={3}
                                  key={3}
                                  year="June 2019"
                                  text="The home of horse racing on iOS and Android"
                                  img="/static/images/clients/white/racing-post-white.svg"
                                />
                                <TimelineItem
                                  itemId={3}
                                  key={3}
                                  year="May 2019"
                                  text="Health and fitness for Krissy Cela on iOS and Android"
                                  img="/static/images/clients/white/tone-and-sculpt-white.svg"
                                />
                                <TimelineItem
                                  itemId={3}
                                  key={3}
                                  year="March 2019"
                                  text="Smart device manager for respiratory conditions"
                                  img="/static/images/clients/white/hailie-white.svg"
                                />
                                <TimelineItem
                                  itemId={3}
                                  key={3}
                                  year="August 2018"
                                  text="Innovation and development manager on iOS and Android"
                                  img="/static/images/clients/white/wazoku-white.png"
                                />
                                <TimelineItem
                                  itemId={3}
                                  key={3}
                                  year="September 2017"
                                  text="Booking & facilities management on iOS and Android"
                                  img="/static/images/clients/white/imperial-white.png"
                                />
                                <TimelineItem
                                  itemId={3}
                                  key={3}
                                  year="May 2017"
                                  text="Smart shopping companion app on iOS and Android"
                                  img="/static/images/clients/white/unilever-white.svg"
                                />
                                <TimelineItem
                                  itemId={3}
                                  key={3}
                                  year="April 2017"
                                  text="Connected car rentals on iOS"
                                  img="/static/images/clients/white/hertz-white.svg"
                                />
                                <TimelineItem
                                  itemId={3}
                                  key={3}
                                  year="January 2016"
                                  text="Mobile healthcare for renal patients on  iOS and Android"
                                  img="/static/images/clients/nhs.svg"
                                />
                                <TimelineItem
                                  itemId={3}
                                  key={3}
                                  year="May 2015"
                                  text="Premier League Fantasy football on IOS and Android"
                                  img="/static/images/clients/white/dugout-white.svg"
                                />
                                <TimelineItem
                                  title="React Native"
                                  itemId={3}
                                  key={3}
                                  year="March 2015"
                                  text="First public release"
                                />
                                <div className="d-flex timeline-year-container">
                                    <h5 className="text-light mr-3">2015</h5>
                                </div>
                            </ScrollMenu>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section--no-padding">
                <h2 className="section__title section__title--dark text-center mt-5"><span className="text-primary">Decades</span> of tech experience</h2>
                <div className="col-md-4 offset-md-4">
                    <p className="text-center mt-3">At Solid State Group we use industry standard and the very latest technologies to deliver our projects. Our customers trust us in the choice of technology to meet their requirements as well as designing an architecture suitable to their business needs.</p>
                </div>
                <div className="container align-self-center">

                    <ServiceItem
                      serviceImage="/static/images/services/AWS-tech-partner.png"
                      srcSet="/static/images/services/AWS-tech-partner.png 1x, /static/images/services/AWS-tech-partner@2x.png 2x,"
                      className="flex-row-reverse"
                      imageClassName="img__shadow "
                      subTitle="Actively Open Source"
                      // serviceLink="/services/strategy"
                      gaServiceLabel="services_strategy"
                      serviceDescription="We are active in the open source community. We work with a wide range of tools, with a focus on open source technologies. Something about building successful open source products here"
                      serviceListItem={(
                        <React.Fragment>
                            <ListItemUnderlined
                              listItemText="React Native Performance Monitor"
                              listItemLink="https://github.com/Flagsmith/react-native-performance-monitor"
                            />
                            <ListItemUnderlined
                              listItemText="Flagsmith"
                              listItemLink="https://github.com/Flagsmith/flagsmith"
                            />
                        </React.Fragment>
                      )}
                    />

                    <ServiceItem
                      serviceImage="/static/images/services/AWS-tech-partner.png"
                      srcSet="/static/images/services/AWS-tech-partner.png 1x, /static/images/services/AWS-tech-partner@2x.png 2x,"
                      className="flex-row-reverse"
                      imageClassName="img__shadow "
                      subTitle="AWS Experts"
                      // serviceLink="/services/strategy"
                      gaServiceLabel="services_strategy"
                      serviceDescription="We are a certified APN Technology Partner, providing software solutions that are either hosted on, or integrated with, the AWS platform."
                      serviceListItem={(
                          <React.Fragment>
                              <ListItemUnderlined
                                listItemText="Tone & Sculpt"
                                listItemLink="/projects/tone-and-sculpt"
                              />
                              <ListItemUnderlined
                                listItemText="Meow Now"
                                listItemLink="/projects/meownow"
                              />
                              <ListItemUnderlined
                                listItemText="Dugout FC"
                                listItemLink="/projects/dugout"
                              />
                          </React.Fragment>
                )}
                    />

                    <ServiceItem
                      serviceImage="/static/images/services/Wireframes.png"
                      srcSet="/static/images/services/Wireframes.png 1x, /static/images/services/Wireframes@2x.png 2x,"
                // className="flex-row-reverse"
                      imageClassName="img__shadow "
                      subTitle="Discovery"
                      serviceLink="/services/discovery"
                      gaServiceLabel="services_strategy"
                      serviceDescription="Our discovery team consists of members of our senior staff from all disciplines including new business / business analysts, UX/UI design, development and project management.
Our senior team has more than 80 years combined experience in designing and launching products in various industries."
                      serviceListItem={(
                          <React.Fragment>
                              <ListItemUnderlined
                                listItemText="React Native Performance Monitor"
                                listItemLink="https://github.com/Flagsmith/flagsmith"
                              />
                              <ListItemUnderlined
                                listItemText="Detonator"
                                listItemLink="/projects/detonator"
                              />
                              <ListItemUnderlined
                                listItemText="Meow Now"
                                listItemLink="/projects/meownow"
                              />
                          </React.Fragment>
                )}
                    />

                </div>
            </div>

            <Footer />
        </Page>
    </>
    );
}
export default TechPage;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}

// ReactDOM.render(<App />, document.getElementById("root"));
