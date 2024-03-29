import React, {Component} from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';
import BlogTag from '../../components/BlogTag';
import blog from '../../public/blog.json';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Page from '../../components/Page';
import BlogItem, {BlogItemSummary} from '../../components/BlogItem';
import InfiniteScroll from '../../components/InfiniteScroll';
import filter from 'lodash/filter';
const BlogPage = class extends Component {
    static displayName = 'BlogPage'

    static propTypes = {
        router: propTypes.object,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            filter: 'javascript',
        };
    }

    componentWillMount() {
        API.trackPage(Constants.pages.blog);
    }

    getBlog = () => {
        if (!this.props.router.query.tag) {
            return blog;
        }
        return filter(blog, (item) => {
            return item.tags.includes(this.props.router.query.tag);
        });
    }

    componentDidMount() {
        gsap.timeline()
            .from('.hero__container', { duration: 0.5, y: 10, opacity: 0, ease: 'power1' })
            .from('.blog', { duration: 0.5, y: 10, opacity: 0, ease: 'power1' })
    }

    render() {
        const blogItems = this.getBlog();
        const filteredBy = this.props.router.query.tag;
        return (
            <Page title={Constants.titles.blog} canonical="blog">
                <div className="hero hero--half d-flex flex-column mx-0 pt-4 pr-4 pb-0 pl-4">
                    <Header/>
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                        <div className="flex-1 justify-content-start p-5">
                            <div className="offset-lg-3">
                                <p className="text-light">Blog</p>
                                <h1 className="hero__title mb-4">Thoughts and experiences from the digital world</h1>
                            </div>
                        </div>
                        <div
                            className="flex-1 align-items-center justify-content-center hero__gfx-container hidden-sm-down"/>
                    </div>
                </div>
                <div className="blog">
                    <div className="container mt-5">
                        {!!filteredBy && (
                          <div className="mb-3 text-center">
                              Filtering by <BlogTag tag={filteredBy}/>
                              {' '}
                              <Link scroll={false} href="/blog">
                                  <a href="/blog">
                                      View all
                                  </a>
                              </Link>
                          </div>
                        )}
                        <div className="row">
                        {blogItems.map(b => b.featured && !filteredBy && (
                            <React.Fragment key={b.title}>
                                <BlogItem key={b.title} item={b}/>
                            </React.Fragment>
                        ))}

                        <InfiniteScroll
                          pageSize={4}
                          renderItem={(b)=> {
                              return <React.Fragment key={b.title}>
                                  <BlogItemSummary key={b.title} item={b}/>
                              </React.Fragment>
                          }}
                          chunkSize={3}
                          items={filter(blogItems, (b)=>(!b.featured||!!filteredBy))}/>

                        </div>
                    </div>
                </div>
                <Footer/>
            </Page>
        );
    }
};

BlogPage.propTypes = {};

export default BlogPage;
