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
                    <h2 className="section__title--light"><span
                      className="text-primary"
                    >Innovators
                    </span> since the beginning
                    </h2>
                    <p className="text-light">Since React Native's inception in 2015, we've built blah blah blah
                    </p>
                </div>
                <div className="ml-5 pl-5 pb-5">
                    {/* Timeline goes here */}
                    <div className="example pt-4 pb-5">
                        <div onMouseLeave={dragStop}>
                            <ScrollMenu
                              LeftArrow={LeftArrow}
                              RightArrow={RightArrow}
                              onWheel={onWheel}
                              onMouseDown={() => dragStart}
                              onMouseUp={() => dragStop}
                              onMouseMove={handleDrag}
                            >
                                {items.map(({ id }) => (
                                    <TimelineItem
                                      title={id}
                                      itemId={id} // NOTE: itemId is required for track items
                                      key={id}
                                      onClick={handleItemClick(id)}
                                      selected={id === selected}
                                    />
                                ))}
                            </ScrollMenu>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section--no-padding">
              <h2 className="section__title section__title--dark text-center mt-5"><span className="text-primary">Decades</span> of tech experience</h2>
                <div className="container align-self-center">

                    <ServiceItem
                      serviceImage="/static/images/projects/tone-and-sculpt/macbook-pro-on-table.jpg"
                      srcSet="/static/images/projects/tone-and-sculpt/macbook-pro-on-table.jpg 1x, /static/images/projects/tone-and-sculpt/macbook-pro-on-table@2x.jpg 2x,"
                      className="flex-row-reverse"
                      imageClassName="img__shadow "
                      subTitle="Strategy"
                      serviceLink="/services/strategy"
                      gaServiceLabel="services_strategy"
                      serviceDescription="Our management team has over 50 years combined experience in creating technical solutions to solve business problems. Whether it’s digital transformation, business process re-engineering, or a new product or service, our background in management consulting allows us to fully scope business requirements and translate them into technical solutions."
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
                                listItemText="Tone & Sculpt"
                                listItemLink="/projects/tone-and-sculpt"
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
